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
    <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
        Related Projects
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/project-management/${project.slug}`}
            className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5 transition hover:border-stone-400 hover:bg-white"
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
