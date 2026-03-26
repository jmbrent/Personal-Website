"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/project-management", label: "Project Management" },
  { href: "/product-ux", label: "Product / UX" },
  { href: "/creative-content", label: "Creative / Content" },
  { href: "/film-production", label: "Film / Production" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(248,246,241,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col">
            <span className="font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.28em] text-stone-500">
              Jonathan Brent
            </span>
            <span className="font-[family-name:var(--font-display)] text-xl text-stone-950">
              Portfolio / Resume Archive
            </span>
          </Link>
          <p className="hidden max-w-md text-sm leading-6 text-stone-600 md:block">
            Structured project work focused on implementation, product systems,
            rollout, and cross-functional execution.
          </p>
        </div>
        <nav className="overflow-x-auto">
          <ul className="flex min-w-max gap-2 pb-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-flex rounded-full border px-4 py-2 text-sm transition ${
                      isActive
                        ? "border-stone-900 bg-stone-900 text-stone-50"
                        : "border-stone-300 bg-white/70 text-stone-700 hover:border-stone-500 hover:text-stone-950"
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
