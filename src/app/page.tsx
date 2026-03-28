import { Suspense } from "react";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { getProjects, projectMatchesCategory } from "@/lib/projects";

const categoryOrder = [
  "Project Management",
  "Product / UX",
  "Creative / Content",
  "Film / Production",
];

const categoryStyles: Record<string, string> = {
  "Project Management":
    "bg-[linear-gradient(180deg,rgba(227,236,255,0.85),rgba(255,255,255,1))]",
  "Product / UX":
    "bg-[linear-gradient(180deg,rgba(246,241,210,0.8),rgba(255,255,255,1))]",
  "Creative / Content":
    "bg-[linear-gradient(180deg,rgba(255,229,223,0.72),rgba(255,255,255,1))]",
  "Film / Production":
    "bg-[linear-gradient(180deg,rgba(225,238,232,0.8),rgba(255,255,255,1))]",
};

export default function HomePage() {
  const projects = getProjects();
  const categorySummaries: Record<string, string> = {
    "Project Management":
      "Implementation, onboarding, systems, rollout, and cross-functional delivery.",
    "Product / UX":
      "Product design, UX research, dashboard structure, and interface clarity.",
    "Creative / Content":
      "Content systems, messaging, campaigns, video, and product storytelling.",
    "Film / Production":
      "Film, TV, and production work across producing, AD, camera, and editorial.",
  };
  const projectsByCategory = categoryOrder
    .map((category) => ({
      category,
      projects: projects
        .filter((project) => projectMatchesCategory(project, category))
        .slice(0, 4),
    }))
    .filter((entry) => entry.projects.length > 0);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-5 pb-24 pt-3 lg:px-8 lg:pt-4">
      <Suspense
        fallback={
          <div className="border border-black/10 bg-white p-6 text-stone-600">
            Loading projects...
          </div>
        }
      >
        <section className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {categoryOrder.map((category) => (
            <Link
              key={category}
              href={
                category === "Project Management"
                  ? "/project-management"
                  : category === "Product / UX"
                    ? "/product-ux"
                    : category === "Creative / Content"
                      ? "/creative-content"
                      : "/film-production"
              }
              className={`border border-black/10 px-4 py-3 text-sm text-black transition hover:border-black ${categoryStyles[category]}`}
            >
              {category}
            </Link>
          ))}
        </section>

        <div className="grid gap-6">
          {projectsByCategory.map((group) => (
            <section
              key={group.category}
              className={`border border-black/10 p-5 ${categoryStyles[group.category]}`}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-[1.8rem] font-semibold tracking-[-0.04em] text-black">
                    {group.category}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-700">
                    {categorySummaries[group.category]}
                  </p>
                </div>
                <Link
                  href={
                    group.category === "Project Management"
                      ? "/project-management"
                      : group.category === "Product / UX"
                        ? "/product-ux"
                        : group.category === "Creative / Content"
                          ? "/creative-content"
                          : "/film-production"
                  }
                  className="border border-black px-3 py-2 text-sm text-black transition hover:bg-black hover:!text-white focus:bg-black focus:!text-white active:bg-black active:!text-white"
                >
                  Open
                </Link>
              </div>
              <div className="grid gap-6">
                {group.projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    view="list"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Suspense>
    </main>
  );
}
