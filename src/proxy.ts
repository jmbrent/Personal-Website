import { NextRequest, NextResponse } from "next/server";

import {
  getPreviewAccessCookieName,
  getPreviewLoginPath,
  hasValidPreviewAccess,
  isPreviewProtectionEnabled,
} from "@/lib/preview-access";

const loginPath = getPreviewLoginPath();
const protectedPaths = new Set(["/creative-content", "/product-ux", "/resume"]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(getPreviewAccessCookieName())?.value;

  if (
    pathname === loginPath ||
    pathname.startsWith("/api/preview-access")
  ) {
    return NextResponse.next();
  }

  if (!protectedPaths.has(pathname)) {
    return NextResponse.next();
  }

  if (!isPreviewProtectionEnabled()) {
    return NextResponse.next();
  }

  if (await hasValidPreviewAccess(token)) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = loginPath;
  rewriteUrl.searchParams.set("redirectTo", pathname);

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
