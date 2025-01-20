import { expect } from "@playwright/test";
import { config } from "../Util/TN_Config";

export class Registe {
    constructor(page) {
        this.page = page;
    }

    async registerByEmail() {
        await this.page.goto(config.url);
        await this.page.getByRole('banner').getByRole('img', { name: 'TONIC' }).nth(1).click();
        await this.page.getByText('Sign up').click();
        const randomString = Math.random().toString(36).substring(2, 10);

        const password = "056839908Tai"
        const randomEmail = `testtonic${randomString}@gmail.com`;
        await this.page.getByPlaceholder('Email address', { exact: true }).fill(randomEmail);
        await this.page.getByRole('button', { name: 'Continue', exact: true }).click();
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: 'Continue', exact: true }).click();
        await expect(this.page.getByText('Register Success!')).toBeVisible({ timeout: 10000 });
    }
    
   
}