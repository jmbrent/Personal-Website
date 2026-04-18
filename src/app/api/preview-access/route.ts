import { NextRequest, NextResponse } from "next/server";

import {
  createPreviewAccessToken,
  getPreviewAccessCookieName,
  getPreviewLoginPath,
  isValidPreviewPassword,
} from "@/lib/preview-access";

function getRequestOrigin(request: NextRequest) {
  const protocol =
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(/:$/, "");
  const host =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.host;

  return `${protocol}://${host}`;
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirectTo") ?? "/");
  const requestOrigin = getRequestOrigin(request);
  const loginUrl = new URL(getPreviewLoginPath(), requestOrigin);

  if (!(await isValidPreviewPassword(password))) {
    loginUrl.searchParams.set("error", "1");
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(redirectTo, requestOrigin), {
    status: 303,
  });

  response.cookies.set({
    name: getPreviewAccessCookieName(),
    value: await createPreviewAccessToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: requestOrigin.startsWith("https://"),
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });

  return response;
}
