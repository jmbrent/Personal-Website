import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Product / UX",
};

export default function ProductUxPage() {
  return (
    <PageShell
      eyebrow="Product / UX"
      title="Product structure and feature clarity work"
      description="Most of this work currently lives inside the Finliti project entries, especially around dashboard structure, information architecture, onboarding flow, and feature framing."
      bullets={[
        "Dashboard structure and feature organization across a growing advisor product",
        "Information architecture for tools that expanded beyond simple reports",
        "User-facing workflow clarity in onboarding, navigation, and delivery",
        "Feature framing tied to actual implementation constraints",
      ]}
    />
  );
}
