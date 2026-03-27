import Link from "next/link";

import { SectionHeader } from "@/components/section-header";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Resume",
};

const resumeLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonathanmbrent/",
  },
  {
    label: "IMDb",
    href: "https://www.imdb.com/name/nm6025350/",
  },
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
        "Led onboarding redesign, dashboard organization, rollout support, CRM-connected workflow planning, and user-facing product structure across Finliti's advisor platform, helping move advisor setup from a manual pilot workflow to a paid self-serve platform used by ~10 active advisors across ~4 firms.",
      relatedProjects: [
        "advisor-onboarding-system-transformation",
        "crm-behavioral-profile-integration",
        "enterprise-rollout-early-client-growth",
        "advisor-dashboard-platform-expansion",
      ],
    },
    {
      company: "Finliti",
      role: "Content Lead",
      timeline: "2021 - Present",
      summary:
        "Owned lifecycle communication, content strategy, survey/report framing, and onboarding-supporting messaging across the product journey.",
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
        title="Compact experience view with direct links into detailed project pages"
        description="This page stays concise, but each role links back to fuller project entries so the resume can stay short without feeling vague."
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.25rem] border border-black/10 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Professional Summary
          </p>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            Product and content lead with hands-on experience across onboarding,
            implementation, dashboard structure, lifecycle communication, and
            rollout support inside a startup fintech environment. Strongest where
            fragmented manual work needs to be turned into clearer, more usable,
            and more scalable product systems.
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-black/10 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Reference Links
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {resumeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-stone-700 transition hover:border-black hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.role}`}
            className="rounded-[1.25rem] border border-black/10 bg-white p-7"
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
              <p className="rounded-full border border-black/10 px-4 py-2 text-sm text-stone-700">
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
                      href={`/work/${project.slug}`}
                      className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
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
