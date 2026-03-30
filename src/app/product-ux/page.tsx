import { Suspense } from "react";

import { CategoryArchive } from "@/components/category-archive";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata = {
  title: "Product / UX",
};

export default function ProductUxPage() {
  const projects = getProjectsByCategory("Product / UX");

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
        title="Product / UX"
        description="Product design, research, onboarding flow, dashboard structure, and interface clarity across fintech, healthcare, and media."
        projects={projects}
        accentClassName="bg-[linear-gradient(180deg,rgba(246,241,210,0.82),rgba(255,255,255,1))]"
        linkHref="/"
        linkLabel="All work"
      />
    </Suspense>
  );
}
