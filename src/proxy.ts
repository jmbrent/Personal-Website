import { NextRequest, NextResponse } from "next/server";

import {
  getPreviewAccessCookieName,
  getPreviewLoginPath,
  hasValidPreviewAccess,
  isPreviewProtectionEnabled,
} from "@/lib/preview-access";

const HOLD_PAGE_PATH = "/under-construction";

const loginPath = getPreviewLoginPath();

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(getPreviewAccessCookieName())?.value;

  if (
    pathname === HOLD_PAGE_PATH ||
    pathname === loginPath ||
    pathname.startsWith("/api/preview-access")
  ) {
    return NextResponse.next();
  }

  if (isPreviewProtectionEnabled() && (await hasValidPreviewAccess(token))) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = isPreviewProtectionEnabled() ? HOLD_PAGE_PATH : HOLD_PAGE_PATH;

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
