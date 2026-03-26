export type ProjectStatus =
  | "Launched"
  | "Ongoing"
  | "In Pilot"
  | "Prototype"
  | "Strategic";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  projectType: string;
  company: string;
  client?: string;
  role: string;
  location?: string;
  timelineStart: string;
  timelineEnd: string;
  status: ProjectStatus;
  oneLineSummary: string;
  shortResumeVersion: string;
  longResumeVersion: string;
  context: string;
  objective: string;
  ownership: string[];
  deliverables: string[];
  collaborators: string[];
  skills: string[];
  tools: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
  tags: string[];
  featured: boolean;
  industry: string;
  audience: string;
  scopeLevel: string;
  links?: ProjectLink[];
  relatedProjects?: string[];
};
