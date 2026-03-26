import type { Metadata } from "next";

import { getPreviewLoginPath, isPreviewProtectionEnabled } from "@/lib/preview-access";

export const metadata: Metadata = {
  title: "Preview Access",
  description: "Private access page for the in-progress site.",
};

type PreviewLoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function PreviewLoginPage({
  searchParams,
}: PreviewLoginPageProps) {
  const { error } = await searchParams;
  const isEnabled = isPreviewProtectionEnabled();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 items-center px-5 py-16 lg:px-8">
      <section className="w-full rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_24px_60px_rgba(53,42,31,0.08)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
          Private Preview
        </p>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl leading-tight text-stone-950 sm:text-5xl">
          Enter password
        </h1>
        <p className="mt-4 text-base leading-7 text-stone-600">
          This route is only for reviewing the in-progress site before public
          launch.
        </p>
        {!isEnabled ? (
          <p className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            `PREVIEW_PASSWORD` is not configured yet. Add it in Vercel project
            environment variables before using this page.
          </p>
        ) : null}
        {error ? (
          <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Incorrect password.
          </p>
        ) : null}
        <form action="/api/preview-access" method="post" className="mt-8 flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="rounded-2xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-stone-900"
              autoComplete="current-password"
              required
            />
          </label>
          <input type="hidden" name="redirectTo" value="/" />
          <button
            type="submit"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-400"
            disabled={!isEnabled}
          >
            Unlock preview
          </button>
        </form>
        <p className="mt-6 text-sm text-stone-500">
          Private route: {getPreviewLoginPath()}
        </p>
      </section>
    </main>
  );
}
