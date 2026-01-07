import { expect } from '@playwright/test';
export class FormPom {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        // Navigation
        this.url = 'https://demoqa.com/automation-practice-form';

        // Form fields
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByPlaceholder('Last Name');
        this.email = page.getByRole('textbox', { name: 'name@example.com' });
        this.genderFemale = page.getByText('Female');
        this.mobile = page.getByRole('textbox', { name: 'Mobile Number' });
        this.subjects = page.locator('#subjectsInput');

        // Other controls
        this.sports = page.getByText('Sports');
        this.stateSelect = page.getByText('Select State');
        this.submit = page.getByRole('button', { name: 'Submit' });

        // Result table
        this.resultRows = page.locator('tbody > tr');
    }

    async open() {
        await this.page.goto(this.url);
    }
    async expectResultRow(index, expectedText) {
        await expect(this.resultRows.nth(index)).toHaveText(expectedText);
    }
}

