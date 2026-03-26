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
    <div className="flex max-w-3xl flex-col gap-4">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-stone-950 sm:text-5xl">
        {title}
      </h1>
      <p className="text-lg leading-8 text-stone-600">{description}</p>
    </div>
  );
}
