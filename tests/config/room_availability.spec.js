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
  await page.getByRole('link', { name: 'Room Availability' }).click();
  await page.getByRole('button', { name: 'Add New' }).click();
  await page.getByRole('button', { name: 'Start Date*' }).click();
  await page.getByRole('button', { name: 'Go to next month' }).click();
  await page.getByRole('button', { name: 'Go to next month' }).click();
  await page.getByRole('gridcell', { name: '12' }).click();
  await page.getByRole('button', { name: 'End Date *' }).click();
  await page.getByRole('button', { name: 'Go to next month' }).click();
  await page.getByRole('button', { name: 'Go to next month' }).click();
  await page.getByRole('gridcell', { name: '13' }).click();
  await page.getByRole('combobox', { name: 'Select Rooms *' }).click();
  await page.getByRole('option', { name: 'Room No 101' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).click();
  await page.getByRole('textbox', { name: 'Remarks' }).fill('for maintenance');
  await page.getByRole('button', { name: 'Add Availability' }).click();

await page.waitForLoadState('networkidle');

await expect(page.locator('table')).toContainText('101');
});