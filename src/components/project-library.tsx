"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FilterBar } from "@/components/filter-bar";
import { ProjectCard } from "@/components/project-card";
import { Project } from "@/types/projects";

type ProjectLibraryProps = {
  projects: Project[];
  defaultView?: "list" | "grid";
};

export function ProjectLibrary({
  projects,
  defaultView = "list",
}: ProjectLibraryProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const values = {
    projectType: searchParams.get("projectType") ?? "",
    view: searchParams.get("view") ?? defaultView,
  };

  const projectTypes = [...new Set(projects.map((project) => project.projectType))];

  const setParam = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    const nextQuery = nextParams.toString();
    router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
      scroll: false,
    });
  };

  const visibleProjects = projects
    .filter((project) => {
      const matchesType =
        !values.projectType || project.projectType === values.projectType;

      return matchesType;
    })
    .sort((left, right) => {
      if (left.featured !== right.featured) {
        return left.featured ? -1 : 1;
      }

      return right.timelineStart.localeCompare(left.timelineStart);
    });

  return (
    <div className="flex flex-col gap-10">
      <FilterBar
        projectTypes={projectTypes}
        values={values}
        onChange={setParam}
      />
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
          {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}
        </p>
      </div>
      <div
        className={
          values.view === "grid"
            ? "grid gap-10 lg:grid-cols-2"
            : "grid gap-10"
        }
      >
        {visibleProjects.length ? (
          visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="rounded-[1.25rem] border border-dashed border-stone-300 bg-white p-8 text-center text-stone-600">
            No projects match the current filters. Reset filters to view the full
            library.
          </div>
        )}
      </div>
    </div>
  );
}
