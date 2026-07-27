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
  await page.getByRole('link', { name: 'Building/Rooms' }).click();
  await page.getByText('test building 41 floors').click();
  await page.getByText('floor 1Orientation: NORTHLevel: 1Rooms:').click();
  await page.getByRole('button', { name: 'Add Block' }).click();
  await page.locator('.lucide.lucide-plus > path:nth-child(2)').first().click();
});