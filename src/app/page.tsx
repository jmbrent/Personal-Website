import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-1 items-center px-5 pb-24 pt-8 lg:px-8 lg:pt-10">
      <section className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[13.5rem_minmax(0,38rem)] lg:gap-12">
        <div className="flex justify-center">
          <div className="relative h-[10.5rem] w-[10.5rem] overflow-hidden rounded-full border border-black/10 bg-[linear-gradient(180deg,rgba(247,244,236,0.9),rgba(255,255,255,1))] p-2.5 shadow-[0_28px_80px_rgba(24,20,12,0.08)] sm:h-[12rem] sm:w-[12rem] lg:h-[13.5rem] lg:w-[13.5rem]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#ece7df]">
              <Image
                src="/headshots/jonathan-brent-linkedin.jpg"
                alt="Jonathan Brent"
                fill
                priority
                sizes="(min-width: 1024px) 13.5rem, (min-width: 640px) 12rem, 10.5rem"
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[0.95] tracking-[-0.06em] text-stone-950 sm:text-5xl lg:text-[4.35rem]">
            Get creative help for your complex ideas.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
            I help founders, artists, and studios shape bold, early-stage ideas
            into clear, compelling pitch material—through design, video, and
            comedy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="site-button site-button--primary">
              Get in touch
            </Link>
            <Link href="/work" className="site-button site-button--secondary">
              See My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
