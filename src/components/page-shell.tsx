import Link from "next/link";

import { SectionHeader } from "@/components/section-header";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export function PageShell({
  eyebrow,
  title,
  description,
  bullets,
}: PageShellProps) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.25rem] border border-black/10 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Direction
          </p>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-black/10 bg-white px-4 py-3"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.25rem] border border-black/10 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Note
          </p>
          <p className="mt-4 text-base leading-7 text-stone-700">
            These sections are lighter than the Project Management archive right
            now. They exist to separate adjacent areas of work without forcing
            everything into one page.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/project-management"
              className="site-button site-button--primary"
            >
              Open project archive
            </Link>
            <Link
              href="/resume"
              className="site-button site-button--secondary"
            >
              Open resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
