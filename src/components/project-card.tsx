import Link from "next/link";
import Pic from "./pic";
import { Project, covers } from "@/contents/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="card" href={`/${project.slug}`}>
      <span className="card-scene">
        <Pic name={covers[project.slug]} mobile={false} alt={project.cardAlt} />
        <span className="card-pills">
          <span className="pill-name">{project.name}</span>
          {project.cardTags.map((t) => <span key={t}>{t}</span>)}
        </span>
      </span>
    </Link>
  );
}
