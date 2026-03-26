import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Product / UX",
};

export default function ProductUxPage() {
  return (
    <PageShell
      eyebrow="Product / UX"
      title="Product structure, feature clarity, and interface thinking"
      description="This section is reserved for product and UX work that sits adjacent to the project management archive: dashboard organization, information architecture, user-facing flow decisions, and feature framing."
      bullets={[
        "Dashboard structure and feature organization",
        "Information architecture for growing products",
        "User-facing workflow clarity in ambiguous environments",
        "Product messaging that supports usability",
      ]}
    />
  );
}
