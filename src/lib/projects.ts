import { projects } from "@/content/projects";
import { Project } from "@/types/projects";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

function formatDate(value: string) {
  const [year, month] = value.split("-");
  const parsed = new Date(Date.UTC(Number(year), Number(month) - 1, 1));
  return monthFormatter.format(parsed);
}

export function getProjects() {
  return [...projects].sort((left, right) => {
    if (left.featured !== right.featured) {
      return left.featured ? -1 : 1;
    }

    return right.timelineStart.localeCompare(left.timelineStart);
  });
}

export function projectMatchesCategory(project: Project, category: string) {
  return (
    project.category === category ||
    project.secondaryCategories?.includes(category) === true
  );
}

export function getProjectsByCategory(category: string) {
  return getProjects().filter((project) => projectMatchesCategory(project, category));
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectTimelineLabel(
  timelineStart: string,
  timelineEnd: string,
) {
  const start = formatDate(timelineStart);
  const end = timelineEnd === "Present" ? "Present" : formatDate(timelineEnd);

  return `${start} - ${end}`;
}

export function getProjectYears() {
  const years = new Set<string>();

  for (const project of projects) {
    years.add(project.timelineStart.slice(0, 4));

    if (project.timelineEnd !== "Present") {
      years.add(project.timelineEnd.slice(0, 4));
    }
  }

  return [...years].sort((left, right) => right.localeCompare(left));
}
