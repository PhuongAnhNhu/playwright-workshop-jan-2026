import { test, expect } from '@playwright/test';

test.only('Ausfüllen Student Registration Form', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    await expect(page).toHaveTitle('DEMOQA');

    await page.pause();

    await page.getByRole('textbox', { name: 'First Name' }).fill('Phuong Anh');
    await page.getByPlaceholder('Last Name').fill('Nhu');

    await page.getByRole('textbox', { name: 'name@example.com' }).fill('phuonganh.nhu@iso-gruppe.com')
    await page.locator('#dateOfBirthInput').fill('26.01.1996')
    await page.keyboard.press('Enter');


    await page.getByText('Sports').click();
    await page.getByText('Select State').click({ force: true });
    await page.getByText('Haryana').click();

});