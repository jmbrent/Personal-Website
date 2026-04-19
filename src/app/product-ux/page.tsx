import Link from "next/link";

import { ProjectDevicePreview } from "@/components/project-device-preview";
import { getProjectsByCategory, getProjectTimelineLabel } from "@/lib/projects";
import { Project } from "@/types/projects";

export const metadata = {
  title: "Product / UX",
};

type ProductCardProps = {
  project: Project;
};

function FeaturedProductCard({ project }: ProductCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/90 p-6 shadow-[0_28px_80px_rgba(24,20,12,0.08)] lg:p-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(251,241,204,0.58),rgba(255,255,255,0))]" />
      <div className="relative grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <ProjectDevicePreview
          project={project}
          className="aspect-[16/11]"
        />
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
            <span className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] text-stone-700">
              {project.company}
            </span>
            <span>{getProjectTimelineLabel(project.timelineStart, project.timelineEnd)}</span>
            <span className="rounded-full border border-amber-700/20 bg-amber-50 px-3 py-1.5 text-[10px] text-amber-900">
              {project.status}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-[2.2rem]">
            {project.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            {project.oneLineSummary}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.metrics.slice(0, 2).map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.2rem] border border-black/10 bg-stone-50 px-4 py-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  {metric.label}
                </p>
                <p className="mt-2 text-base font-semibold leading-6 text-stone-950">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/work/${project.slug}`}
              className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Open case study
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-black hover:text-black"
            >
              See resume context
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function SupportingProductCard({ project }: ProductCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-[1.6rem] border border-black/10 bg-white/90 p-5 shadow-[0_20px_45px_rgba(24,20,12,0.06)] transition hover:-translate-y-0.5 hover:border-black/20"
    >
      <ProjectDevicePreview project={project} className="aspect-[16/10]" />
      <div className="mt-5 flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
        <span>{project.company}</span>
        <span>{project.status}</span>
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-stone-950 transition group-hover:text-stone-700">
        {project.title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-stone-600">
        {project.oneLineSummary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-black/10 bg-stone-50 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-stone-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function ProductUxPage() {
  const projects = getProjectsByCategory("Product / UX");
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);
  const heroProject = featuredProjects[0];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-5 pb-24 pt-8 lg:px-8 lg:pb-28 lg:pt-10">
      <section className="relative overflow-hidden rounded-[2.4rem] border border-black/10 bg-[linear-gradient(135deg,rgba(250,242,214,0.96),rgba(255,255,255,0.98)_56%,rgba(231,236,248,0.88))] px-6 py-8 shadow-[0_32px_90px_rgba(29,24,14,0.08)] lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -right-20 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.72))]" />
        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              Product / UX
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-[0.96] tracking-[-0.06em] text-stone-950 sm:text-5xl lg:text-[4.4rem]">
              App-focused product case studies built around workflow clarity.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
              This section now leans harder into the product itself: platform
              structure, dashboard surfaces, onboarding flow, client-profile
              views, alert systems, and the interface decisions behind them.
              The aim is a more standard UX/UI portfolio read, not just a list
              of adjacent product responsibilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
              >
                Open resume
              </Link>
              <Link
                href="/"
                className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-black hover:text-black"
              >
                Back to all work
              </Link>
            </div>
          </div>
          {heroProject ? <ProjectDevicePreview project={heroProject} /> : null}
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            Selected Case Studies
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-4xl">
            App and workflow case studies with the clearest UI impact.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-stone-600">
            Most of the strongest product work happened inside Finliti, where
            interface structure, onboarding, data surfaces, and rollout logic
            all had to live inside one evolving app instead of being split
            across separate teams.
          </p>
        </div>
        <div className="grid gap-6">
          {featuredProjects.map((project) => (
            <FeaturedProductCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            More Product Work
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-stone-950 sm:text-4xl">
            Additional research and interface-focused projects.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {supportingProjects.map((project) => (
            <SupportingProductCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
