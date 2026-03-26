import { NextRequest, NextResponse } from "next/server";

const HOLD_PAGE_PATH = "/under-construction";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === HOLD_PAGE_PATH) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = HOLD_PAGE_PATH;

  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
