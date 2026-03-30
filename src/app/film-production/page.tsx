import { Suspense } from "react";

import { CategoryArchive } from "@/components/category-archive";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata = {
  title: "Film / TV",
};

export default function FilmProductionPage() {
  const projects = getProjectsByCategory("Film / Production");

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
        title="Film / TV"
        description="Production, development, camera, editorial, and coordination work across independent film, television, and creator-led projects."
        projects={projects}
        accentClassName="bg-[linear-gradient(180deg,rgba(225,238,232,0.82),rgba(255,255,255,1))]"
        linkHref="/"
        linkLabel="All work"
        defaultView="grid"
      />
    </Suspense>
  );
}
