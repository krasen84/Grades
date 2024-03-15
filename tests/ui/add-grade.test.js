const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('https://krasen84-grades.onrender.com/Add-grade');
    const form = await page.$('h1');
    expect(form).toBeTruthy();
  });
  