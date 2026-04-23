import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v2d.ceyinfo.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('amnaf3479@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('789456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).nth(1).click();
  await page.getByRole('button', { name: 'Manage Property' }).first().click();
  await page.getByRole('heading', { name: 'Configuration' }).click();
  await page.getByRole('link', { name: 'Beds' }).click();
  await page.getByRole('button', { name: 'Add Bed' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('for test');
  await page.getByRole('spinbutton', { name: 'Width *' }).click();
  await page.getByRole('spinbutton', { name: 'Width *' }).fill('90');
  await page.getByRole('spinbutton', { name: 'Length *' }).click();
  await page.getByRole('spinbutton', { name: 'Length *' }).fill('190');
  await page.getByRole('spinbutton', { name: 'Number of guests *' }).click();
  await page.getByRole('spinbutton', { name: 'Number of guests *' }).fill('4');
  await page.getByRole('button', { name: 'Submit' }).click();

await page.waitForLoadState('networkidle');

await expect(
  page.getByRole('row', { name: /for test/i })
).toBeVisible();
});