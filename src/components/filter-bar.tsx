"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const buildViewHref = (view: "list" | "grid") => {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (view === "list") {
      nextParams.delete("view");
    } else {
      nextParams.set("view", view);
    }

    const nextQuery = nextParams.toString();
    return nextQuery ? `${pathname}?${nextQuery}` : pathname;
  };

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
                  : "border-black bg-black !text-white hover:!text-white focus:!text-white active:!text-white"
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
                    ? "border-black bg-black !text-white hover:!text-white focus:!text-white active:!text-white"
                    : "border-black/10 text-stone-600 hover:border-black hover:text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex border border-black/10">
          <Link
            href={buildViewHref("list")}
            className={`inline-flex items-center justify-center px-4 py-2 text-sm transition ${
              values.view === "list"
                ? "bg-black !text-white hover:!text-white focus:!text-white active:!text-white visited:!text-white"
                : "text-stone-600 hover:text-black focus:text-black active:text-black"
            }`}
          >
            List
          </Link>
          <Link
            href={buildViewHref("grid")}
            className={`inline-flex items-center justify-center border-l border-black/10 px-4 py-2 text-sm transition ${
              values.view === "grid"
                ? "bg-black !text-white hover:!text-white focus:!text-white active:!text-white visited:!text-white"
                : "text-stone-600 hover:text-black focus:text-black active:text-black"
            }`}
          >
            Grid
          </Link>
        </div>
      </div>
    </div>
  );
}
