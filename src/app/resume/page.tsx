import Link from "next/link";

import { SectionHeader } from "@/components/section-header";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Resume",
};

const resumeLinks = [
  { label: "Download PDF resume", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function ResumePage() {
  const projects = getProjects();

  const relatedProjectMap = new Map(projects.map((project) => [project.id, project]));

  const experience = [
    {
      company: "Finliti",
      role: "Product & Content Lead",
      timeline: "2023 - Present",
      summary:
        "Lead cross-functional implementation, onboarding, product structuring, rollout support, and user-facing systems work across a growing fintech platform.",
      relatedProjects: [
        "advisor-onboarding-system-transformation",
        "crm-behavioral-profile-integration",
        "enterprise-product-rollout-early-client-growth",
        "advisor-dashboard-platform-expansion",
      ],
    },
    {
      company: "Finliti",
      role: "Content Lead",
      timeline: "2021 - Present",
      summary:
        "Owned content systems, lifecycle communication, messaging strategy, and product-facing copy that supported discovery, onboarding, and retention.",
      relatedProjects: [
        "lifecycle-email-engagement-system",
        "b2c-discovery-survey-funnel",
      ],
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader
        eyebrow="Resume"
        title="Concise experience with direct paths into deeper project detail"
        description="This page keeps the resume view compact while linking directly into project pages that provide fuller context, ownership, deliverables, and outcomes."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.9rem] border border-stone-200 bg-white p-7 shadow-[0_20px_50px_rgba(53,42,31,0.07)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Professional Summary
          </p>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Product and content lead with experience translating evolving startup
            work into structured onboarding systems, clearer product workflows,
            CRM-connected integrations, lifecycle communications, and client-ready
            rollout support. Strongest in ambiguous environments where execution,
            clarity, and coordination matter at the same time.
          </p>
        </div>
        <div className="rounded-[1.9rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(240,229,212,0.9),rgba(255,255,255,0.96))] p-7 shadow-[0_20px_50px_rgba(53,42,31,0.07)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Resume Links
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {resumeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-700 transition hover:border-stone-700 hover:text-stone-950"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-stone-600">
            Replace placeholder links with final resume files or public profiles.
          </p>
        </div>
      </section>

      <section className="grid gap-6">
        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.role}`}
            className="rounded-[1.9rem] border border-stone-200 bg-white p-7 shadow-[0_20px_50px_rgba(53,42,31,0.07)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                  {entry.company}
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
                  {entry.role}
                </h2>
              </div>
              <p className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700">
                {entry.timeline}
              </p>
            </div>
            <p className="mt-5 max-w-4xl text-base leading-8 text-stone-700">
              {entry.summary}
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Related Projects
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {entry.relatedProjects.map((projectId) => {
                  const project = relatedProjectMap.get(projectId);

                  if (!project) {
                    return null;
                  }

                  return (
                    <Link
                      key={project.id}
                      href={`/project-management/${project.slug}`}
                      className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-700 hover:bg-white hover:text-stone-950"
                    >
                      {project.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
