type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex max-w-4xl flex-col gap-4">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-[family-name:var(--font-display)] text-3xl leading-tight tracking-[-0.03em] text-stone-950 sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-3xl text-lg leading-8 text-stone-600">{description}</p>
    </div>
  );
}
