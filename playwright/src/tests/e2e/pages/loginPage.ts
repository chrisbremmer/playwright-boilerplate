import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.goto('/login');
    }

    // Methods to interact with login page elements
}
