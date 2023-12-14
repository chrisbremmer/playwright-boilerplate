import { expect, APIRequestContext } from '@playwright/test';

class UserRequests {
    constructor(private apiContext: APIRequestContext) {}

    async createUser(userData: { name: string; email: string }) {
        const response = await this.apiContext.post('/users', {
            data: userData,
        });
        expect(response.ok()).toBeTruthy();
        return response.json();
    }
}

export default UserRequests;
