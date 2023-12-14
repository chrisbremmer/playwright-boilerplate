import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Tests', () => {
    test('should log in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        // ...rest of the test
    });
});
