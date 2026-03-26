import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Film / Production",
};

export default function FilmProductionPage() {
  return (
    <PageShell
      eyebrow="Film / Production"
      title="Production work, execution discipline, and creative operations"
      description="This section gives the site room to capture production-facing work separately from product delivery, while keeping the same emphasis on ownership, coordination, and execution."
      bullets={[
        "Production planning and coordination",
        "Creative execution across constrained timelines",
        "Team communication and delivery support",
        "Operational detail applied in high-variance environments",
      ]}
    />
  );
}
