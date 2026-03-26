export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white/70">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-stone-600 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>Built as a searchable, resume-ready archive of project work.</p>
        <p>Next.js App Router, TypeScript, Tailwind CSS, local content model.</p>
      </div>
    </footer>
  );
}
