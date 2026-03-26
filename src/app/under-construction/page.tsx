import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Construction",
  description:
    "Jonathan Brent's portfolio is temporarily locked while the new site is being prepared.",
};

export default function UnderConstructionPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 items-center px-5 py-16 lg:px-8">
      <section className="w-full rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_24px_60px_rgba(53,42,31,0.08)] sm:p-10">
        <div className="max-w-3xl text-lg leading-9 text-stone-800">
          <p>Site Under Construction</p>
          <br />
          <p>@jombrent</p>
          <p>
            <a href="mailto:jonbrentcreative@gmail.com">
              jonbrentcreative@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/jonathanmbrent/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/jonathanmbrent/
            </a>
          </p>
          <p>
            <a
              href="https://www.imdb.com/name/nm6025350/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.imdb.com/name/nm6025350/
            </a>
          </p>
          <p>
            Jonathan Brent •{" "}
            <a href="mailto:jonbrentcreative@gmail.com">
              jonbrentcreative@gmail.com
            </a>{" "}
            •
          </p>
          <br />
          <br />
          <p>— Jonathan</p>
        </div>
      </section>
    </main>
  );
}
