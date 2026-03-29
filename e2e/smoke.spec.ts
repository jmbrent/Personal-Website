import { expect, test } from "@playwright/test";

test("public site is locked on the under-construction page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Site Under Construction")).toBeVisible();
  await expect(page.getByText("@jombrent")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "jonbrentcreative@gmail.com" }).first(),
  ).toBeVisible();
});

test("preview login route renders", async ({ page }) => {
  await page.goto("/preview-login");

  await expect(page.getByRole("heading", { name: "Enter password" })).toBeVisible();
  await expect(page.getByLabel("PASSWORD")).toBeVisible();
  await expect(page.getByRole("button", { name: "Unlock preview" })).toBeVisible();
});

test("preview unlock works when PREVIEW_PASSWORD is set locally", async ({ page }) => {
  test.skip(
    !process.env.PREVIEW_PASSWORD,
    "Set PREVIEW_PASSWORD in the local shell to run the authenticated preview smoke test.",
  );

  await page.goto("/preview-login");
  await page.getByLabel("PASSWORD").fill(process.env.PREVIEW_PASSWORD!);
  await page.getByRole("button", { name: "Unlock preview" }).click();

  await expect(page).toHaveURL(/127\.0\.0\.1:\d+\/$/);
  await expect(page.getByRole("link", { name: "Project Management" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Project Management" })).toBeVisible();
});
