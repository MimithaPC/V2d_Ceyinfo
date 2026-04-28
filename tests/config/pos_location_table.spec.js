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
  await page.getByRole('link', { name: 'POS Location Table' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select POS Location' }).click();
  await page.getByText('Cafe POS').click();
  await page.getByRole('button', { name: 'Add Table' }).click();
  await page.getByRole('textbox', { name: 'Table Number' }).click();
  await page.getByRole('textbox', { name: 'Table Number' }).fill('24');
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});