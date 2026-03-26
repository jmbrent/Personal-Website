"use client";

type FilterBarProps = {
  projectTypes: string[];
  companies: string[];
  roles: string[];
  skills: string[];
  years: string[];
  values: {
    projectType: string;
    company: string;
    role: string;
    skill: string;
    year: string;
    sort: string;
  };
  onChange: (key: string, value: string) => void;
  onReset: () => void;
};

const fieldClassName =
  "w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-900";

export function FilterBar({
  projectTypes,
  companies,
  roles,
  skills,
  years,
  values,
  onChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-[0_18px_45px_rgba(53,42,31,0.06)]">
      <div className="grid gap-4 lg:grid-cols-6">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Project Type
          </span>
          <select
            className={fieldClassName}
            value={values.projectType}
            onChange={(event) => onChange("projectType", event.target.value)}
          >
            <option value="">All project types</option>
            {projectTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Industry / Client
          </span>
          <select
            className={fieldClassName}
            value={values.company}
            onChange={(event) => onChange("company", event.target.value)}
          >
            <option value="">All companies</option>
            {companies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Role
          </span>
          <select
            className={fieldClassName}
            value={values.role}
            onChange={(event) => onChange("role", event.target.value)}
          >
            <option value="">All roles</option>
            {roles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
            Skill Area
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
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
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
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
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
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm leading-6 text-stone-600">
          Filter by implementation type, company context, role scope, skill
          area, and timeline.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:border-stone-700 hover:text-stone-950"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
