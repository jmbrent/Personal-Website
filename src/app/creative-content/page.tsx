import { Suspense } from "react";

import { CategoryArchive } from "@/components/category-archive";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata = {
  title: "Creative / Content",
};

export default function CreativeContentPage() {
  const projects = getProjectsByCategory("Creative / Content");

  return (
    <Suspense
      fallback={
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 pb-20 pt-3 lg:px-8 lg:pb-24 lg:pt-4">
          <div className="border border-black/10 bg-white p-6 text-stone-600">
            Loading archive...
          </div>
        </main>
      }
    >
      <CategoryArchive
        title="Creative / Content"
        description="Messaging systems, lifecycle communication, branded content, campaigns, video editing, and motion-led product storytelling."
        projects={projects}
        accentClassName="bg-[linear-gradient(180deg,rgba(255,229,223,0.74),rgba(255,255,255,1))]"
        linkHref="/"
        linkLabel="All work"
      />
    </Suspense>
  );
}
