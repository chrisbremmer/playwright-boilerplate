import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Login Tests', () => {
    test('should log in successfully', async ({ page }) => {
        const loginPage = new HomePage(page);
        await loginPage.goTo();
        // ...rest of the test
    });
});
