import Link from "next/link";

import { getProjects } from "@/lib/projects";
import { Project } from "@/types/projects";

export const metadata = {
  title: "Resume",
};

const resumeLinks = [
  {
    label: "Download Resume (.docx)",
    href: "/files/Jonathan_Brent_Resume.docx",
    external: false,
    primary: true,
    download: true,
  },
  {
    label: "jonbrentcreative@gmail.com",
    href: "mailto:jonbrentcreative@gmail.com",
    external: true,
  },
  {
    label: "416.303.8885",
    href: "tel:+14163038885",
    external: true,
  },
  {
    label: "jonathanbrent.ca",
    href: "https://jonathanbrent.ca",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonathanmbrent/",
    external: true,
  },
  {
    label: "IMDb",
    href: "https://www.imdb.com/name/nm6025350/",
    external: true,
  },
];

const headlineSignals = [
  {
    label: "Advisor onboarding",
    value: "Hours or days to minutes",
  },
  {
    label: "Paid pilot adoption",
    value: "~10 advisors across ~4 firms",
  },
  {
    label: "Discovery funnel",
    value: "1,000+ survey completions",
  },
  {
    label: "Lifecycle messaging",
    value: "~42% open rate",
  },
];

const coreStrengths = [
  "Product systems and onboarding design",
  "Implementation and rollout support",
  "Dashboard structure and information architecture",
  "UX research, product messaging, and adoption",
  "Cross-functional coordination in small startup teams",
  "Content systems that clarify complex products",
];

const toolsAndPlatforms = [
  "Figma",
  "Trello",
  "Jira",
  "Stripe",
  "ConvertKit",
  "CRM-connected workflows",
  "Survey funnels and behavioral profile systems",
];

const education = [
  {
    title: "BA, Media Production",
    institution: "Humber College",
    timeline: "2015 - 2019",
  },
  {
    title: "Commerce (Coursework)",
    institution: "Dalhousie University",
    timeline: "2011 - 2013",
  },
  {
    title: "Philosophy (Coursework)",
    institution: "Toronto Metropolitan University",
    timeline: "2013 - 2014",
  },
];

type ResumeEntry = {
  company: string;
  role: string;
  timeline: string;
  location: string;
  summary: string;
  bullets: string[];
  relatedProjects?: string[];
};

const selectedExperience: ResumeEntry[] = [
  {
    company: "Finliti",
    role: "Product & Content Lead",
    timeline: "03/2023 - Present",
    location: "Toronto, ON",
    summary:
      "Project manager and product operations lead driving onboarding, rollout, dashboard structure, and user-facing product clarity inside a startup fintech platform.",
    bullets: [
      "Served as product and implementation lead on the advisor platform, working directly with the CTO and developer to consolidate fragmented product pieces into a more cohesive experience while owning UX direction in Figma.",
      "Replaced a manual Typeform, Google Sheets, pgAdmin, and separate-payment onboarding flow with a self-serve Stripe workflow, reducing advisor setup from hours to minutes and removing 8+ provisioning steps.",
      "Supported onboarding for ~10 active advisors across ~4 paid pilot firms and tracked rollout work across Trello and Jira without a formal PM function in place.",
      "Helped evolve the product from a survey-and-report tool into a 7+ surface advisor platform covering dashboard, portfolio builder, backtesting, alerts, newsletters, and AI-led features.",
      "Built lifecycle email and newsletter systems in ConvertKit hitting ~42% open rates while also defining CRM and workflow logic for routing behavioral profile data into advisor-facing surfaces.",
    ],
    relatedProjects: [
      "advisor-onboarding-system-transformation",
      "advisor-dashboard-platform-expansion",
      "crm-behavioral-profile-integration",
      "market-alerts-portfolio-signal-system",
      "enterprise-rollout-early-client-growth",
    ],
  },
  {
    company: "Finliti",
    role: "Content Lead / Content Developer",
    timeline: "10/2021 - 04/2023",
    location: "Toronto, ON",
    summary:
      "Owned product-facing content systems, onboarding explainers, report framing, and lifecycle messaging during Finliti's earlier consumer and beta stages.",
    bullets: [
      "Produced investor reports, onboarding content, lifecycle messaging, and product explainers that made a behavioral finance platform easier to understand and use.",
      "Supported a discovery funnel that reached 1,000+ survey completions and roughly 500 MyFinliti beta users before the company shifted more heavily toward the B2B advisor platform.",
    ],
    relatedProjects: [
      "finliti-content-systems-explainers",
      "b2c-discovery-survey-funnel",
      "lifecycle-email-engagement-system",
    ],
  },
  {
    company: "medsEXPERT Pharmacy",
    role: "Product Designer",
    timeline: "08/2022 - 11/2022",
    location: "Remote",
    summary:
      "Contract product design support focused on UX flow improvement and interface clarity for a healthcare and pharmacy SaaS product.",
    bullets: [
      "Improved user flows and interface clarity for a healthcare product, contributing product design support in an active delivery environment.",
    ],
    relatedProjects: ["medsexpert-product-design-support"],
  },
  {
    company: "Purified News",
    role: "UX Researcher",
    timeline: "09/2021 - 09/2022",
    location: "Toronto, ON",
    summary:
      "Research support for a Gen Z-focused news product, centered on audience insight and product-direction input.",
    bullets: [
      "Conducted user research and partnered with the product team on audience needs, insight gathering, and product-direction questions for a younger media audience.",
    ],
    relatedProjects: ["purified-news-ux-research"],
  },
];

