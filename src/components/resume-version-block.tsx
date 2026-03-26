import { SkillsTagList } from "@/components/skills-tag-list";

type ResumeVersionBlockProps = {
  shortVersion: string;
  longVersion: string;
  keywords: string[];
};

export function ResumeVersionBlock({
  shortVersion,
  longVersion,
  keywords,
}: ResumeVersionBlockProps) {
  return (
    <section className="rounded-[1.75rem] border border-stone-200 bg-stone-950 p-6 text-stone-50 shadow-[0_18px_48px_rgba(32,24,18,0.18)]">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">
          Resume Version Toggle
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl">
          Reusable resume language
        </h2>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-300">
            Short resume version
          </p>
          <p className="mt-3 text-base leading-7 text-stone-100">{shortVersion}</p>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-300">
            Long resume version
          </p>
          <p className="mt-3 text-base leading-7 text-stone-100">{longVersion}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-stone-300">
          Key skills / ATS keywords
        </p>
        <SkillsTagList items={keywords} />
      </div>
    </section>
  );
}
