import { Page, Locator } from "@playwright/test";

export class MasalaBariHomePage {
  readonly page: Page;
  // Navigation bar
  readonly navShop: Locator;
  readonly navCategories: Locator;
  readonly navFeatured: Locator;
  readonly navOnSale: Locator;
  readonly navAccount: Locator;
  readonly navCart: Locator;
  readonly navSearchBox: Locator;
  readonly navSearchButton: Locator;

  // Hero section
  readonly heroHeadline: Locator;
  readonly heroShopSpices: Locator;
  readonly heroExploreBlends: Locator;

  // Feature highlights
  readonly featurePremiumQuality: Locator;
  readonly featureDirectSourcing: Locator;
  readonly featureFastDelivery: Locator;

  // Shop by Category
  readonly categoryWholeSpices: Locator;
  readonly categoryGroundSpices: Locator;
  readonly categorySpiceBlends: Locator;
  readonly categoryPremiumSpices: Locator;
  readonly categoryOrganicSpices: Locator;
  readonly categoryGiftSets: Locator;

  // Featured Spices section
  readonly featuredSpicesHeading: Locator;
  readonly viewAllProducts: Locator;

  constructor(page: Page) {
    this.page = page;
    // Navigation bar
    this.navShop = page.getByRole("link", { name: "Shop", exact: true });
    this.navCategories = page.getByRole("button", { name: "Categories" });
    this.navFeatured = page.getByRole("link", { name: "Featured" });
    this.navOnSale = page.getByRole("link", { name: "On Sale" });
    this.navAccount = page.getByRole("button", { name: "Account" });
    this.navCart = page.locator('a[href="/cart"]');
    this.navSearchBox = page.getByPlaceholder("Search spices...");
    this.navSearchButton = this.navSearchBox.locator("xpath=../button");

    // Hero section
    this.heroHeadline = page.getByRole("heading", {
      name: /Authentic Spices from Chittagong/i,
    });
    this.heroShopSpices = page.getByRole("link", { name: "Shop Spices" });
    this.heroExploreBlends = page.getByRole("link", { name: "Explore Blends" });

    // Feature highlights
    this.featurePremiumQuality = page.getByRole("heading", {
      name: "Premium Quality",
    });
    this.featureDirectSourcing = page.getByRole("heading", {
      name: "Direct Sourcing",
    });
    this.featureFastDelivery = page.getByRole("heading", {
      name: "Fast Delivery",
    });

    // Shop by Category
    this.categoryWholeSpices = page.getByRole("heading", {
      name: "Whole Spices",
    });
    this.categoryGroundSpices = page.getByRole("heading", {
      name: "Ground Spices",
    });
    this.categorySpiceBlends = page.getByRole("heading", {
      name: "Spice Blends",
    });
    this.categoryPremiumSpices = page.getByRole("heading", {
      name: "Premium Spices",
    });
    this.categoryOrganicSpices = page.getByRole("heading", {
      name: "Organic Spices",
    });
    this.categoryGiftSets = page.getByRole("heading", { name: "Gift Sets" });

    // Featured Spices section
    this.featuredSpicesHeading = page.getByRole("heading", {
      name: "Featured Spices",
    });
    this.viewAllProducts = page.getByRole("link", {
      name: "View All Products",
    });
  }
}
