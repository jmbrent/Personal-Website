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
        title="Implementation, onboarding, rollout, and systems work"
        description="This archive focuses on real PM-adjacent work inside an early-stage fintech environment: onboarding systems, dashboard structure, CRM-connected workflows, lifecycle communication, and product rollout support."
      />
      <Suspense
        fallback={
          <div className="rounded-[1.25rem] border border-black/10 bg-white p-6 text-stone-600">
            Loading project filters...
          </div>
        }
      >
        <ProjectLibrary projects={projects} />
      </Suspense>
    </main>
  );
}
