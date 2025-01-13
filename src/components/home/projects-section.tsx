import { projects } from "@/contents/home";
import React from "react";

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="grid grid-cols-1 1000px:grid-cols-2 justify-center items-center gap-[100px] pt-[190px]">
      {projects.map((project, index) => {
        return (
          <div key={index} className="w-full space-y-[30px]">
            <div className="flex justify-center items-center">
              <img
                src={project.image}
                alt={project.image}
                className="hover:scale-[1.03] transition-all ease-in-out duration-200 cursor-pointer"
              />
            </div>
            <div className="space-y-2.5">
              <h4 className="text-center text-[22px] font-extrabold underline">{project.title}</h4>
              <p className="text-center">{project.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
