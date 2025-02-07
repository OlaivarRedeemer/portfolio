import Navbar from "@/components/navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-primary">
      <Navbar />
      <div className="w-full text-white px-[30px] sm:px-10">
        <div className="w-full max-w-[954px] mx-auto">{children}</div>
      </div>
    </div>
  );
}
