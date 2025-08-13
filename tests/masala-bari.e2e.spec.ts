import { test, expect } from "@playwright/test";
import { MasalaBariHomePage } from "./masalaBariHomePage";

test.describe("Masala Bari Home Page E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://masala-bari.vercel.app/");
  });

  test("Navigation bar links and search", async ({ page }) => {
    const home = new MasalaBariHomePage(page);
    await expect(home.navShop).toBeVisible();
    await expect(home.navCategories).toBeVisible();
    await expect(home.navFeatured).toBeVisible();
    await expect(home.navOnSale).toBeVisible();
    await expect(home.navAccount).toBeVisible();
    await expect(home.navCart).toBeVisible();
    await expect(home.navSearchBox).toBeVisible();
    await home.navSearchBox.fill("turmeric");
    await home.navSearchButton.click();
  });

  test("Hero section CTAs", async ({ page }) => {
    const home = new MasalaBariHomePage(page);
    await expect(home.heroHeadline).toBeVisible();
    await expect(home.heroShopSpices).toBeVisible();
    await expect(home.heroExploreBlends).toBeVisible();
  });

  test("Feature highlights are visible", async ({ page }) => {
    const home = new MasalaBariHomePage(page);
    await expect(home.featurePremiumQuality).toBeVisible();
    await expect(home.featureDirectSourcing).toBeVisible();
    await expect(home.featureFastDelivery).toBeVisible();
  });

  test("Shop by Category cards", async ({ page }) => {
    const home = new MasalaBariHomePage(page);
    await expect(home.categoryWholeSpices).toBeVisible();
    await expect(home.categoryGroundSpices).toBeVisible();
    await expect(home.categorySpiceBlends).toBeVisible();
    await expect(home.categoryPremiumSpices).toBeVisible();
    await expect(home.categoryOrganicSpices).toBeVisible();
    await expect(home.categoryGiftSets).toBeVisible();
  });

  test("Featured Spices section", async ({ page }) => {
    const home = new MasalaBariHomePage(page);
    await expect(home.featuredSpicesHeading).toBeVisible();
    await expect(home.viewAllProducts).toBeVisible();
  });
});
