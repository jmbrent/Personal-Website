import Link from "next/link";

import { getProjectTimelineLabel } from "@/lib/projects";
import { Project } from "@/types/projects";
import { SkillsTagList } from "@/components/skills-tag-list";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const timeline = getProjectTimelineLabel(
    project.timelineStart,
    project.timelineEnd,
  );

  return (
    <article className="group rounded-[1.25rem] border border-black/10 bg-white p-6 transition hover:border-black hover:bg-stone-50/40">
      <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
        <span>{project.projectType}</span>
        <span className="h-1 w-1 rounded-full bg-stone-300" />
        <span>{project.company}</span>
        <span className="h-1 w-1 rounded-full bg-stone-300" />
        <span>{timeline}</span>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              <Link
                href={`/project-management/${project.slug}`}
                className="transition group-hover:text-stone-700"
              >
                {project.title}
              </Link>
            </h2>
            <p className="mt-2 text-base leading-7 text-stone-600">
              {project.oneLineSummary}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-black bg-black px-3 py-1 text-xs font-semibold text-white">
              {project.status}
            </span>
            {project.featured ? (
              <span className="rounded-full border border-black/10 bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
                Featured
              </span>
            ) : null}
          </div>
        </div>
        <dl className="grid gap-4 border-t border-black/8 pt-4 text-sm text-stone-700 md:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
              Role
            </dt>
            <dd className="mt-1 leading-6">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
              Industry
            </dt>
            <dd className="mt-1 leading-6">{project.industry}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
              Audience
            </dt>
            <dd className="mt-1 leading-6">{project.audience}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
              Scope
            </dt>
            <dd className="mt-1 leading-6">{project.scopeLevel}</dd>
          </div>
        </dl>
        <SkillsTagList items={project.skills} />
      </div>
    </article>
  );
}
