import Image from "next/image";

import { Project, ProjectImage } from "@/types/projects";

function MockupFrame({
  device,
  image,
}: {
  device: "mobile" | "desktop";
  image: ProjectImage;
}) {
  const isMobile = device === "mobile";

  return (
    <figure className="grid gap-3">
      <div
        className={`overflow-hidden border border-stone-200 bg-[#ebe8e2] shadow-[0_24px_60px_rgba(24,20,12,0.1)] ${
          isMobile ? "rounded-[2rem] p-2.5" : "rounded-[1.5rem] p-3"
        }`}
      >
        {isMobile ? (
          <div className="mb-2 flex justify-center">
            <div className="h-1.5 w-20 rounded-full bg-stone-500/25" />
          </div>
        ) : (
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#efb0a6]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#efd49a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#b9d8ba]" />
          </div>
        )}
        <div
          className={`relative overflow-hidden bg-[#f8f6f2] ${
            isMobile ? "aspect-[9/19.5] rounded-[1.4rem]" : "aspect-[16/9] rounded-[1rem]"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              isMobile
                ? "(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 85vw"
                : "(min-width: 1024px) 30vw, 100vw"
            }
            className="object-cover"
            style={{
              objectFit: image.fit ?? "cover",
              objectPosition: image.position ?? "center",
            }}
            unoptimized={
              image.src.endsWith(".gif") || image.src.endsWith(".svg")
            }
          />
        </div>
      </div>
      <figcaption className="text-sm leading-6 text-stone-600">
        {image.caption ?? image.alt}
      </figcaption>
    </figure>
  );
}

export function ProjectUiGallery({ project }: { project: Project }) {
  const mobileImages = project.uiGallery?.mobile ?? [];
  const desktopImages = project.uiGallery?.desktop ?? [];

  if (!mobileImages.length && !desktopImages.length) {
    return null;
  }

  return (
    <section
      id="ui-mockups"
      className="scroll-mt-28 rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(247,244,236,0.9),rgba(255,255,255,1))] p-6 lg:p-8"
    >
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
          Interface Mockups
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-950">
          App screens and polished device views for this case study.
        </h2>
        <p className="mt-4 text-base leading-8 text-stone-600">
          A focused set of product screens showing the core workflow surfaces
          behind this case study.
        </p>
      </div>

      <div className="mt-8 grid gap-10">
        {mobileImages.length ? (
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
              Mobile
            </h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {mobileImages.map((image) => (
                <MockupFrame
                  key={image.src}
                  device="mobile"
                  image={image}
                />
              ))}
            </div>
          </div>
        ) : null}

        {desktopImages.length ? (
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
              Desktop
            </h3>
            <div className="mt-4 grid gap-5 xl:grid-cols-3">
              {desktopImages.map((image) => (
                <MockupFrame
                  key={image.src}
                  device="desktop"
                  image={image}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
