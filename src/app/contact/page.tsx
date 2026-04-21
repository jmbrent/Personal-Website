import { SectionHeader } from "@/components/section-header";

export const metadata = {
  title: "Start a Project",
};

const contactMethods = [
  {
    label: "Email",
    value: "jonbrentcreative@gmail.com",
    href: "mailto:jonbrentcreative@gmail.com",
    note: "Best direct contact for now.",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jonathanmbrent",
    href: "https://www.linkedin.com/in/jonathanmbrent/",
    note: "Professional profile and background.",
    external: true,
  },
  {
    label: "IMDb",
    value: "imdb.com/name/nm6025350",
    href: "https://www.imdb.com/name/nm6025350/",
    note: "Film and production credits.",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader
        eyebrow="Start a Project"
        title="Contact"
        description="Direct contact and reference links."
      />
      <section className="grid gap-5 md:grid-cols-3">
        {contactMethods.map((item) => (
          <article
            key={item.label}
            className="rounded-[1.25rem] border border-black/10 bg-white p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              {item.label}
            </p>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="mt-4 inline-flex text-xl font-semibold text-stone-950 transition hover:text-stone-700"
            >
              {item.value}
            </a>
            <p className="mt-3 text-sm leading-6 text-stone-600">{item.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
