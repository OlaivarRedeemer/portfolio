import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bySlug, liveProjects } from "@/contents/projects";
import CaseStudy from "@/views/case-study";

type Props = { params: { slug: string } };

export const dynamicParams = false;
export const generateStaticParams = () => liveProjects.map((p) => ({ slug: p.slug }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const p = bySlug(params.slug);
  return p ? { title: p.name, description: p.summary } : {};
};

export default function Page({ params }: Props) {
  const project = bySlug(params.slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
