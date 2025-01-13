import { projects } from "@/contents/home";
import React from "react";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <div className="py-[190px] space-y-[30px]">
      <h1 className="text-center text-4xl font-extrabold">Let's work together</h1>
      <div className="flex justify-center items-center">
        <Button variant="secondary" className="h-[67px] w-[138px] text-lg flex items-center gap-1.5">
          <p>Email me</p>
        </Button>
      </div>
    </div>
  );
}