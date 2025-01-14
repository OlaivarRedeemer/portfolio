import { projectDetails } from "@/contents/project-detail";
import ProjectDetailPage from "@/views/project-detail/project-detail";
import React from "react";

export const generateStaticParams = async () => {
  const paths = ["/brooky", "/dazle", "/venue4use", "/plateful", "/nexus", "/amplify"];
  return paths;
};

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const detail: any = projectDetails.find((d) => d.slug === slug);

  return <ProjectDetailPage slug={slug} detail={detail} />;
};

export default Page;
