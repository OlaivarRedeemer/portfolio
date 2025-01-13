import React from "react";
import HeroSection from "../../components/home/hero-section";
import ProjectsSection from "@/components/home/projects-section";
import ContactSection from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
