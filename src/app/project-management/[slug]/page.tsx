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

  const sections = [
    { id: "context", label: "Context" },
    { id: "objective", label: "Objective" },
    { id: "ownership", label: "What I Owned" },
    { id: "deliverables", label: "Built / Changed" },
    { id: "collaboration", label: "Collaboration" },
    { id: "skills", label: "Skills" },
    { id: "outcomes", label: "Outcome / Impact" },
    { id: "resume", label: "Resume Versions" },
  ];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-12 lg:px-8 lg:py-16">
      <Link
        href="/project-management"
        className="inline-flex w-fit rounded-full border border-black/10 px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
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

      <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[1.25rem] border border-black/10 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              On this page
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="grid gap-6">
          <section
            id="context"
            className="scroll-mt-28 rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
            <SectionHeader
              eyebrow="Context"
              title="Starting situation"
              description={project.context}
            />
          </section>
          <section
            id="objective"
            className="scroll-mt-28 rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
            <SectionHeader
              eyebrow="Objective"
              title="What the project needed to achieve"
              description={project.objective}
            />
          </section>
          <section
            id="ownership"
            className="scroll-mt-28 rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              What I Owned
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.ownership.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section
            id="deliverables"
            className="scroll-mt-28 rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              What I Built / Changed
            </p>
            {project.deliverables.length ? (
              <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-base leading-7 text-stone-600">
                This project was more heavily centered on ownership, coordination,
                and rollout support than on discrete build outputs.
              </p>
            )}
          </section>
          <section
            id="collaboration"
            className="scroll-mt-28 rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Collaboration
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.collaborators.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section
            id="skills"
            className="scroll-mt-28 rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
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
          <section
            id="outcomes"
            className="scroll-mt-28 rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Outcome / Impact
            </p>
            {project.outcomes.length ? (
              <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
                {project.outcomes.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-black/10 bg-white px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-base leading-7 text-stone-600">
                Outcome detail can be expanded further as this project archive grows.
              </p>
            )}
            <dl className="mt-6 grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-black"
                >
                  <dt className="text-xs uppercase tracking-[0.16em] text-stone-500">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>

      <div id="resume" className="scroll-mt-28">
        <ResumeVersionBlock
          shortVersion={project.shortResumeVersion}
          longVersion={project.longResumeVersion}
          keywords={project.tags}
        />
      </div>

      <RelatedProjects projects={relatedProjects} />
    </main>
  );
}
