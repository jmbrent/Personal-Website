import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects().slice(0, 4);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-20 px-5 py-12 lg:px-8 lg:py-16">
      <section className="grid gap-10 border-b border-black/10 pb-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">
            Jonathan Brent
          </p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[1.02] text-black sm:text-6xl">
            Product, onboarding, and implementation work structured for fast scanning.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            I work well in early-stage environments where systems are still being
            formed and product reality changes quickly. Most of this work comes
            from Finliti and sits between project management, implementation,
            product structure, onboarding, and cross-functional execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/project-management"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              Open project archive
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-black hover:text-black"
            >
              View resume
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            "Built onboarding systems, dashboard logic, and communication flows in a startup environment.",
            "Translate messy evolving work into clearer structures, workflows, and user-facing systems.",
            "Project pages are designed to double as resume-ready evidence, not just portfolio copy.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.25rem] border border-black/10 bg-white p-5 text-base leading-7 text-stone-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8">
        <SectionHeader
          eyebrow="Featured Finliti Work"
          title="Selected project entries"
          description="The archive is designed to scroll cleanly. Start with the summary cards, then open the detail pages for context, ownership, outputs, and outcomes."
        />
        <div className="-mx-5 overflow-x-auto px-5 lg:mx-0 lg:px-0">
          <div className="flex min-w-max gap-4 pb-2 lg:grid lg:min-w-0 lg:grid-cols-2">
          {projects.map((project) => (
              <div key={project.id} className="w-[22rem] lg:w-auto">
                <ProjectCard project={project} />
              </div>
          ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-black/10 pt-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
            What this archive shows
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-4">
          {[
            "Implementation experience tied to actual onboarding, rollout, and systems work.",
            "Cross-functional execution with founders and developers inside a growing startup.",
            "Enough specificity to support short resume bullets with deeper proof behind them.",
          ].map((item) => (
            <p
              key={item}
              className="border-b border-black/8 pb-4 text-lg leading-8 text-stone-700"
            >
              {item}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
