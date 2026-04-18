export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-12 lg:px-8 lg:py-16">
      <div className="h-10 w-28 rounded-full bg-stone-100" />

      <section className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8">
        <div className="h-4 w-32 rounded-full bg-stone-100" />
        <div className="mt-6 h-12 max-w-3xl rounded-[1rem] bg-stone-100" />
        <div className="mt-4 h-8 max-w-2xl rounded-[1rem] bg-stone-100" />
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-16 rounded-[1rem] bg-stone-100" />
          ))}
        </div>
        <div className="mt-8 aspect-[16/8] rounded-[1.5rem] bg-stone-100" />
      </section>

      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-[1.5rem] border border-black/10 bg-white p-5">
          <div className="h-4 w-24 rounded-full bg-stone-100" />
          <div className="mt-4 grid gap-3">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="h-11 rounded-[1rem] bg-stone-100" />
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <section
              key={index}
              className="rounded-[1.5rem] border border-black/10 bg-white p-6"
            >
              <div className="h-4 w-24 rounded-full bg-stone-100" />
              <div className="mt-5 h-7 w-48 rounded-[1rem] bg-stone-100" />
              <div className="mt-4 h-24 rounded-[1rem] bg-stone-100" />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
