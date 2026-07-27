import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v2d.ceyinfo.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('amnaf3479@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('789');
  await page.locator('[id=":rd:-form-item"]').getByRole('button').click();
  await page.locator('[id=":rd:-form-item"]').getByRole('button').click();
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('789456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).nth(1).click();
  await page.getByRole('button', { name: 'Manage Property' }).first().click();
  await page.getByRole('heading', { name: 'Configuration' }).click();
  await page.getByRole('button', { name: 'F&B Operations' }).click();
  await page.getByRole('button', { name: 'Extra' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('textbox', { name: 'Enter Max Child Age' }).click();
  await page.getByRole('textbox', { name: 'Enter Max Child Age' }).fill('15');
  await page.getByRole('button', { name: 'Update' }).first().click();
});