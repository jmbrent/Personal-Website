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
    { id: "context", label: "Start" },
    { id: "objective", label: "Goal" },
    { id: "ownership", label: "Role" },
    { id: "deliverables", label: "Scope" },
    { id: "collaboration", label: "Team" },
    { id: "skills", label: "Skills" },
    { id: "outcomes", label: "Outcome" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-12 lg:px-8 lg:py-16">
      <Link
        href="/"
        className="inline-flex w-fit border border-black/10 px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
      >
        Back to work
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
          <div className="border border-black/10 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Project
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="border border-black/10 px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
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
            className="scroll-mt-28 border border-black/10 bg-white p-6"
          >
            <SectionHeader
              eyebrow="Start"
              title="Start"
              description={project.context}
            />
          </section>
          <section
            id="objective"
            className="scroll-mt-28 border border-black/10 bg-white p-6"
          >
            <SectionHeader
              eyebrow="Goal"
              title="Goal"
              description={project.objective}
            />
          </section>
          <section
            id="ownership"
            className="scroll-mt-28 border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Role
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.ownership.map((item) => (
                <li
                  key={item}
                  className="border border-black/10 bg-white px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section
            id="deliverables"
            className="scroll-mt-28 border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Scope
            </p>
            {project.deliverables.length ? (
              <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
                {project.deliverables.map((item) => (
                <li
                  key={item}
                    className="border border-black/10 bg-white px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-base leading-7 text-stone-600">
                This work centered more on coordination, ownership, and delivery
                support than discrete build outputs.
              </p>
            )}
          </section>
          <section
            id="collaboration"
            className="scroll-mt-28 border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Team
            </p>
            <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
              {project.collaborators.map((item) => (
                <li
                  key={item}
                  className="border border-black/10 bg-white px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section
            id="skills"
            className="scroll-mt-28 border border-black/10 bg-white p-6"
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
            className="scroll-mt-28 border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
              Outcome
            </p>
            {project.outcomes.length ? (
              <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
                {project.outcomes.map((item) => (
                <li
                  key={item}
                    className="border border-black/10 bg-white px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-base leading-7 text-stone-600">
                Outcome detail can expand further as the archive grows.
              </p>
            )}
            <dl className="mt-6 grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-black/10 bg-white px-4 py-4 text-black"
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
