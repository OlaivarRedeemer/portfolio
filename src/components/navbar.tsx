"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky z-[100] top-0 left-0 w-full flex items-center justify-between h-[70px] px-[30px] sm:px-10 py-2 bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
      <div id="logo">
        <img src="/assets/icons/logo.svg" alt="logo" />
      </div>
      <div id="cta">
        <Link
          href="https://drive.google.com/file/d/1pQAOE19uUozaKBfm_iVkefDulxjvSlXY/view"
          target="_blank"
          rel="noopener noreferrer">
          <Button variant="secondary" className="flex items-center gap-1.5">
            <img src="/assets/icons/download.svg" alt="download" />
            <p>Resume</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
