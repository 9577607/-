import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

type ProjectSectionProps = {
  projects: Project[];
};

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <span>Selected Projects</span>
        <h2>精选项目</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" id={`project-${project.id}`} key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={`#project-${project.id}`}>
              查看项目
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
