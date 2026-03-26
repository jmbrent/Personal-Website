import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Construction",
  description:
    "Jonathan Brent's portfolio is temporarily locked while the new site is being prepared.",
};

export default function UnderConstructionPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 items-center px-5 py-16 lg:px-8">
      <section className="w-full rounded-[2.25rem] border border-stone-200 bg-white p-8 shadow-[0_24px_60px_rgba(53,42,31,0.08)] sm:p-10 lg:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
          Jonathan Brent
        </p>
        <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.02] text-stone-950 sm:text-6xl">
          Site under construction.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          A new portfolio and click-through resume is in progress. The site is
          temporarily locked while content, project detail, and navigation are
          being finalized.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Contact
            </p>
            <a
              href="mailto:jonbrentcreative@gmail.com"
              className="mt-3 block text-lg font-semibold text-stone-950"
            >
              jonbrentcreative@gmail.com
            </a>
          </div>
          <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/jonathanmbrent/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-lg font-semibold text-stone-950"
            >
              linkedin.com/in/jonathanmbrent
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
