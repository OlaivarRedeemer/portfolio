"use client";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="sticky z-[100] top-0 left-0 w-full flex items-center justify-between h-[80px] px-[30px] sm:px-10 py-2 bg-primary">
      <div id="logo">
        <img src="/assets/icons/logo.svg" alt="logo" />
      </div>
      <div id="cta">
        <Button variant="secondary" className="flex items-center gap-1.5">
          <img src="/assets/icons/download.svg" alt="download" />
          <p>Resume</p>
        </Button>
      </div>
    </div>
  );
}
