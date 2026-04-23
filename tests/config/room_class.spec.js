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
  await page.getByRole('link', { name: 'Room Class' }).click();
  await page.getByRole('button', { name: 'Add Room Class' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select a Room Type' }).click();
  await page.getByRole('option', { name: 'Triple' }).click();
  await page.getByText('Room Category *Select a Room').click();
  await page.getByRole('option', { name: 'Premium' }).click();
  await page.getByText('Room Category *PremiumStandardDeluxeSuperiorExecutiveLuxuryPremium').click();
  await page.getByRole('option', { name: 'Luxury' }).click();
  await page.getByText('Room Type *TripleSingleDoubleTwinSuiteFamily(Quadruple)DormitoryTripleRoom').click();
  await page.getByRole('button', { name: 'Select' }).nth(1).click();
  await page.getByText('Room Type *TripleSingleDoubleTwinSuiteFamily(Quadruple)DormitoryTripleRoom').click();
  await page.getByRole('button', { name: 'Select' }).first().click();
  await page.getByText('Room Type *TripleSingleDoubleTwinSuiteFamily(Quadruple)DormitoryTripleRoom').click();
  await page.getByRole('button', { name: 'Select' }).nth(2).click();
  await page.getByText('Room Type *TripleSingleDoubleTwinSuiteFamily(Quadruple)DormitoryTripleRoom').click();
  await page.getByRole('button', { name: 'Select' }).nth(5).click();
  await page.getByText('Room Type *TripleSingleDoubleTwinSuiteFamily(Quadruple)DormitoryTripleRoom').click();
  await page.getByRole('button', { name: 'Select' }).nth(4).click();
  await page.getByRole('combobox').filter({ hasText: 'Triple' }).click();
  await page.getByRole('option', { name: 'Dormitory' }).click();
  await page.getByText('Room Type *DormitorySingleDoubleTwinSuiteFamily(Quadruple)DormitoryTripleRoom').click();
  await page.locator('.fixed.inset-0.flex.items-center.justify-center.bg-slate-50').click();
  await page.getByRole('button', { name: '×' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Adult Count *' }).click();
  await page.getByRole('textbox', { name: 'Adult Count *' }).fill('4');
  await page.getByRole('textbox', { name: 'Child Count *' }).click();
  await page.getByRole('textbox', { name: 'Child Count *' }).fill('5');
await page.getByText('Mini Fridge').click();
await page.getByText('Iron & Ironing Board').click();

await page.waitForTimeout(2000);

const submit = page.getByRole('button', { name: 'Submit Room Class' });
await submit.click({ force: true });
});