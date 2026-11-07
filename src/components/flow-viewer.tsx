"use client";
import { useRef, useState } from "react";
import { Close } from "./icons";

const steps = [50, 75, 100, 150];

export default function FlowViewer({ img, title, alt, width }: { img: string; title: string; alt: string; width: number }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [zoom, setZoom] = useState(100);
  const move = (dir: number) => setZoom(steps[Math.min(steps.length - 1, Math.max(0, steps.indexOf(zoom) + dir))]);

  return (
    <>
      <button className="btn btn-ink flow-open" type="button" onClick={() => ref.current?.showModal()}>View the full flow</button>
      <dialog ref={ref} className="flow-dialog" aria-label={title}>
        <div className="flow-bar">
          <button className="icon-btn icon-ghost" type="button" aria-label="Close full flow" onClick={() => ref.current?.close()}><Close /></button>
          {title}
        </div>
        <div className="flow-scroll" tabIndex={0}>
          <img src={`/img/${img}.webp`} alt={alt} style={{ width: (width * zoom) / 100 }} loading="lazy" />
        </div>
        <div className="flow-zoom">
          <button className="icon-btn icon-ghost" type="button" aria-label="Zoom out" disabled={zoom === steps[0]} onClick={() => move(-1)}>−</button>
          <span aria-live="polite">{zoom}%</span>
          <button className="icon-btn icon-ghost" type="button" aria-label="Zoom in" disabled={zoom === steps[steps.length - 1]} onClick={() => move(1)}>+</button>
        </div>
      </dialog>
    </>
  );
}
