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
  await page.getByRole('button', { name: 'Add Unit', exact: true }).click();
  await page.getByRole('textbox', { name: 'e.g., 301,' }).click();
  await page.getByRole('textbox', { name: 'e.g., 301,' }).fill('203');
  await page.getByRole('combobox').filter({ hasText: 'Select room class' }).click();
  await page.getByText('Family(Quadruple) Deluxe').click();
  await page.getByRole('combobox').filter({ hasText: 'Select room view' }).click();
  await page.getByRole('option', { name: 'Sea View' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Secondary Classes' }).click();
  await page.getByRole('option', { name: 'Twin Standard' }).click();
  await page.getByPlaceholder('e.g., 35.5').click();
  await page.getByPlaceholder('e.g., 35.5').fill('12.5');
  await page.getByRole('button', { name: 'Save' }).click();
});