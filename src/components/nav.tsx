"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CopyEmail from "./copy-email";
import ContactLinks from "./contact-links";
import { Close, Menu } from "./icons";
import { bySlug, contact } from "@/contents/projects";

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isCase = path !== "/" && path !== "/story";

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navClass = (active: boolean) => (active ? "btn btn-sm btn-ink" : "pill");

  return (
    <>
      <header className={`nav${isCase ? " is-case" : ""}`}>
        <nav className="nav-links" aria-label="Main">
          {isCase ? (
            <Link className="pill" href={bySlug(path.slice(1))?.personal ? "/#personal" : "/#work"}>Back</Link>
          ) : (
            <>
              <Link className={navClass(path === "/")} href="/" aria-current={path === "/" ? "page" : undefined}>Work</Link>
              <Link className={navClass(path === "/story")} href="/story" aria-current={path === "/story" ? "page" : undefined}>Story</Link>
            </>
          )}
        </nav>
        <Link className="nav-name" href="/">Redeemer Olaivar</Link>
        <div className="nav-end">
          <a className="btn btn-sm" href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Let’s talk</a>
          <button className="icon-btn icon-ghost menu-btn" type="button" aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </header>
      <div id="menu" className={`menu${open ? " open" : ""}`}>
        <Link className="link" href="/" aria-current={path === "/" ? "page" : undefined} onClick={() => setOpen(false)}>Work</Link>
        <Link className="link" href="/story" aria-current={path === "/story" ? "page" : undefined} onClick={() => setOpen(false)}>Story</Link>
        <div className="menu-foot">
          <CopyEmail />
          <ContactLinks />
        </div>
      </div>
    </>
  );
}
