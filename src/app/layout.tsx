import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--color-page)] text-[var(--color-ink)] antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,188,149,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(125,146,135,0.12),transparent_28%),linear-gradient(180deg,#f8f6f1_0%,#f5f1ea_42%,#f8f6f1_100%)]" />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
