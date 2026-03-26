import { NextRequest, NextResponse } from "next/server";

import {
  createPreviewAccessToken,
  getPreviewAccessCookieName,
  getPreviewLoginPath,
  isValidPreviewPassword,
} from "@/lib/preview-access";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const redirectTo = String(formData.get("redirectTo") ?? "/");
  const loginUrl = new URL(getPreviewLoginPath(), request.url);

  if (!(await isValidPreviewPassword(password))) {
    loginUrl.searchParams.set("error", "1");
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(redirectTo, request.url), {
    status: 303,
  });

  response.cookies.set({
    name: getPreviewAccessCookieName(),
    value: await createPreviewAccessToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });

  return response;
}
