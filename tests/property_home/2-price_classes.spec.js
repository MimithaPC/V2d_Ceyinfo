import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    test.setTimeout(120000);

    // Development

    await page.goto('https://v3.ceyinfo.com/', { waitUntil: 'networkidle' });
    await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).click();
    await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(2000);   
    await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    await page.getByRole('link', { name: 'Price Classes' }).click();
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    await page.getByRole('button', { name: 'Add price class' }).click();
    await page.getByLabel('Category').selectOption({ label: 'Standard' });
    await page.getByLabel('Room type').selectOption({ label: 'Single' });
    await page.getByRole('button', { name: 'Add bed configuration' }).click();
    await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B1F0C9Q0HQBMCM8NK9');
    await page.getByRole('spinbutton').nth(5).click();
    await page.getByRole('spinbutton').nth(5).fill('2'); 
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add price class' }).click();
 await page.getByLabel('Category').selectOption({ label: 'Standard' });
    await page.getByLabel('Room type').selectOption({ label: 'Double' });
    await page.getByRole('button', { name: 'Add bed configuration' }).click();
    await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B3M9V88J3X589N2JKK');
    await page.getByRole('spinbutton').nth(5).click();
    await page.getByRole('spinbutton').nth(5).fill('2'); 
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add price class' }).click();
    await page.getByLabel('Category').selectOption({ label: 'Deluxe' });
    await page.getByLabel('Room type').selectOption({ label: 'Single' });
    await page.getByRole('button', { name: 'Add bed configuration' }).click();
    await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B1F0C9Q0HQBMCM8NK9');
    await page.getByRole('spinbutton').nth(5).click();
    await page.getByRole('spinbutton').nth(5).fill('2'); 
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Add price class' }).click();
   await page.getByLabel('Category').selectOption({ label: 'Deluxe' });
    await page.getByLabel('Room type').selectOption({ label: 'Double' }); 
    await page.getByRole('button', { name: 'Add bed configuration' }).click();
    await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B3M9V88J3X589N2JKK');
    await page.getByRole('spinbutton').nth(5).click();
    await page.getByRole('spinbutton').nth(5).fill('2');
    await page.getByRole('button', { name: 'Create' }).click();
    await page.waitForTimeout(2000);

    
    
    
    
    
    
    
    
    // //  Production

    // await page.goto('https://hotel-erp.ceyinfo.com/', { waitUntil: 'networkidle' });
    // await page.getByRole('navigation').getByRole('link', { name: 'Sign in' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).click();
    // await page.getByRole('textbox', { name: 'Work email' }).fill('mimithaprabodani@gmail.com');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
    // await page.getByRole('button', { name: 'Sign in' }).click();
    // await page.waitForTimeout(2000);   
    // await page.getByRole('button', { name: 'Rooms & Rates ▼' }).click();
    // await page.getByRole('link', { name: 'Price Classes' }).click();
    // await page.getByRole('button', { name: 'Collapse sidebar' }).click();

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-cat').selectOption('01KZATHEKKG5SMDJ7F02YYNFG2');
    // await page.locator('#pc-type').selectOption('01KZATJ1HHJT16B36VJHMM657Y');  
    // await page.getByRole('button', { name: 'Add bed configuration' }).click();
    // await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B1F0C9Q0HQBMCM8NK9');
    // await page.getByRole('spinbutton').nth(5).click();
    // await page.getByRole('spinbutton').nth(5).fill('2'); 
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-cat').selectOption('01KZATHEKKG5SMDJ7F02YYNFG2');
    // await page.locator('#pc-type').selectOption('01KZATJA6C2YYFX9QV0YVYZT88');  
    // await page.getByRole('button', { name: 'Add bed configuration' }).click();
    // await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B3M9V88J3X589N2JKK');
    // await page.getByRole('spinbutton').nth(5).click();
    // await page.getByRole('spinbutton').nth(5).fill('2'); 
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-cat').selectOption('01KZATHR69C43B9SX3ZZDED6KW');
    // await page.locator('#pc-type').selectOption('01KZATJ1HHJT16B36VJHMM657Y');   
    // await page.getByRole('button', { name: 'Add bed configuration' }).click();
    // await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B1F0C9Q0HQBMCM8NK9');
    // await page.getByRole('spinbutton').nth(5).click();
    // await page.getByRole('spinbutton').nth(5).fill('2'); 
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(1000);

    // await page.getByRole('button', { name: 'Add price class' }).click();
    // await page.locator('#pc-cat').selectOption('01KZATHR69C43B9SX3ZZDED6KW');
    // await page.locator('#pc-type').selectOption('01KZATJA6C2YYFX9QV0YVYZT88');   
    // await page.getByRole('button', { name: 'Add bed configuration' }).click();
    // await page.getByRole('combobox').nth(2).selectOption('01KWSJJ3B3M9V88J3X589N2JKK');
    // await page.getByRole('spinbutton').nth(5).click();
    // await page.getByRole('spinbutton').nth(5).fill('2');
    // await page.getByRole('button', { name: 'Create' }).click();
    // await page.waitForTimeout(2000);

});