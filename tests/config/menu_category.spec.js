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
  await page.getByRole('link', { name: 'Menu Category' }).click();
  await page.getByRole('button', { name: 'Add Main Category' }).click();
  await page.getByRole('textbox', { name: 'Enter category name' }).click();
  await page.getByRole('textbox', { name: 'Enter category name' }).fill('test category 1');
  await page.getByRole('combobox', { name: 'Category Type *' }).click();
  await page.getByRole('option', { name: 'Food' }).click();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('test category and type');
  await page.getByRole('button', { name: 'Save' }).click();
});