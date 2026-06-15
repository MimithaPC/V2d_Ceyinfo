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
  await page.getByRole('link', { name: 'Meal Preparation Location &' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select Kitchen Location' }).click();
  await page.getByRole('option', { name: 'test location' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select Type' }).click();
  await page.getByRole('option', { name: 'Food' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select Main Category' }).click();
  await page.getByRole('option', { name: 'Chicken' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select Sub Category' }).click();
  await page.getByRole('option', { name: 'Chicken curry' }).click();
  await page.getByRole('button', { name: 'Chicken Dishes' }).click();
  await page.getByRole('button', { name: 'Save Menu Items' }).click();
});