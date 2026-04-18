import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MetadataGrid } from "@/components/metadata-grid";
import { ProjectDetailHeader } from "@/components/project-detail-header";
import { ProjectUiGallery } from "@/components/project-ui-gallery";
import { RelatedProjects } from "@/components/related-projects";
import { ResumeVersionBlock } from "@/components/resume-version-block";
import { SectionHeader } from "@/components/section-header";
import { SkillsTagList } from "@/components/skills-tag-list";
import { getProjectBySlug, getProjects, isProductProject } from "@/lib/projects";
import { Project } from "@/types/projects";

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

function ProjectLinksSection({ project }: { project: Project }) {
  if (!project.links?.length) {
    return null;
  }

  return (
    <section className="border border-black/10 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        Links
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="border border-black px-4 py-2 text-sm text-black transition hover:bg-black hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function StandardProjectPage({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: Project[];
}) {
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

      <ProjectLinksSection project={project} />

      {project.galleryImages?.length ? (
        <section className="grid gap-4 md:grid-cols-2">
          {project.galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative overflow-hidden border border-black/10 bg-stone-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{
                    objectFit: image.fit ?? "cover",
                    objectPosition: image.position ?? "center",
                  }}
                  unoptimized={image.src.endsWith(".gif") || image.src.endsWith(".svg")}
                />
              </div>
            </div>
          ))}
        </section>
      ) : null}

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

function ProductCaseStudyPage({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: Project[];
}) {
  const sections = [
    { id: "problem", label: "Problem" },
    { id: "goal", label: "Goal" },
    { id: "responsibilities", label: "Role" },
    { id: "shipped", label: "Solution" },
    { id: "ui-mockups", label: "UI" },
    { id: "impact", label: "Impact" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-12 lg:px-8 lg:py-16">
      <Link
        href="/product-ux"
        className="inline-flex w-fit border border-black/10 px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
      >
        Back to Product / UX
      </Link>

      <ProjectDetailHeader project={project} />

      <MetadataGrid
        items={[
          { label: "Product type", value: project.projectType },
          { label: "Users / Audience", value: project.audience },
          { label: "Team", value: project.collaborators.join(", ") },
          { label: "Tools / Platforms", value: project.tools.join(", ") },
          { label: "Scope", value: project.scopeLevel },
        ]}
      />

      <ProjectLinksSection project={project} />

      <ProjectUiGallery project={project} />

      <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-[0_18px_40px_rgba(20,18,12,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Case Study
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-[0.9rem] border border-black/10 px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="grid gap-6">
          <section
            id="problem"
            className="scroll-mt-28 rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,18,12,0.05)]"
          >
            <SectionHeader
              eyebrow="Problem"
              title="What needed to work better in the product"
              description={project.context}
            />
          </section>
          <section
            id="goal"
            className="scroll-mt-28 rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,18,12,0.05)]"
          >
            <SectionHeader
              eyebrow="Goal"
              title="What the work was trying to improve"
              description={project.objective}
            />
          </section>
          <section
            id="responsibilities"
            className="scroll-mt-28 rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,18,12,0.05)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Responsibilities
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950">
              What I owned across product, UX, and delivery.
            </h2>
            <ul className="mt-6 grid gap-3 text-base leading-7 text-stone-700">
              {project.ownership.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.1rem] border border-black/10 bg-stone-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-[1.2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(248,246,241,1),rgba(255,255,255,1))] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                Skills in play
              </p>
              <div className="mt-4">
                <SkillsTagList items={project.skills} />
              </div>
            </div>
          </section>
          <section
            id="shipped"
            className="scroll-mt-28 rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,18,12,0.05)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Solution
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950">
              Product surfaces, flows, and output that moved the work forward.
            </h2>
            {project.deliverables.length ? (
              <ul className="mt-6 grid gap-3 text-base leading-7 text-stone-700">
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.1rem] border border-black/10 bg-stone-50 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-base leading-7 text-stone-600">
                This project centered more on product direction, UX judgment,
                and shaping the live work than on a single defined feature set.
              </p>
            )}
          </section>
          <section
            id="impact"
            className="scroll-mt-28 rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(20,18,12,0.05)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Impact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950">
              What changed for the product or the people using it.
            </h2>
            {project.outcomes.length ? (
              <ul className="mt-6 grid gap-3 text-base leading-7 text-stone-700">
                {project.outcomes.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.1rem] border border-black/10 bg-stone-50 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-base leading-7 text-stone-600">
                Outcome detail can expand further as the archive grows.
              </p>
            )}
            <dl className="mt-6 grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.2rem] border border-black/10 bg-stone-50 px-4 py-4 text-black"
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

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getProjects().filter((entry) =>
    project.relatedProjects?.includes(entry.id),
  );

  if (isProductProject(project)) {
    return (
      <ProductCaseStudyPage
        project={project}
        relatedProjects={relatedProjects}
      />
    );
  }

  return <StandardProjectPage project={project} relatedProjects={relatedProjects} />;
}
