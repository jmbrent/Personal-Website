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
        <div className="rounded-[1.9rem] border border-stone-200 bg-white p-7 shadow-[0_20px_50px_rgba(53,42,31,0.07)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Direction
          </p>
          <ul className="mt-5 grid gap-3 text-base leading-7 text-stone-700">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.9rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(245,238,227,0.9),rgba(255,255,255,0.95))] p-7 shadow-[0_20px_50px_rgba(53,42,31,0.07)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Current Focus
          </p>
          <p className="mt-4 text-base leading-7 text-stone-700">
            The Project Management section is the primary archive right now. The
            adjacent sections give this site a complete structure while leaving
            room for more curated work later.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/project-management"
              className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
            >
              View project library
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-700 hover:text-stone-950"
            >
              Open resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
