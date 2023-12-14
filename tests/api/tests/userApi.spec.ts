import { test, expect } from '@playwright/test';
import UserRequests from '../requests/userRequests';

test.describe('User API Tests', () => {
    let userRequests: UserRequests;

    test.beforeAll(async ({ request }) => {
        userRequests = new UserRequests(request);
    });

    test('Create user should return 201', async () => {
        const userData = { name: 'Jane Doe', email: 'jane@example.com' };
        const response = await userRequests.createUser(userData);
        expect(response.id).toBeDefined();
    });
});
