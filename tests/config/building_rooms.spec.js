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
  await page.getByText('test building 20 floors').click();
  await page.getByRole('button', { name: 'New Floor' }).click();
  await page.getByRole('textbox', { name: 'e.g. Ground Floor' }).click();
  await page.getByRole('textbox', { name: 'e.g. Ground Floor' }).fill('floor 2');
  await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').click();
  await page.getByPlaceholder('e.g. 0 for Ground, 1, 2,').fill('1');
 await page.waitForTimeout(2000);

  const submit = page.getByRole('button', { name: 'Create' });
  await submit.waitFor({ state: 'visible' });
  await submit.click({ force: true });

  await page.getByText('floor 1Orientation: NORTHLevel: 1Rooms:').click();
});