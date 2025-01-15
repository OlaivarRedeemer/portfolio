import { IProjectDetail } from "@/lib/types";
import React from "react";
import NextPrev from "./next-prev";
import { ProjectDetailProps } from "@/views/project-detail/project-detail";

const ProjectInfoSection: React.FC<ProjectDetailProps> = ({ slug, detail }) => {
  return (
    <div className="w-full space-y-10 md:space-y-[100px]">
      <img src={detail?.coverImage} alt={detail?.slug} className="rounded-xl" />
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-6">
        <div className="w-full space-y-[30px] col-span-9">
          <div className="space-y-2">
            <p className="font-bold text-sm">PRODUCT NAME</p>
            <p>{detail?.productName}</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-sm">CHALLENGE</p>
            <p>{detail?.challenge}</p>
          </div>
        </div>
        <div className="w-full space-y-[30px] col-span-3">
          <div className="space-y-2">
            <p className="font-bold text-sm">CLIENT</p>
            <p>{detail?.client}</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-sm">ROLE</p>
            <p>{detail?.role}</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-sm">LOCATION</p>
            <p>{detail?.location}</p>
          </div>
        </div>
      </div>
      {detail?.images.map((image, index) => {
        return <img key={index} src={image} alt={`${detail?.slug}-${index + 1}`} />;
      })}
      <NextPrev slug={slug} />
    </div>
  );
};

export default ProjectInfoSection;
