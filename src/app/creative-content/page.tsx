import { CategoryArchive } from "@/components/category-archive";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Creative / Content",
};

export default function CreativeContentPage() {
  const projects = getProjects().filter(
    (project) => project.category === "Creative / Content",
  );

  return (
    <CategoryArchive
      title="Creative / Content"
      description="Messaging systems, lifecycle communication, branded content, campaigns, video editing, and motion-led product storytelling."
      projects={projects}
      accentClassName="bg-[linear-gradient(180deg,rgba(255,229,223,0.74),rgba(255,255,255,1))]"
      linkHref="/"
      linkLabel="All work"
    />
  );
}
