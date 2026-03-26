import Link from "next/link";
import { notFound } from "next/navigation";

import { MetadataGrid } from "@/components/metadata-grid";
import { ProjectDetailHeader } from "@/components/project-detail-header";
import { RelatedProjects } from "@/components/related-projects";
import { ResumeVersionBlock } from "@/components/resume-version-block";
import { SectionHeader } from "@/components/section-header";
import { SkillsTagList } from "@/components/skills-tag-list";
import { getProjectBySlug, getProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.oneLineSummary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getProjects().filter((entry) =>
    project.relatedProjects?.includes(entry.id),
  );

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-12 lg:px-8 lg:py-16">
      <Link
        href="/project-management"
        className="inline-flex w-fit rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-700 hover:text-stone-950"
      >
        Back to project management
      </Link>

      <ProjectDetailHeader project={project} />

      <MetadataGrid
        items={[
          { label: "Industry", value: project.industry },
          { label: "Users / Audience", value: project.audience },
          { label: "Team collaborators", value: project.collaborators.join(", ") },
          { label: "Tools / Platforms", value: project.tools.join(", ") },
          { label: "Scope level", value: project.scopeLevel },
        ]}
      />

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            <SectionHeader
              eyebrow="Context"
              title="Starting situation"
              description={project.context}
            />
          </section>
          <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            <SectionHeader
              eyebrow="Objective"
              title="What the project needed to achieve"
              description={project.objective}
            />
          </section>
          <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              What I Owned
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.ownership.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              What I Built / Changed
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="grid gap-6">
          <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Collaboration
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.collaborators.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Skills Used
            </p>
            <p className="mt-4 text-base leading-7 text-stone-600">
              {project.skills.join(", ")}
            </p>
            <div className="mt-5">
              <SkillsTagList items={project.skills} />
            </div>
          </section>
          <section className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Outcome / Impact
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.outcomes.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-stone-200 bg-stone-950 px-4 py-4 text-stone-50"
                >
                  <dt className="text-xs uppercase tracking-[0.16em] text-stone-300">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>

      <ResumeVersionBlock
        shortVersion={project.shortResumeVersion}
        longVersion={project.longResumeVersion}
        keywords={project.tags}
      />

      <RelatedProjects projects={relatedProjects} />
    </main>
  );
}
