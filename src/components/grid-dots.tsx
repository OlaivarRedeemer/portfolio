"use client";
import { useEffect, useRef } from "react";

const PITCH = 16; // every second grid line, so each dot sits on a crossing
const MAX_DOT = 4.6;
const MIN_DOT = 0.35;
const COLOR = "#666";
const FOLLOW = 0.22; // how quickly the centre catches up with the pointer, per 60fps frame

// Speed reaction: a slow pointer makes a small tight circle, a fast one a wider circle and longer trail.
const RADIUS_SLOW = 72;
const RADIUS_FAST = 124;
const FAST_SPEED = 1.6; // px per ms that counts as fully fast
const SPEED_EASE = 0.12;
const FADE_SLOW_MS = 380;
const FADE_FAST_MS = 820;
const TRAIL_STEP = 14; // px travelled before the trail keeps another point
const TRAIL_POINTS = 28;
const HEAD_FADE_MS = 360;

// Spring: each dot grows, slightly overshoots and settles on its own.
const STIFFNESS = 170;
const DAMPING = 14;
const SETTLED = 0.004;

// Click ripple: one soft ring across the grid.
const RIPPLE_SPEED = 0.36; // px per ms
const RIPPLE_MS = 1150;
const RIPPLE_WIDTH = 52;
const RIPPLE_STRENGTH = 0.7;

type Point = { x: number; y: number; life: number; radius: number; fade: number };
type Dot = { x: number; y: number; size: number; velocity: number; target: number };
type Ripple = { x: number; y: number; age: number };

/**
 * Halftone dots around the pointer, drawn behind the page. Anything with a fill covers them,
 * so they only ever show where the background grid shows.
 */
