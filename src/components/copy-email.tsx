"use client";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/contents/projects";
import { Check, Copy } from "./icons";

const CONFIRM_MS = 2000;

/** Copies the address and confirms inside the button itself, then goes back. */
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const mailto = `mailto:${contact.email}`;

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (e: React.MouseEvent) => {
    // Must run before the first await, or the browser has already followed the link.
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), CONFIRM_MS);
    } catch {
      window.location.href = mailto;
    }
  };

  return (
    <a className={`btn email${copied ? " copied" : ""}`} href={mailto} onClick={copy} aria-label={`Copy email address ${contact.email}`}>
      <span className="email-text">
        <span aria-hidden={copied}>{contact.email}</span>
        <span role="status">{copied ? "Email copied!" : ""}</span>
      </span>
      {copied ? <Check /> : <Copy />}
    </a>
  );
}
