import Image from "next/image";

import { Project, ProjectImage } from "@/types/projects";

const MOBILE_SLOT_COUNT = 3;
const DESKTOP_SLOT_COUNT = 3;

function createSlots(images: ProjectImage[] | undefined, count: number) {
  return Array.from({ length: count }, (_, index) => images?.[index] ?? null);
}

function MockupPlaceholder({
  device,
  index,
}: {
  device: "mobile" | "desktop";
  index: number;
}) {
  const label = `${device === "mobile" ? "Mobile" : "Desktop"} mockup ${String(index + 1).padStart(2, "0")}`;

  return (
    <div className="flex h-full flex-col items-center justify-center border border-dashed border-stone-300 bg-[linear-gradient(180deg,rgba(250,250,249,0.94),rgba(245,245,244,0.8))] px-5 text-center text-stone-500">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
        {device}
      </p>
      <p className="mt-3 max-w-[14rem] text-sm leading-6">{label}</p>
      <p className="mt-2 max-w-[14rem] text-xs leading-5 text-stone-400">
        Replace this slot with a polished UI mockup or screenshot.
      </p>
    </div>
  );
}

function MockupFrame({
  device,
  image,
  index,
}: {
  device: "mobile" | "desktop";
  image: ProjectImage | null;
  index: number;
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
          className={`relative overflow-hidden bg-white ${
            isMobile ? "aspect-[9/19.5] rounded-[1.4rem]" : "aspect-[16/10] rounded-[1rem]"
          }`}
        >
          {image ? (
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
          ) : (
            <MockupPlaceholder device={device} index={index} />
          )}
        </div>
      </div>
      <figcaption className="text-sm leading-6 text-stone-600">
        {image?.caption ??
          image?.alt ??
          `${isMobile ? "Mobile" : "Desktop"} mockup ${index + 1}`}
      </figcaption>
    </figure>
  );
}

export function ProjectUiGallery({ project }: { project: Project }) {
  const mobileSlots = createSlots(project.uiGallery?.mobile, MOBILE_SLOT_COUNT);
  const desktopSlots = createSlots(
    project.uiGallery?.desktop,
    DESKTOP_SLOT_COUNT,
  );

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
          Each product entry now has dedicated slots for three mobile mockups
          and three desktop mockups, so you can build out a more standard
          UX/UI portfolio presentation as final screens become available.
        </p>
      </div>

      <div className="mt-8 grid gap-10">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
              Mobile
            </h3>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
              3 slots
            </p>
          </div>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {mobileSlots.map((image, index) => (
              <MockupFrame
                key={`mobile-${index}`}
                device="mobile"
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-stone-950">
              Desktop
            </h3>
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
              3 slots
            </p>
          </div>
          <div className="mt-4 grid gap-5 xl:grid-cols-3">
            {desktopSlots.map((image, index) => (
              <MockupFrame
                key={`desktop-${index}`}
                device="desktop"
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
