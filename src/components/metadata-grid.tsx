type MetadataGridProps = {
  items: Array<{ label: string; value: string }>;
};

export function MetadataGrid({ items }: MetadataGridProps) {
  return (
    <dl className="grid gap-5 rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_48px_rgba(53,42,31,0.06)] md:grid-cols-2 xl:grid-cols-5">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-7 text-stone-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