export default function GridDots() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let dpr = 1, originX = 0;
    let target: { x: number; y: number } | null = null; // pointer, in window coordinates
    let head: Point | null = null; // eased centre, in page coordinates
    const trail: Point[] = [];
    const ripples: Ripple[] = [];
    const dots = new Map<number, Dot>();
    let last: { x: number; y: number } | null = null;
    let frame = 0, then = 0, drawnScroll = -1, idle = true;
    let pace = 0; // 0 slow, 1 fast

    const raise = (col: number, row: number, value: number) => {
      if (value <= 0) return;
      const key = row * 100000 + col;
      let dot = dots.get(key);
      if (!dot) {
        dot = { x: originX + col * PITCH, y: 0.5 + row * PITCH, size: 0, velocity: 0, target: 0 };
        dots.set(key, dot);
      }
      if (dot.target < value) dot.target = value;
    };

    const stamp = (p: Point) => {
      const firstCol = Math.ceil((p.x - p.radius - originX) / PITCH);
      const lastCol = Math.floor((p.x + p.radius - originX) / PITCH);
      const firstRow = Math.ceil((p.y - p.radius - 0.5) / PITCH);
      const lastRow = Math.floor((p.y + p.radius - 0.5) / PITCH);
      for (let row = firstRow; row <= lastRow; row++) {
        for (let col = firstCol; col <= lastCol; col++) {
          const d = Math.hypot(originX + col * PITCH - p.x, 0.5 + row * PITCH - p.y);
          if (d < p.radius) raise(col, row, (1 - d / p.radius) * p.life);
        }
      }
    };

    const stampRipple = (r: Ripple) => {
      const front = RIPPLE_SPEED * r.age;
      const strength = RIPPLE_STRENGTH * (1 - r.age / RIPPLE_MS);
      const reach = front + RIPPLE_WIDTH;
      const top = window.scrollY - PITCH, bottom = window.scrollY + window.innerHeight + PITCH;
      const firstCol = Math.ceil((Math.max(r.x - reach, -PITCH) - originX) / PITCH);
      const lastCol = Math.floor((Math.min(r.x + reach, window.innerWidth + PITCH) - originX) / PITCH);
      const firstRow = Math.ceil((Math.max(r.y - reach, top) - 0.5) / PITCH);
      const lastRow = Math.floor((Math.min(r.y + reach, bottom) - 0.5) / PITCH);
      for (let row = firstRow; row <= lastRow; row++) {
        for (let col = firstCol; col <= lastCol; col++) {
          const d = Math.hypot(originX + col * PITCH - r.x, 0.5 + row * PITCH - r.y);
          const off = Math.abs(d - front);
          if (off < RIPPLE_WIDTH) raise(col, row, (1 - off / RIPPLE_WIDTH) * strength);
        }
      }
    };

    const draw = () => {
      const scroll = window.scrollY;
      drawnScroll = scroll;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = COLOR;
      ctx.beginPath();
      dots.forEach((dot) => {
        if (dot.size <= 0) return;
        const r = Math.pow(dot.size, 0.85) * MAX_DOT;
        if (r < MIN_DOT) return;
        const y = dot.y - scroll;
        if (y < -MAX_DOT * 2 || y > window.innerHeight + MAX_DOT * 2) return;
        ctx.moveTo(dot.x + r, y);
        ctx.arc(dot.x, y, r, 0, Math.PI * 2);
      });
      ctx.fill();
    };

    const tick = (now: number) => {
      const dt = Math.min(now - then || 16, 48);
      then = now;
      let moving = false;

      if (target) {
        const px = target.x, py = target.y + window.scrollY;
        if (!head) head = { x: px, y: py, life: 0, radius: RADIUS_SLOW, fade: FADE_SLOW_MS };
        const ease = 1 - Math.pow(1 - FOLLOW, dt / 16.67);
        const stepX = (px - head.x) * ease, stepY = (py - head.y) * ease;
        head.x += stepX;
        head.y += stepY;
        const speed = Math.min(1, Math.hypot(stepX, stepY) / dt / FAST_SPEED);
        pace += (speed - pace) * (1 - Math.pow(1 - SPEED_EASE, dt / 16.67));
        head.radius = RADIUS_SLOW + (RADIUS_FAST - RADIUS_SLOW) * pace;
        head.fade = FADE_SLOW_MS + (FADE_FAST_MS - FADE_SLOW_MS) * pace;
        head.life = Math.min(1, head.life + dt / 180);
        if (Math.hypot(px - head.x, py - head.y) > 0.3 || head.life < 1 || pace > 0.01) moving = true;
        if (!last || Math.hypot(head.x - last.x, head.y - last.y) > TRAIL_STEP) {
          trail.push({ ...head });
          if (trail.length > TRAIL_POINTS) trail.shift();
          last = { x: head.x, y: head.y };
        }
      } else if (head) {
        head.life -= dt / HEAD_FADE_MS;
        pace = 0;
        moving = true;
        if (head.life <= 0) { head = null; last = null; }
      }

      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].life -= dt / trail[i].fade;
        if (trail[i].life <= 0) trail.splice(i, 1);
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].age += dt;
        if (ripples[i].age >= RIPPLE_MS) ripples.splice(i, 1);
      }

      dots.forEach((dot) => { dot.target = 0; });
      trail.forEach(stamp);
      if (head) stamp(head);
      ripples.forEach(stampRipple);

      const seconds = dt / 1000;
      dots.forEach((dot, key) => {
        dot.velocity += (STIFFNESS * (dot.target - dot.size) - DAMPING * dot.velocity) * seconds;
        dot.size += dot.velocity * seconds;
        const settled = Math.abs(dot.target - dot.size) < SETTLED && Math.abs(dot.velocity) < SETTLED;
        if (settled && dot.target === 0) dots.delete(key);
        else if (!settled) moving = true;
      });
      if (trail.length || ripples.length) moving = true;

      if (moving || window.scrollY !== drawnScroll) draw();
      if (moving) frame = requestAnimationFrame(tick);
      else idle = true;
    };

    const wake = () => {
      if (!idle) return;
      idle = false;
      then = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const measure = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      const column = document.querySelector(".column");
      originX = (column?.getBoundingClientRect().left ?? 0) + 0.5;
      dots.clear(); // their positions came from the old column edge
      drawnScroll = -1;
      wake();
    };

    const onMouse = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      target = { x: e.clientX, y: e.clientY };
      wake();
    };
    const onDown = (e: PointerEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY + window.scrollY, age: 0 });
      wake();
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) { target = { x: t.clientX, y: t.clientY }; wake(); }
    };
    const onRelease = () => { target = null; wake(); };

    measure();
    const root = document.documentElement;
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", wake, { passive: true });
    window.addEventListener("pointermove", onMouse, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    root.addEventListener("pointerleave", onRelease);
    window.addEventListener("blur", onRelease);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onRelease, { passive: true });
    window.addEventListener("touchcancel", onRelease, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", wake);
      window.removeEventListener("pointermove", onMouse);
      window.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointerleave", onRelease);
      window.removeEventListener("blur", onRelease);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onRelease);
      window.removeEventListener("touchcancel", onRelease);
    };
  }, []);

  return <canvas ref={ref} className="grid-dots" aria-hidden="true" />;
}
