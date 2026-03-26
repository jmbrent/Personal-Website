import { SectionHeader } from "@/components/section-header";

export const metadata = {
  title: "Contact",
};

const contactMethods = [
  {
    label: "Email",
    value: "hello@jonathanbrent.com",
    note: "Replace with your preferred inbox.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jonathanbrent",
    note: "Replace with your live profile URL.",
  },
  {
    label: "Location",
    value: "Toronto, ON",
    note: "Adjust to your preferred location line.",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-5 py-12 lg:px-8 lg:py-16">
      <SectionHeader
        eyebrow="Contact"
        title="Simple contact details with minimal friction"
        description="Keep this page direct. The goal is fast contact access, not a complex form."
      />
      <section className="grid gap-5 md:grid-cols-3">
        {contactMethods.map((item) => (
          <article
            key={item.label}
            className="rounded-[1.9rem] border border-stone-200 bg-white p-6 shadow-[0_20px_50px_rgba(53,42,31,0.07)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              {item.label}
            </p>
            <p className="mt-4 text-xl font-semibold text-stone-950">{item.value}</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">{item.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
