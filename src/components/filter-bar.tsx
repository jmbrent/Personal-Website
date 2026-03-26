"use client";

type FilterBarProps = {
  projectTypes: string[];
  values: {
    projectType: string;
    view: string;
  };
  onChange: (key: string, value: string) => void;
};

export function FilterBar({
  projectTypes,
  values,
  onChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-[5.4rem] z-20 bg-white/96 pb-2 pt-1 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="overflow-x-auto">
          <div className="flex min-w-max gap-2 pb-1">
            <button
              type="button"
              onClick={() => onChange("projectType", "")}
              className={`border px-4 py-2 text-sm transition ${
                values.projectType
                  ? "border-black/10 text-stone-600 hover:border-black"
                  : "border-black bg-black text-white"
              }`}
            >
              All
            </button>
            {projectTypes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  onChange("projectType", values.projectType === item ? "" : item)
                }
                className={`border px-4 py-2 text-sm transition ${
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
        <div className="flex border border-black/10">
          <button
            type="button"
            onClick={() => onChange("view", "list")}
            className={`px-4 py-2 text-sm transition ${
              values.view === "list"
                ? "bg-black text-white"
                : "text-stone-600 hover:text-black"
            }`}
          >
            List
          </button>
          <button
            type="button"
            onClick={() => onChange("view", "grid")}
            className={`border-l border-black/10 px-4 py-2 text-sm transition ${
              values.view === "grid"
                ? "bg-black text-white"
                : "text-stone-600 hover:text-black"
            }`}
          >
            Grid
          </button>
        </div>
      </div>
    </div>
  );
}
