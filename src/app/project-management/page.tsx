import { Suspense } from "react";

import { ProjectLibrary } from "@/components/project-library";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata = {
  title: "Project Management",
};

export default function ProjectManagementPage() {
  const projects = getProjectsByCategory("Project Management");

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-20 pt-3 lg:px-8 lg:pb-24 lg:pt-4">
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
