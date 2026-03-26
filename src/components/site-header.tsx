"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Work" },
  { href: "/contact", label: "Start a Project" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const workPaths = [
    "/",
    "/work",
    "/project-management",
    "/product-ux",
    "/creative-content",
    "/film-production",
    "/resume",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-8 px-5 py-5 lg:px-8">
        <Link href="/" className="text-[2.1rem] leading-none font-semibold tracking-[-0.04em] text-black sm:text-[3.1rem]">
          jonathan brent
        </Link>
        <nav className="overflow-x-auto pt-1">
          <ul className="flex min-w-max gap-5 pb-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? workPaths.some((path) =>
                      path === "/" ? pathname === path : pathname.startsWith(path),
                    )
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-flex border-b pb-1 text-base transition ${
                      isActive
                        ? "border-black text-black"
                        : "border-transparent text-stone-600 hover:border-black/30 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
