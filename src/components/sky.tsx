"use client";
import { useEffect, useRef, useState } from "react";

const GRID = 16;

// Where the stars sit, as fractions of the sky's width and of its upper part.
const STAR_SPOTS = [
  [0.06, 0.5], [0.11, 0.16], [0.17, 0.74], [0.23, 0.32], [0.3, 0.1], [0.36, 0.58], [0.43, 0.24], [0.49, 0.82],
  [0.55, 0.12], [0.61, 0.46], [0.67, 0.2], [0.73, 0.7], [0.79, 0.3], [0.85, 0.08], [0.9, 0.54], [0.95, 0.22],
];
const STAR_REACH = 170; // px below the top of the hero

/** The hero's glow: morning over the work, night over the story. */
export default function Sky({ time }: { time: "morning" | "night" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<{ x: number; y: number }[]>([]);

  // Stars sit on crossings of the background grid, the same ones the cursor dots use.
  useEffect(() => {
    if (time !== "night") return;
    const place = () => {
      const box = ref.current?.getBoundingClientRect();
      const column = document.querySelector(".column")?.getBoundingClientRect();
      if (!box || !column) return;
      const toPageTop = box.top + window.scrollY;
      setStars(STAR_SPOTS.map(([fx, fy]) => {
        const col = Math.round((fx * box.width - column.left) / GRID);
        const row = Math.round((toPageTop + fy * STAR_REACH) / GRID);
        return { x: column.left + 0.5 + col * GRID - box.left, y: 0.5 + row * GRID - toPageTop };
      }));
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [time]);

  return (
    <div ref={ref} className={`sky sky-${time}`} aria-hidden="true">
      {stars.map((s, i) => (
        <i key={i} className="star" style={{ left: s.x, top: s.y, animationDelay: `${i * -0.7}s` }} />
      ))}
    </div>
  );
}
