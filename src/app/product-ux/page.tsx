import { CategoryArchive } from "@/components/category-archive";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Product / UX",
};

export default function ProductUxPage() {
  const projects = getProjects().filter(
    (project) => project.category === "Product / UX",
  );

  return (
    <CategoryArchive
      title="Product / UX"
      description="Product design, research, onboarding flow, dashboard structure, and interface clarity across fintech, healthcare, and media."
      projects={projects}
      accentClassName="bg-[linear-gradient(180deg,rgba(246,241,210,0.82),rgba(255,255,255,1))]"
      linkHref="/"
      linkLabel="All work"
    />
  );
}
