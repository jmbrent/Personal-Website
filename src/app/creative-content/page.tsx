import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Creative / Content",
};

export default function CreativeContentPage() {
  return (
    <PageShell
      eyebrow="Creative / Content"
      title="Messaging systems, content strategy, and communication design"
      description="This section will house work related to lifecycle communication, narrative framing, content operations, and user-facing messaging systems that supported adoption and retention."
      bullets={[
        "Lifecycle email systems and newsletters",
        "Survey and report framing for user understanding",
        "Product messaging aligned with onboarding and retention",
        "Content structures that support product operations",
      ]}
    />
  );
}
