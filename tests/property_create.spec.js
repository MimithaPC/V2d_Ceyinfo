import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v2d.ceyinfo.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div:nth-child(7) > .inline-flex').click();
  await page.getByRole('link', { name: 'Properties' }).click();
  await page.getByRole('button', { name: '+ Add Property' }).click();
  await page.getByRole('textbox', { name: 'Property Name *' }).fill('abc');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('mimithaprabodani@gmail.com');
  await page.getByRole('textbox', { name: 'Mobile *' }).click();
  await page.getByRole('textbox', { name: 'Mobile *' }).fill('0764912257');
  await page.getByRole('button', { name: 'Save' }).click();
});