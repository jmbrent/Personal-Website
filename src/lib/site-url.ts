const FALLBACK_SITE_URL = "https://jonathanbrent.ca";

export function getSiteUrl() {
  const configuredSiteUrl = process.env.SITE_URL?.trim();

  if (!configuredSiteUrl) {
    return new URL(FALLBACK_SITE_URL);
  }

  try {
    return new URL(configuredSiteUrl);
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
}
