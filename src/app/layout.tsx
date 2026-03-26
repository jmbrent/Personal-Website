import type { Metadata } from "next";
import { cookies } from "next/headers";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getPreviewAccessCookieName,
  hasValidPreviewAccess,
  isPreviewProtectionEnabled,
} from "@/lib/preview-access";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jonathanbrent.com"),
  title: {
    default: "Jonathan Brent | Portfolio Resume Archive",
    template: "%s | Jonathan Brent",
  },
  description:
    "A structured portfolio and click-through resume focused on project management, implementation, product systems, and startup execution.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const previewToken = cookieStore.get(getPreviewAccessCookieName())?.value;
  const hideChrome =
    isPreviewProtectionEnabled() && !(await hasValidPreviewAccess(previewToken));

  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-page)] text-[var(--color-ink)] antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-white" />
          {hideChrome ? null : <SiteHeader />}
          {children}
          {hideChrome ? null : <SiteFooter />}
        </div>
      </body>
    </html>
  );
}
