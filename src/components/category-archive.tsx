"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { ProjectCard } from "@/components/project-card";
import { Project } from "@/types/projects";

type CategoryArchiveProps = {
  title: string;
  description?: string;
  projects: Project[];
  accentClassName?: string;
  linkHref?: string;
  linkLabel?: string;
  defaultView?: "list" | "grid";
};

export function CategoryArchive({
  title,
  description,
  projects,
  accentClassName = "bg-stone-100",
  linkHref,
  linkLabel,
  defaultView = "list",
}: CategoryArchiveProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const rawView = searchParams.get("view");
  const view =
    rawView === "list" || rawView === "grid" ? rawView : defaultView;

  const buildViewHref = (nextView: "list" | "grid") => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (nextView === defaultView) {
      nextParams.delete("view");
    } else {
      nextParams.set("view", nextView);
    }

    const nextQuery = nextParams.toString();
    return nextQuery ? `${pathname}?${nextQuery}` : pathname;
  };

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
          <div className="flex items-center gap-3">
            <div className="flex border border-black/10 bg-white">
              <Link
                href={buildViewHref("list")}
                className={`inline-flex items-center justify-center px-4 py-2 text-sm transition ${
                  view === "list"
                    ? "bg-black text-white hover:text-white"
                    : "text-stone-600 hover:text-black"
                }`}
              >
                List
              </Link>
              <Link
                href={buildViewHref("grid")}
                className={`inline-flex items-center justify-center border-l border-black/10 px-4 py-2 text-sm transition ${
                  view === "grid"
                    ? "bg-black text-white hover:text-white"
                    : "text-stone-600 hover:text-black"
                }`}
              >
                Grid
              </Link>
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
        </div>
      </section>

      <div
        className={view === "grid" ? "grid gap-8 md:grid-cols-2" : "grid gap-10"}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} view={view} />
        ))}
      </div>
    </main>
  );
}
