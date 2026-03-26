import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Creative / Content",
};

export default function CreativeContentPage() {
  return (
    <PageShell
      eyebrow="Creative / Content"
      title="Messaging systems, content strategy, and lifecycle communication"
      description="This side of the work includes lifecycle emails, newsletters, survey framing, report language, and product-facing communication tied directly to adoption and retention."
      bullets={[
        "Lifecycle email systems and weekly market newsletters",
        "Survey and report framing for behavioral finance products",
        "Messaging aligned with onboarding, discovery, and retention",
        "Content systems that support product operations rather than standalone campaigns",
      ]}
    />
  );
}
