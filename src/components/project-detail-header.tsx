import { getProjectTimelineLabel } from "@/lib/projects";
import { Project } from "@/types/projects";

type ProjectDetailHeaderProps = {
  project: Project;
};

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  return (
    <section className="rounded-[1.5rem] border border-black/10 bg-white p-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            {project.projectType}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight text-black sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            {project.oneLineSummary}
          </p>
        </div>
        <div className="rounded-[1rem] border border-black/10 bg-white px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Status
          </p>
          <p className="mt-2 text-lg font-semibold text-black">
            {project.status}
          </p>
        </div>
      </div>
      <dl className="mt-8 grid gap-5 md:grid-cols-4">
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Client / Company
          </dt>
          <dd className="mt-2 text-base leading-7 text-stone-900">
            {project.client ? `${project.company} / ${project.client}` : project.company}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
            My Role
          </dt>
          <dd className="mt-2 text-base leading-7 text-stone-900">{project.role}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Timeline
          </dt>
          <dd className="mt-2 text-base leading-7 text-stone-900">
            {getProjectTimelineLabel(project.timelineStart, project.timelineEnd)}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Location
          </dt>
          <dd className="mt-2 text-base leading-7 text-stone-900">
            {project.location ?? "Remote"}
          </dd>
        </div>
      </dl>
    </section>
  );
}
