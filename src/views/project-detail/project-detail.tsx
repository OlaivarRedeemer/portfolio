import ContactSection from "@/components/home/contact-section";
import BackIcon from "@/components/project-detail/back-icon";
import ProjectInfoSection from "@/components/project-detail/project-info";
import { IProjectDetail } from "@/lib/types";
import React from "react";

interface ProjectDetailProps {
  slug: string;
  detail: IProjectDetail;
}

const ProjectDetailPage: React.FC<ProjectDetailProps> = ({ slug, detail }) => {
  return (
    <div className="w-full">
      <BackIcon />
      <ProjectInfoSection detail={detail} />
      <ContactSection />
    </div>
  );
};

export default ProjectDetailPage;
