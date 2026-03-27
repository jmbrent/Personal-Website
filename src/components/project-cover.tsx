import Image from "next/image";

import { Project } from "@/types/projects";

type ProjectCoverProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

const fallbackStyles: Record<string, string> = {
  "Project Management":
    "bg-[linear-gradient(135deg,rgba(227,236,255,0.95),rgba(255,255,255,1))]",
  "Product / UX":
    "bg-[linear-gradient(135deg,rgba(246,241,210,0.95),rgba(255,255,255,1))]",
  "Creative / Content":
    "bg-[linear-gradient(135deg,rgba(255,229,223,0.92),rgba(255,255,255,1))]",
  "Film / Production":
    "bg-[linear-gradient(135deg,rgba(225,238,232,0.95),rgba(255,255,255,1))]",
};

export function ProjectCover({
  project,
  className = "",
  priority = false,
}: ProjectCoverProps) {
  const image = project.coverImage;

  if (!image) {
    return (
      <div
        className={`relative overflow-hidden border border-black/10 ${fallbackStyles[project.category] ?? "bg-stone-100"} ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.92),transparent_36%)]" />
        <div className="relative flex h-full flex-col justify-between p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            {project.company}
          </p>
          <div>
            <p className="text-lg font-semibold leading-tight tracking-[-0.04em] text-black">
              {project.shortTitle}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-stone-500">
              {project.projectType}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden border border-black/10 bg-stone-100 ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 28rem, (min-width: 768px) 42vw, 100vw"
        className="object-cover"
        style={{
          objectFit: image.fit ?? "cover",
          objectPosition: image.position ?? "center",
        }}
        unoptimized={image.src.endsWith(".gif") || image.src.endsWith(".svg")}
      />
    </div>
  );
}
