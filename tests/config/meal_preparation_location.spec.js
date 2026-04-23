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
  await page.getByRole('button', { name: 'F&B Operations' }).click();
  await page.getByRole('link', { name: 'Meal Preparation Location', exact: true }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('textbox', { name: 'Location Name *' }).click();
  await page.getByRole('textbox', { name: 'Location Name *' }).fill('test location 1');
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('test location 11');
  await page.getByRole('button', { name: 'Save Location' }).click();
await page.waitForTimeout(2000);
await page.getByRole('link', { name: 'Meal Preparation Location', exact: true }).click();
await expect(page.locator('table')).toContainText('test location 1');
});