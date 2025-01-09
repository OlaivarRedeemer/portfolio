import WithPadding from "@/views/layout/with-padding";
import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div>
      <h2 className="text-center text-4xl font-extrabold py-[190px] leading-normal">
        <span className="text-white text-opacity-40">Simple.</span>{" "}
        <span className="text-white text-opacity-70">Clean.</span> Effective UI design.
      </h2>
      <div className="flex items-center justify-center">
        <Button className="w-10 h-10 rounded-full border border-tertiary px-0 py-0">
          <img src="/assets/icons/arrow-down.svg" alt="arrow-down" />
        </Button>
      </div>
    </div>
  );
}
