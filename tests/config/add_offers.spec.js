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
  await page.getByRole('link', { name: 'Offers' }).click();
  await page.getByRole('button', { name: 'Add Offer' }).click();
  await page.getByRole('textbox', { name: 'Offer Name *' }).click();
  await page.getByRole('textbox', { name: 'Offer Name *' }).fill('test offer 1');
  await page.getByRole('textbox', { name: 'Discount Percentage *' }).click();
  await page.getByRole('textbox', { name: 'Discount Percentage *' }).fill('15');
  await page.getByRole('textbox', { name: 'Start Date *' }).fill('2026-04-01');
  await page.getByRole('textbox', { name: 'End Date *' }).fill('2026-05-31');
  await page.getByRole('textbox', { name: 'Promotion Code *' }).click();
  await page.getByRole('textbox', { name: 'Promotion Code *' }).fill('TEST');
  await page.getByRole('button', { name: 'Submit Offer' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).click();
  await page.getByRole('textbox', { name: 'Description *' }).fill('test 1');
  await page.getByRole('button', { name: 'Submit Offer' }).click();
});