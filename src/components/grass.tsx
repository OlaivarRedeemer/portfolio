"use client";
import { useEffect, useRef } from "react";

// Back to front, so the deepest green sits nearest the viewer.
const LAYERS = [
  { fill: "#b9e08c", spacing: 5, height: [0.62, 1], width: [3, 4.5] },
  { fill: "#6dbb4b", spacing: 7, height: [0.46, 0.8], width: [3, 5] },
  { fill: "#2e8b3d", spacing: 6, height: [0.3, 0.62], width: [3.5, 5.5] },
];
const MAX_HEIGHT = 112;
const MAX_HEIGHT_PHONE = 92;

const REACH_MOUSE = 76;
const REACH_TOUCH = 96;
const PUSH = 1.15; // how far a touched blade leans, in radians
const BRUSH = 0.1; // how much a moving hand flicks the blades it passes
const MAX_LEAN = 1.35;
const STIFFNESS = [70, 120];
const DAMPING = [5, 8];

const GROW_MS = 850;

type Blade = { x: number; h: number; w: number; lean: number; k: number; c: number; delay: number; a: number; v: number };

const between = ([min, max]: number[]) => min + Math.random() * (max - min);
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const growth = (t: number) => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  const back = 1.4;
  const u = t - 1;
  return 1 + (back + 1) * u * u * u + back * u * u; // ease out with a small overshoot
};

/** A strip of grass along the foot of every page. It sways on its own and parts around a hand. */
export default function Grass() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0, height = 0;
    let layers: Blade[][] = [];
    let frame = 0, then = 0, born = 0, visible = false;
    const hand = { x: 0, y: 0, vx: 0, on: false, reach: REACH_MOUSE, at: 0 };

    const plant = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const tallest = width < 761 ? MAX_HEIGHT_PHONE : MAX_HEIGHT;
      layers = LAYERS.map((layer) => {
        const blades: Blade[] = [];
        for (let x = -6; x < width + 6; x += layer.spacing * (0.7 + Math.random() * 0.6)) {
          blades.push({
            x,
            h: tallest * between(layer.height),
            w: between(layer.width),
            lean: (Math.random() - 0.5) * 0.3,
            k: between(STIFFNESS),
            c: between(DAMPING),
            delay: (Math.abs(x - width / 2) / width) * 520 + Math.random() * 180,
            a: 0,
            v: 0,
          });
        }
        return blades;
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      layers.forEach((blades, i) => {
        ctx.fillStyle = LAYERS[i].fill;
        ctx.beginPath();
        blades.forEach((b) => {
          const grown = still ? 1 : growth((now - born - b.delay) / GROW_MS);
          if (grown <= 0) return;
          const h = b.h * grown;
          const angle = b.lean + b.a;
          const tipX = b.x + h * Math.sin(angle);
          const tipY = height - h * Math.cos(angle);
          const midX = b.x + h * 0.45 * Math.sin(angle) * 0.55;
          const midY = height - h * 0.55;
          ctx.moveTo(b.x - b.w / 2, height);
          ctx.quadraticCurveTo(midX - b.w / 2, midY, tipX, tipY);
          ctx.quadraticCurveTo(midX + b.w / 2, midY, b.x + b.w / 2, height);
          ctx.closePath();
        });
        ctx.fill();
      });
    };

    const tick = (now: number) => {
      const dt = Math.min(now - then || 16, 40);
      then = now;
      const seconds = dt / 1000;
      const t = now / 1000;
      const gust = 0.55 + 0.45 * Math.sin(t * 0.37);
      hand.vx *= Math.pow(0.86, dt / 16.67);

      layers.forEach((blades) => blades.forEach((b) => {
        let target = gust * (Math.sin(t * 1.05 + b.x * 0.013) * 0.075 + Math.sin(t * 2.4 + b.x * 0.041) * 0.028);
        if (hand.on) {
          const off = b.x - hand.x;
          const near = 1 - Math.abs(off) / hand.reach;
          // Only blades tall enough to reach the hand feel it.
          const reachesHand = clamp((hand.y - (height - b.h)) / 28 + 1, 0, 1);
          if (near > 0 && reachesHand > 0) {
            const force = near * near * reachesHand;
            target += (off < 0 ? -1 : 1) * force * PUSH;
            b.v += hand.vx * force * BRUSH * (dt / 16.67);
          }
        }
        b.v += (b.k * (target - b.a) - b.c * b.v) * seconds;
        b.a = clamp(b.a + b.v * seconds, -MAX_LEAN, MAX_LEAN);
      }));

      draw(now);
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (still || frame) return;
      then = performance.now();
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const moveTo = (clientX: number, clientY: number, reach: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const now = performance.now();
      if (hand.on) hand.vx = clamp((x - hand.x) / Math.max(now - hand.at, 8), -3, 3);
      hand.x = x;
      hand.y = clientY - rect.top;
      hand.at = now;
      hand.reach = reach;
      hand.on = true;
    };
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "touch") moveTo(e.clientX, e.clientY, REACH_MOUSE);
    };
    const onTouch = (e: TouchEvent) => {
      const finger = e.touches[0];
      if (finger) moveTo(finger.clientX, finger.clientY, REACH_TOUCH);
    };
    const release = () => { hand.on = false; };

    plant();
    if (still) {
      draw(0);
      return;
    }
    // Stays bare until it scrolls into view, so the grass is seen growing.
    draw(-1e6);

    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        if (!born) born = performance.now();
        start();
      } else {
        stop();
      }
    }, { threshold: 0.15 });
    seen.observe(canvas);

    const resized = new ResizeObserver(() => {
      if (Math.abs(canvas.getBoundingClientRect().width - width) < 1) return;
      plant();
      if (!visible) draw(born ? performance.now() : -1e6);
    });
    resized.observe(canvas);

    // Passive touch listeners: a finger here can still scroll the page.
    canvas.addEventListener("pointermove", onPointer);
    canvas.addEventListener("pointerdown", onPointer);
    canvas.addEventListener("pointerleave", release);
    canvas.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("touchend", release, { passive: true });
    canvas.addEventListener("touchcancel", release, { passive: true });

    return () => {
      stop();
      seen.disconnect();
      resized.disconnect();
      canvas.removeEventListener("pointermove", onPointer);
      canvas.removeEventListener("pointerdown", onPointer);
      canvas.removeEventListener("pointerleave", release);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("touchend", release);
      canvas.removeEventListener("touchcancel", release);
    };
  }, []);

  return (
    <div className="grass">
      <canvas ref={ref} aria-hidden="true" />
    </div>
  );
}
