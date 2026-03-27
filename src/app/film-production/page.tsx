import { CategoryArchive } from "@/components/category-archive";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Film / TV",
};

export default function FilmProductionPage() {
  const projects = getProjects().filter(
    (project) => project.category === "Film / Production",
  );

  return (
    <CategoryArchive
      title="Film / TV"
      description="Production, development, camera, editorial, and coordination work across independent film, television, and creator-led projects."
      projects={projects}
      accentClassName="bg-[linear-gradient(180deg,rgba(225,238,232,0.82),rgba(255,255,255,1))]"
      linkHref="/"
      linkLabel="All work"
      layout="grid"
    />
  );
}
