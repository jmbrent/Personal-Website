import Link from "next/link";

import { Project } from "@/types/projects";

type RelatedProjectsProps = {
  projects: Project[];
};

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="rounded-[1.25rem] border border-black/10 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
        Related Projects
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/project-management/${project.slug}`}
            className="rounded-[1rem] border border-black/10 bg-white p-5 transition hover:border-black"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
              {project.projectType}
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-stone-950">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              {project.oneLineSummary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
