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

function ProductGalleryCard({ project }: ProductCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/92 p-5 shadow-[0_24px_70px_rgba(24,20,12,0.07)] transition hover:-translate-y-0.5 hover:border-black/20 lg:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(251,241,204,0.35),rgba(255,255,255,0))]" />
      <div className="relative">
        <ProjectDevicePreview
          project={project}
          className="aspect-[16/9]"
        />
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            <span>{project.projectType}</span>
            <span className="h-1 w-1 bg-stone-300" />
            <span>{getProjectTimelineLabel(project.timelineStart, project.timelineEnd)}</span>
          </div>
          <div className="space-y-3">
            <Link
              href={`/work/${project.slug}`}
              className="block"
            >
              <h2 className="text-[1.9rem] font-semibold tracking-[-0.05em] text-stone-950 transition group-hover:text-stone-700">
                {project.title}
              </h2>
            </Link>
            <p className="text-sm leading-7 text-stone-600">
              {project.shortResumeVersion}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.skills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/10 bg-stone-50 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-stone-600"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/work/${project.slug}`}
              className="site-button site-button--primary"
            >
              View case study
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProductUxPage() {
  const projects = getProjectsByCategory("Product / UX").filter(
    (project) => project.company === "Finliti",
  );

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 pb-24 pt-8 lg:px-8 lg:pb-28 lg:pt-10">
      <h1 className="sr-only">Product / UX</h1>
      <section className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
          Product / UX Gallery
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="site-button site-button--secondary site-button--compact"
          >
            View all work
          </Link>
          <Link
            href="/resume"
            className="site-button site-button--secondary site-button--compact"
          >
            Resume
          </Link>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProductGalleryCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
