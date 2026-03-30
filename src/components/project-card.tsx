import Link from "next/link";

import { ProjectCover } from "@/components/project-cover";
import { getProjectTimelineLabel } from "@/lib/projects";
import { Project } from "@/types/projects";

type ProjectCardProps = {
  project: Project;
  view?: "list" | "grid";
};

export function ProjectCard({
  project,
  view = "list",
}: ProjectCardProps) {
  const timeline = getProjectTimelineLabel(
    project.timelineStart,
    project.timelineEnd,
  );
  const displayTitle =
    project.category === "Project Management"
      ? project.shortTitle
      : project.title;

  if (view === "list") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        <article className="grid gap-5 border border-black/10 bg-white p-5 transition hover:border-black md:grid-cols-[18rem_minmax(0,1fr)] md:items-start md:gap-6">
          <ProjectCover project={project} className="aspect-[4/3] md:sticky md:top-28" />
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-stone-500 transition group-hover:text-stone-700">
              {displayTitle}
            </p>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-3xl">
                <h2 className="text-[1.85rem] font-semibold leading-[1.08] tracking-[-0.04em] text-black transition group-hover:text-stone-700">
                  {project.projectType}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  <span>{project.company}</span>
                  <span className="h-1 w-1 bg-stone-300" />
                  <span>{timeline}</span>
                </div>
                <p className="mt-2 text-base leading-7 text-stone-600">
                  {project.oneLineSummary}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[11px] uppercase tracking-[0.14em] text-stone-500">
                  {project.status}
                </span>
              </div>
            </div>
            <dl className="grid gap-5 border-t border-black/10 pt-5 text-sm text-stone-700 md:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Role
                </dt>
                <dd className="mt-1 leading-6">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Timeline
                </dt>
                <dd className="mt-1 leading-6">{timeline}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Outcome
                </dt>
                <dd className="mt-1 leading-6">
                  {project.outcomes[0] ?? project.objective}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                  Company
                </dt>
                <dd className="mt-1 leading-6">{project.company}</dd>
              </div>
            </dl>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <article className="flex h-full flex-col border-t border-black pt-5 transition">
        <ProjectCover
          project={project}
          className="mb-5 aspect-[16/10]"
        />
        <p className="text-[11px] uppercase tracking-[0.14em] text-stone-500 transition group-hover:text-stone-700">
          {displayTitle}
        </p>
        <div className="mt-6 flex flex-1 flex-col gap-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-[1.85rem] font-semibold leading-[1.08] tracking-[-0.04em] text-black transition group-hover:text-stone-700">
                {project.projectType}
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                <span>{project.company}</span>
                <span className="h-1 w-1 bg-stone-300" />
                <span>{timeline}</span>
              </div>
              <p className="mt-2 text-base leading-7 text-stone-600">
                {project.oneLineSummary}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] uppercase tracking-[0.14em] text-stone-500">
                {project.status}
              </span>
            </div>
          </div>
          <dl className="grid gap-5 border-t border-black/10 pt-5 text-sm text-stone-700 md:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Role
              </dt>
              <dd className="mt-1 leading-6">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Timeline
              </dt>
              <dd className="mt-1 leading-6">{timeline}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Outcome
              </dt>
              <dd className="mt-1 leading-6">{project.outcomes[0] ?? project.objective}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Company
              </dt>
              <dd className="mt-1 leading-6">{project.company}</dd>
            </div>
          </dl>
        </div>
      </article>
    </Link>
  );
}
