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
              className={`site-button site-button--compact ${
                values.projectType
                  ? "site-button--secondary"
                  : "site-button--primary"
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
                className={`site-button site-button--compact ${
                  values.projectType === item
                    ? "site-button--primary"
                    : "site-button--secondary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={buildViewHref("list")}
            className={`site-button site-button--compact ${
              values.view === "list"
                ? "site-button--primary"
                : "site-button--secondary"
            }`}
          >
            List
          </Link>
          <Link
            href={buildViewHref("grid")}
            className={`site-button site-button--compact ${
              values.view === "grid"
                ? "site-button--primary"
                : "site-button--secondary"
            }`}
          >
            Grid
          </Link>
        </div>
      </div>
    </div>
  );
}
