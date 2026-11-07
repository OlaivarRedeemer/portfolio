"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const TARGETS = ".r, .r-words, .r-frame, .r-cats, .panel-img, .card";
const STAGGER_MS = 70;
const MAX_STAGGER = 5;
const IMAGE_WAIT_MS = 900;
// Must match the body grid in globals.css.
const GRID = 8;
const GRID_OFFSET = 0;
const TILT_DEG = 2.7;

/** Runs once `el` has a picture to show, so a frame never opens on an empty image. */
function whenLoaded(el: Element, run: () => void) {
  const img = el instanceof HTMLImageElement ? el : el.querySelector("img");
  if (!img || img.complete) return run();
  let done = false;
  const once = () => { if (!done) { done = true; run(); } };
  img.addEventListener("load", once, { once: true });
  img.addEventListener("error", once, { once: true });
  setTimeout(once, IMAGE_WAIT_MS);
}

export default function Motion() {
  const path = usePathname();

  useEffect(() => {
    (window as Window & { __motion?: boolean }).__motion = true;
    if (!document.documentElement.classList.contains("m")) return;

    const io = new IntersectionObserver((entries) => {
      let batch = 0;
      for (const { target, isIntersecting, boundingClientRect } of entries) {
        if (isIntersecting) {
          io.unobserve(target);
          const delay = Math.min(batch++, MAX_STAGGER) * STAGGER_MS;
          (target as HTMLElement).style.setProperty("--d", `${delay}ms`);
          whenLoaded(target, () => target.classList.add("in"));
        } else if (boundingClientRect.bottom < 0) {
          // Jumped past it (an anchor link or restored scroll), so show it without playing.
          io.unobserve(target);
          target.classList.add("in", "in-now");
        }
      }
    }, { rootMargin: "0px 0px -6% 0px" });

    document.querySelectorAll(`:is(${TARGETS}):not(.in)`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  // Cards lean away from the pointer, as if pressed where you point.
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    let current: HTMLElement | null = null;
    const clear = () => { current?.style.removeProperty("--rx"); current?.style.removeProperty("--ry"); current = null; };
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element).closest?.<HTMLElement>(".card") ?? null;
      if (card !== current) clear();
      if (!card) return;
      current = card;
      // Measured without the tilt's own change of shape: layout box, not the transformed one.
      const box = card.offsetParent?.getBoundingClientRect();
      const left = (box?.left ?? 0) + card.offsetLeft, top = (box?.top ?? 0) + card.offsetTop;
      const x = (e.clientX - left) / card.offsetWidth * 2 - 1, y = (e.clientY - top) / card.offsetHeight * 2 - 1;
      card.style.setProperty("--ry", `${(x * TILT_DEG).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${(-y * TILT_DEG).toFixed(2)}deg`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", clear);
    return () => { document.removeEventListener("pointermove", onMove); document.documentElement.removeEventListener("pointerleave", clear); clear(); };
  }, []);

  // Section lines run out across the background grid, so each one is nudged down onto a grid line.
  useEffect(() => {
    const snap = () => {
      document.querySelectorAll<HTMLElement>("[data-fill]").forEach((el) => { el.style.boxShadow = ""; delete el.dataset.fill; });
      document.querySelectorAll<HTMLElement>(".sec").forEach((el) => {
        const current = parseFloat(el.style.marginTop) || 0;
        const top = el.getBoundingClientRect().top + window.scrollY - current;
        const over = (((top - GRID_OFFSET) % GRID) + GRID) % GRID;
        const gap = over < 0.02 || over > GRID - 0.02 ? 0 : GRID - over;
        if (Math.abs(gap - current) > 0.01) el.style.marginTop = gap ? `${gap}px` : "";
        // A white band stays white down to the line, so the nudge never shows a strip of grid.
        if (gap) {
          let before = el.previousElementSibling as HTMLElement | null;
          for (let depth = 0; before && depth < 2 && getComputedStyle(before).backgroundColor !== "rgb(255, 255, 255)"; depth++) before = before.lastElementChild as HTMLElement | null;
          if (before && getComputedStyle(before).backgroundColor === "rgb(255, 255, 255)") { before.style.boxShadow = `0 ${gap}px 0 #fff`; before.dataset.fill = ""; }
        }
      });
    };
    snap();
    const watcher = new ResizeObserver(snap);
    const column = document.querySelector(".column");
    if (column) watcher.observe(column);
    window.addEventListener("resize", snap);
    return () => { watcher.disconnect(); window.removeEventListener("resize", snap); };
  }, [path]);

  return null;
}