const additionalExperience = [
  {
    company: "Nimble Media",
    role: "Senior Copywriter",
    timeline: "03/2020 - 10/2021",
    summary:
      "Developed content strategies, email campaigns, and messaging frameworks across 65+ client accounts.",
  },
  {
    company: "Scalepoynt",
    role: "Video Editor & Creative Lead (Contract)",
    timeline: "01/2023 - 05/2025",
    summary:
      "Delivered product walkthroughs and promotional video assets across a multi-year SaaS client engagement.",
  },
  {
    company: "Byeeee",
    role: "Co-Producer",
    timeline: "09/2024 - 10/2024",
    summary:
      "Feature film production support in Ontario.",
  },
  {
    company: "Get Hooked",
    role: "2nd Assistant Director",
    timeline: "08/2024 - 09/2024",
    summary:
      "Production coordination support for OUTtv / Amazon release work.",
  },
  {
    company: "Finding Green",
    role: "Writer / Producer",
    timeline: "01/2022 - 01/2025",
    summary:
      "Secured CMF/IPF funding and developed scripts, pitch materials, and development structure for an original series.",
  },
];

function ResumeExperienceCard({
  entry,
  relatedProjectMap,
}: {
  entry: ResumeEntry;
  relatedProjectMap: Map<string, Project>;
}) {
  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-white px-6 py-6 shadow-[0_20px_45px_rgba(20,18,12,0.05)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            {entry.company}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-stone-950">
            {entry.role}
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-stone-500">
            {entry.location}
          </p>
        </div>
        <p className="rounded-full border border-black/10 bg-stone-50 px-4 py-2 text-sm text-stone-700">
          {entry.timeline}
        </p>
      </div>
      <p className="mt-5 text-base leading-8 text-stone-700">
        {entry.summary}
      </p>
      <ul className="mt-6 grid gap-3">
        {entry.bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-[1.15rem] border border-black/10 bg-stone-50 px-4 py-4 text-sm leading-7 text-stone-700"
          >
            {bullet}
          </li>
        ))}
      </ul>
      {entry.relatedProjects?.length ? (
        <div className="mt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
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
                  className="site-button site-button--secondary site-button--compact"
                >
                  {project.title}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function ResumePage() {
  const projects = getProjects();
  const relatedProjectMap = new Map(projects.map((project) => [project.id, project]));

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 pb-24 pt-8 lg:px-8 lg:pb-28 lg:pt-10">
      <section className="relative overflow-hidden rounded-[2.4rem] border border-black/10 bg-[linear-gradient(135deg,rgba(248,243,230,0.98),rgba(255,255,255,0.98)_54%,rgba(230,236,249,0.82))] px-6 py-8 shadow-[0_34px_95px_rgba(25,22,14,0.08)] lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -right-12 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.94),rgba(255,255,255,0))]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-stone-500">
              Resume
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.06em] text-stone-950 sm:text-5xl lg:text-[4.2rem]">
              Jonathan Brent
            </h1>
            <p className="mt-4 max-w-3xl text-xl leading-8 text-stone-700 sm:text-2xl">
              Project manager and product operations lead focused on turning
              fragmented startup workflows into clearer onboarding, rollout, and
              user-facing product systems.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600">
              Hands-on across implementation, workflow design, cross-functional
              coordination, UX direction, product messaging, and adoption. The
              strongest work lives where product structure and operational
              reality need to meet cleanly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {resumeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className={`site-button ${ 
                    link.primary
                      ? "site-button--primary"
                      : "site-button--secondary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {headlineSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-[1.4rem] border border-black/10 bg-white/85 px-5 py-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {signal.label}
                </p>
                <p className="mt-3 text-xl font-semibold leading-8 tracking-[-0.03em] text-stone-950">
                  {signal.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="grid gap-6 lg:sticky lg:top-28 lg:h-fit">
          <section className="rounded-[1.8rem] border border-black/10 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Core Strengths
            </p>
            <ul className="mt-5 grid gap-3">
              {coreStrengths.map((strength) => (
                <li
                  key={strength}
                  className="rounded-[1.1rem] border border-black/10 bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-700"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.8rem] border border-black/10 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Tools / Platforms
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {toolsAndPlatforms.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-black/10 bg-stone-50 px-3 py-2 text-sm text-stone-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-black/10 bg-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Education
            </p>
            <div className="mt-5 grid gap-4">
              {education.map((item) => (
                <div
                  key={`${item.title}-${item.institution}`}
                  className="rounded-[1.1rem] border border-black/10 bg-stone-50 px-4 py-4"
                >
                  <p className="text-sm font-semibold text-stone-950">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-stone-700">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-stone-500">
                    {item.timeline}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <div className="grid gap-6">
          <section className="rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(251,248,241,0.9),rgba(255,255,255,1))] p-6 lg:p-7">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                Selected Experience
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950">
                Product, operations, and UX work with the strongest business impact.
              </h2>
              <p className="mt-3 text-base leading-8 text-stone-600">
                This section expands beyond a one-page summary so the product
                work has enough room to show systems ownership, rollout detail,
                and measurable outcomes.
              </p>
            </div>
            <div className="mt-6 grid gap-6">
              {selectedExperience.map((entry) => (
                <ResumeExperienceCard
                  key={`${entry.company}-${entry.role}`}
                  entry={entry}
                  relatedProjectMap={relatedProjectMap}
                />
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-white p-6 lg:p-7">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                Additional Experience
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950">
                Creative, production, and client-facing work that rounds out the profile.
              </h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {additionalExperience.map((entry) => (
                <article
                  key={`${entry.company}-${entry.role}`}
                  className="rounded-[1.3rem] border border-black/10 bg-stone-50 px-5 py-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                        {entry.company}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-stone-950">
                        {entry.role}
                      </h3>
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                      {entry.timeline}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {entry.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
