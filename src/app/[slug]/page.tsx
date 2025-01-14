import { projectDetails } from "@/contents/project-detail";
import ProjectDetailPage from "@/views/project-detail/project-detail";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Redeemer Olaivar",
  description:
    "I'm a passionate UI/UX designer driven by creating intuitive and user-friendly experiences. I specialized in clean and minimalist designs.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ],
  },
};

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
