import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://v2d.ceyinfo.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('mimithaprabodani@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).press('CapsLock');
  await page.getByRole('textbox', { name: '********' }).fill('M');
  await page.getByRole('textbox', { name: '********' }).press('CapsLock');
  await page.getByRole('textbox', { name: '********' }).fill('Mi@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div:nth-child(8) > .inline-flex').click();
  await page.getByRole('button', { name: 'Manage Property' }).first().click();
  await page.locator('div:nth-child(5) > .p-6 > .flex.flex-col > .flex.items-start').click();
  await page.getByRole('link', { name: 'Users', exact: true }).click();
  await page.getByRole('button', { name: '+ Add Users' }).click();
  await page.getByText('User Name *dehmidehemiJananilakmaliMalee').click();
//   await page.getByRole('option', { name: 'dehmi' }).press('CapsLock');
  await page.getByRole('option', { name: 'Malee' }).click();
  await page.getByText('Stock Keeper').click();
  await page.getByRole('button', { name: 'Save' }).click();
});