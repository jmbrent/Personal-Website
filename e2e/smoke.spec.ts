import { expect, test } from "@playwright/test";

test("public work homepage renders", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Work" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Start a Project" })).toBeVisible();
  await expect(page.getByText("Project Management").first()).toBeVisible();
});

test("preview login route renders", async ({ page }) => {
  await page.goto("/preview-login");

  await expect(page.getByRole("heading", { name: "Enter password" })).toBeVisible();
  await expect(page.getByLabel("PASSWORD")).toBeVisible();
  await expect(page.getByRole("button", { name: "Unlock preview" })).toBeVisible();
});

test("protected routes redirect to preview login", async ({ page }) => {
  await page.goto("/creative-content");

  await expect(page).toHaveURL(/\/creative-content$/);
  await expect(page.getByRole("heading", { name: "Enter password" })).toBeVisible();
});

test("preview unlock works when PREVIEW_PASSWORD is set locally", async ({ page }) => {
  test.skip(
    !process.env.PREVIEW_PASSWORD,
    "Set PREVIEW_PASSWORD in the local shell to run the authenticated preview smoke test.",
  );

  await page.goto("/preview-login?redirectTo=/creative-content");
  await page.getByLabel("PASSWORD").fill(process.env.PREVIEW_PASSWORD!);
  await page.getByRole("button", { name: "Unlock preview" }).click();

  await expect(page).toHaveURL(/127\.0\.0\.1:\d+\/creative-content$/);
  await expect(page.getByRole("heading", { name: "Creative \\/ Content" })).toBeVisible();
});
