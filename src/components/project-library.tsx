"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FilterBar } from "@/components/filter-bar";
import { ProjectCard } from "@/components/project-card";
import { getProjectYears } from "@/lib/projects";
import { Project } from "@/types/projects";

type ProjectLibraryProps = {
  projects: Project[];
};

export function ProjectLibrary({ projects }: ProjectLibraryProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const values = {
    projectType: searchParams.get("projectType") ?? "",
    company: searchParams.get("company") ?? "",
    role: searchParams.get("role") ?? "",
    skill: searchParams.get("skill") ?? "",
    year: searchParams.get("year") ?? "",
    sort: searchParams.get("sort") ?? "featured",
  };

  const projectTypes = [...new Set(projects.map((project) => project.projectType))];
  const companies = [
    ...new Set(projects.map((project) => project.client ?? project.company)),
  ];
  const roles = [...new Set(projects.map((project) => project.role))];
  const skills = [...new Set(projects.flatMap((project) => project.skills))].sort();
  const years = getProjectYears();

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

  const reset = () => {
    router.replace(pathname, { scroll: false });
  };

  const visibleProjects = projects
    .filter((project) => {
      const matchesType =
        !values.projectType || project.projectType === values.projectType;
      const matchesCompany =
        !values.company ||
        project.company === values.company ||
        project.client === values.company;
      const matchesRole = !values.role || project.role === values.role;
      const matchesSkill =
        !values.skill || project.skills.includes(values.skill);
      const matchesYear =
        !values.year ||
        project.timelineStart.startsWith(values.year) ||
        project.timelineEnd.startsWith(values.year);

      return (
        matchesType && matchesCompany && matchesRole && matchesSkill && matchesYear
      );
    })
    .sort((left, right) => {
      if (values.sort === "title") {
        return left.title.localeCompare(right.title);
      }

      if (values.sort === "oldest") {
        return left.timelineStart.localeCompare(right.timelineStart);
      }

      if (values.sort === "newest") {
        return right.timelineStart.localeCompare(left.timelineStart);
      }

      if (left.featured !== right.featured) {
        return left.featured ? -1 : 1;
      }

      return right.timelineStart.localeCompare(left.timelineStart);
    });

  return (
    <div className="flex flex-col gap-8">
      <FilterBar
        projectTypes={projectTypes}
        companies={companies}
        roles={roles}
        skills={skills}
        years={years}
        values={values}
        onChange={setParam}
        onReset={reset}
      />
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
          {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}
        </p>
        <p className="max-w-xl text-sm text-stone-600">
          Each entry is structured to work both as a case study and as source
          material for short resume bullets.
        </p>
      </div>
      <div className="grid gap-5">
        {visibleProjects.length ? (
          visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-stone-300 bg-stone-100/70 p-8 text-center text-stone-600">
            No projects match the current filters. Reset filters to view the full
            library.
          </div>
        )}
      </div>
    </div>
  );
}
