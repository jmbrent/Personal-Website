import { Suspense } from "react";

import { ProjectLibrary } from "@/components/project-library";
import { SectionHeader } from "@/components/section-header";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Project Management",
};

export default function ProjectManagementPage() {
  const projects = getProjects();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader
        eyebrow="Project Management"
        title="Implementation, rollout, onboarding, and systems work"
        description="This section highlights implementation, onboarding, product rollout, stakeholder coordination, systems thinking, and cross-functional execution. Each project is structured to support both fast scanning and deeper click-through review."
      />
      <Suspense
        fallback={
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 text-stone-600 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            Loading project filters...
          </div>
        }
      >
        <ProjectLibrary projects={projects} />
      </Suspense>
    </main>
  );
}
