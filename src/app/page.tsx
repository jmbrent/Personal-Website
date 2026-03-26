import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects().slice(0, 3);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-5 py-12 lg:px-8 lg:py-16">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2.2rem] border border-stone-200 bg-white p-8 shadow-[0_24px_60px_rgba(53,42,31,0.08)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">
            Portfolio + Click-Through Resume
          </p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[1.04] text-stone-950 sm:text-6xl">
            Project work organized for fast scanning, clearer ownership, and
            resume-ready detail.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            This site is designed as a structured archive of implementation,
            onboarding, product rollout, systems thinking, and cross-functional
            delivery work. The goal is simple: make it easy to understand what
            I worked on, what I owned, who it was for, and what changed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/project-management"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
            >
              Explore project management work
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-700 hover:text-stone-950"
            >
              View resume
            </Link>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="rounded-[2rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(240,229,212,0.9),rgba(255,255,255,0.96))] p-7 shadow-[0_20px_50px_rgba(53,42,31,0.07)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">
              What this emphasizes
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              <li>Implementation and onboarding work grounded in actual delivery</li>
              <li>Product and systems thinking in messy startup environments</li>
              <li>Clear ownership, collaborators, outputs, and outcomes</li>
              <li>Project entries that convert cleanly into resume bullets</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-7 text-stone-50 shadow-[0_20px_50px_rgba(32,24,18,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-300">
              Current priority
            </p>
            <p className="mt-4 text-base leading-7 text-stone-100">
              The Project Management section is the main library. It is built as
              a click-through database first, with the rest of the navigation
              supporting the broader portfolio structure.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Featured Work"
          title="Project management case studies"
          description="A recruiter should be able to scan these quickly, then open a deeper page for context, ownership, deliverables, collaboration, and outcomes."
        />
        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
