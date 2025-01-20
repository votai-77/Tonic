import { expect } from "@playwright/test";
import { config } from "../Util/TN_Config";

export class Login {
  constructor(page) {
    this.page = page;
  }
  async loginAccountByEmail() {
    await this.page.goto(config.url);
    await this.page.getByRole("banner").getByRole("img", { name: "TONIC" }).nth(1).click();
    await this.page.getByPlaceholder("Email address", { exact: true }).fill(config.email);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();
    await this.page.getByPlaceholder("Password").fill(config.password);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();
  }
  async loginFirst() {
    await this.page.goto(config.url);
    await this.page.getByRole("banner").getByRole("img", { name: "TONIC" }).nth(1).click();
    await this.page.getByPlaceholder("Email address", { exact: true }).fill(config.emailtest);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();
    await this.page.getByPlaceholder("Password").fill(config.passwordtest);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();
    await this.verify();
  }

  async loginByGoogle() {
    await this.page.goto('https://tonic.tongram.app/en');
    await this.page.getByRole('banner').getByRole('img', { name: 'TONIC' }).nth(1).click();
    const page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('button', { name: 'google Continue With Google' }).click();
    const page1 = await page1Promise;
    await this.page1.locator('//*[@id="identifierId"]').fill('toniclogin01@gmail.com');
    await this.page1.getByRole('button', { name: 'Next' }).click();
    await this.page1.locator('//*[@id="password"]/div[1]/div/div[1]/input').fill('056839908Tai');
    await this.page1.getByRole('button', { name: 'Next' }).click();
    await expect(this.page.getByText('Login success!')).toBeVisible({ timeout: 10000 });
  }

  async verify() {
    // Step 1 
    await this.page.locator('//*[@id="app"]/main/section[2]/div/div/div[1]/div/div[1]/input').fill("testphonegalaxy02@gmail.com");
    await this.page.getByRole("button", { name: "Country/Region" }).click();
    await this.page.getByText("Vietnam").click();
    await this.page.getByPlaceholder("Full Name").fill("tonic");
    await this.page.getByPlaceholder("Address", { exact: true }).click();
    await this.page.getByPlaceholder("Address", { exact: true }).fill("36 Nguyen Kinh");
    await this.page.getByPlaceholder("City").fill("Thu Duc");
    await this.page.getByPlaceholder("ZIP code").fill("50000");
    await this.page.getByPlaceholder("Phone").fill("0123456789");
    await this.page.getByLabel("I agree to the Pre-Order").check();
    await this.page.locator('//*[@id="app"]/main/section[2]/div/div/div[3]/div[2]/button[1]').click();
    await this.page.waitForTimeout(5000); //fill manual 2 image front and image back 
    //Step 2 
    // await this.page.locator('div').filter({ hasText: /^ID Card - Front\*Supported format: PNG, JPGBrowse Files$/ }).locator('div').nth(2).setInputFiles(config.inputImage);
    // await this.page.locator('div').filter({ hasText: /^ID Card - Back\*Supported format: PNG, JPGBrowse Files$/ }).locator('div').nth(2).setInputFiles(config.inputImage);
    await this.page.locator('//*[@id="app"]/main/section[3]/div/button').click();
  }
}
