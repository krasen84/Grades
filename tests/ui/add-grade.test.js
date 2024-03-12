const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('http://localhost:8080/add-grade');
    const form = await page.$('h1');
    expect(form).toBeTruthy();
  });
  