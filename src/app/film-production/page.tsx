import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Film / Production",
};

export default function FilmProductionPage() {
  return (
    <PageShell
      eyebrow="Film / Production"
      title="Film and production background"
      description="This section is a lighter placeholder for film and production work. It stays separate from the product archive, but it informs the same execution-oriented approach to coordination, timing, and delivery."
      bullets={[
        "Production planning and coordination",
        "Execution under changing timelines and constraints",
        "Team communication and delivery support",
        "Operational discipline carried into startup product work",
      ]}
    />
  );
}
