const ACCESS_COOKIE_NAME = "jb_preview_access";
const ACCESS_PAYLOAD = "preview-access";
const LOGIN_PATH = "/preview-login";

function getPassword() {
  return process.env.PREVIEW_PASSWORD ?? "";
}

function encoder() {
  return new TextEncoder();
}

function toHex(buffer: ArrayBuffer) {
  return [...new Uint8Array(buffer)]
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

async function signValue(value: string) {
  const password = getPassword();

  if (!password) {
    return "";
  }

  const key = await crypto.subtle.importKey(
    "raw",
    encoder().encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder().encode(value),
  );

  return toHex(signature);
}

export function isPreviewProtectionEnabled() {
  return Boolean(getPassword());
}

export function getPreviewAccessCookieName() {
  return ACCESS_COOKIE_NAME;
}

export function getPreviewLoginPath() {
  return LOGIN_PATH;
}

export async function createPreviewAccessToken() {
  return signValue(ACCESS_PAYLOAD);
}

export async function isValidPreviewPassword(password: string) {
  return password === getPassword() && Boolean(password);
}

export async function hasValidPreviewAccess(token?: string) {
  if (!isPreviewProtectionEnabled()) {
    return true;
  }

  if (!token) {
    return false;
  }

  const expected = await createPreviewAccessToken();
  return token === expected;
}
