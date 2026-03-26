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
    <section className="border border-black/10 bg-white p-6 text-black">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          Resume
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl">Versions</h2>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="border border-black/10 bg-white p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Short resume version
          </p>
          <p className="mt-3 text-base leading-7 text-stone-700">{shortVersion}</p>
        </div>
        <div className="border border-black/10 bg-white p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Long resume version
          </p>
          <p className="mt-3 text-base leading-7 text-stone-700">{longVersion}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
          Key skills / ATS keywords
        </p>
        <SkillsTagList items={keywords} />
      </div>
    </section>
  );
}
