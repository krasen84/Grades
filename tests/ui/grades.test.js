const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto('https://krasen84-grades.onrender.com/My-Grades');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  