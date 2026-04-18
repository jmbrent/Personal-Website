import Image from "next/image";

import { Project, ProjectImage } from "@/types/projects";

function DeviceImage({
  image,
  alt,
}: {
  image: ProjectImage;
  alt: string;
}) {
  return (
    <Image
      src={image.src}
      alt={alt}
      fill
      sizes="(min-width: 1280px) 38vw, (min-width: 768px) 46vw, 100vw"
      className="object-cover"
      style={{
        objectFit: image.fit ?? "cover",
        objectPosition: image.position ?? "center",
      }}
      unoptimized={image.src.endsWith(".gif") || image.src.endsWith(".svg")}
    />
  );
}

export function ProjectDevicePreview({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const desktopImage = project.uiGallery?.desktop?.[0] ?? project.coverImage;
  const mobileImage = project.uiGallery?.mobile?.[0];

  if (!desktopImage) {
    return null;
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(248,246,241,0.96),rgba(255,255,255,1))] p-4 shadow-[0_28px_70px_rgba(28,24,18,0.1)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.92),transparent_36%)]" />
      <div className="relative">
        <div className="rounded-[1.45rem] border border-stone-300 bg-[#ebe8e2] p-3 shadow-[0_18px_45px_rgba(28,24,18,0.08)]">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#efb0a6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#efd49a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#b9d8ba]" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] border border-stone-200 bg-white">
            <DeviceImage image={desktopImage} alt={desktopImage.alt} />
          </div>
        </div>

        {mobileImage ? (
          <div className="absolute -bottom-2 right-3 hidden w-[28%] min-w-[8rem] max-w-[11rem] rounded-[2rem] border border-stone-300 bg-[#ebe8e2] p-2.5 shadow-[0_20px_50px_rgba(28,24,18,0.14)] sm:block">
            <div className="mb-2 flex justify-center">
              <div className="h-1.5 w-16 rounded-full bg-stone-500/25" />
            </div>
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.35rem] border border-stone-200 bg-white">
              <DeviceImage image={mobileImage} alt={mobileImage.alt} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
