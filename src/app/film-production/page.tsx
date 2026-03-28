import { CategoryArchive } from "@/components/category-archive";
import { getProjectsByCategory } from "@/lib/projects";

export const metadata = {
  title: "Film / TV",
};

export default function FilmProductionPage() {
  const projects = getProjectsByCategory("Film / Production");

  return (
    <CategoryArchive
      title="Film / TV"
      description="Production, development, camera, editorial, and coordination work across independent film, television, and creator-led projects."
      projects={projects}
      accentClassName="bg-[linear-gradient(180deg,rgba(225,238,232,0.82),rgba(255,255,255,1))]"
      linkHref="/"
      linkLabel="All work"
      defaultView="grid"
    />
  );
}
