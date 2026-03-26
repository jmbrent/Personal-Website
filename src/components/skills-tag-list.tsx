type SkillsTagListProps = {
  items: string[];
};

export function SkillsTagList({ items }: SkillsTagListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-stone-300 bg-stone-100 px-3 py-1 text-xs font-medium tracking-[0.03em] text-stone-700"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
