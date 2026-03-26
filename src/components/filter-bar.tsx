"use client";

type FilterBarProps = {
  search: string;
  projectTypes: string[];
  skills: string[];
  years: string[];
  values: {
    projectType: string;
    skill: string;
    year: string;
    sort: string;
  };
  onChange: (key: string, value: string) => void;
  onReset: () => void;
};

const fieldClassName =
  "w-full rounded-full border border-black/10 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-black";

export function FilterBar({
  search,
  projectTypes,
  skills,
  years,
  values,
  onChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="sticky top-[6.5rem] z-20 rounded-[1.25rem] border border-black/10 bg-white/95 p-4 backdrop-blur">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.7fr]">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Search
          </span>
          <input
            className={fieldClassName}
            type="search"
            value={search}
            placeholder="Search projects, outputs, or skills"
            onChange={(event) => onChange("search", event.target.value)}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Skill
          </span>
          <select
            className={fieldClassName}
            value={values.skill}
            onChange={(event) => onChange("skill", event.target.value)}
          >
            <option value="">All skills</option>
            {skills.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Year
          </span>
          <select
            className={fieldClassName}
            value={values.year}
            onChange={(event) => onChange("year", event.target.value)}
          >
            <option value="">Any year</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Sort
          </span>
          <select
            className={fieldClassName}
            value={values.sort}
            onChange={(event) => onChange("sort", event.target.value)}
          >
            <option value="featured">Featured + newest</option>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Title A-Z</option>
          </select>
        </label>
      </div>
      <div className="mt-4 overflow-x-auto">
        <div className="flex min-w-max gap-2 pb-1">
          <button
            type="button"
            onClick={() => onChange("projectType", "")}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              values.projectType
                ? "border-black/10 text-stone-600 hover:border-black"
                : "border-black bg-black text-white"
            }`}
          >
            All project types
          </button>
          {projectTypes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                onChange("projectType", values.projectType === item ? "" : item)
              }
              className={`rounded-full border px-4 py-2 text-sm transition ${
                values.projectType === item
                  ? "border-black bg-black text-white"
                  : "border-black/10 text-stone-600 hover:border-black hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 border-t border-black/8 pt-4">
        <p className="text-sm leading-6 text-stone-600">
          Minimal filters for scanning without turning the page into a dashboard.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-black/10 px-4 py-2 text-sm text-stone-700 transition hover:border-black hover:text-black"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
