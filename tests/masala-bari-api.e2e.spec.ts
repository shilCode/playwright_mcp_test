import { test, expect, request } from "@playwright/test";

const BASE_URL = "https://masala-bari.vercel.app/api/products";

test.describe("Masala Bari API basic tests", () => {
  test("GET /api/products returns products and categories", async ({
    request,
  }) => {
    const res = await request.get(BASE_URL);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(Array.isArray(body.categories)).toBeTruthy();
    expect(body.pagination).toBeDefined();
    expect(body.filters).toBeDefined();
  });

  test("GET /api/products?featured=true returns only featured products", async ({
    request,
  }) => {
    const res = await request.get(`${BASE_URL}?featured=true`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(Array.isArray(body.products)).toBeTruthy();
    for (const product of body.products) {
      expect(product.isFeatured).toBe(true);
    }
  });

  test("GET /api/products?onSale=true returns only on sale products", async ({
    request,
  }) => {
    const res = await request.get(`${BASE_URL}?onSale=true`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(Array.isArray(body.products)).toBeTruthy();
    for (const product of body.products) {
      expect(product.isOnSale).toBe(true);
    }
  });

  test("GET /api/products?category=whole-spices returns only whole spices", async ({
    request,
  }) => {
    const res = await request.get(`${BASE_URL}?category=whole-spices`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(Array.isArray(body.products)).toBeTruthy();
    for (const product of body.products) {
      expect(product.categoryId).toBe("whole-spices");
    }
  });

  test("GET /api/products?search=masala returns products matching search", async ({
    request,
  }) => {
    const res = await request.get(`${BASE_URL}?search=masala`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(Array.isArray(body.products)).toBeTruthy();
    // Products may be empty if no match, but response should be valid
  });
});
