import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Project } from "@/types/projects";

type CategoryArchiveProps = {
  title: string;
  description?: string;
  projects: Project[];
  accentClassName?: string;
  linkHref?: string;
  linkLabel?: string;
};

export function CategoryArchive({
  title,
  description,
  projects,
  accentClassName = "bg-stone-100",
  linkHref,
  linkLabel,
}: CategoryArchiveProps) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 pb-20 pt-3 lg:px-8 lg:pb-24 lg:pt-4">
      <section className={`border border-black/10 p-5 ${accentClassName}`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <h1 className="text-[2rem] font-semibold tracking-[-0.05em] text-black sm:text-[2.6rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-3 max-w-2xl text-base leading-7 text-stone-700">
                {description}
              </p>
            ) : null}
          </div>
          {linkHref && linkLabel ? (
            <Link
              href={linkHref}
              className="border border-black px-4 py-2 text-sm text-black transition hover:bg-black hover:text-white"
            >
              {linkLabel}
            </Link>
          ) : null}
        </div>
      </section>

      <div className="grid gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
