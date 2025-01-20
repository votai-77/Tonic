import { config } from "../Util/TN_Config";

export class Action {
  constructor(page) {
    this.page = page;
  }

  async loginByEmail() {
    await this.page.goto(config.url);
    await this.page.getByRole("banner").getByRole("img", { name: "TONIC" }).nth(1).click();
    await this.page.getByPlaceholder("Email address", { exact: true }).fill(config.email);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();
    await this.page.getByPlaceholder("Password").fill(config.password);
    await this.page.getByRole("button", { name: "Continue", exact: true }).click();
  }

  async reserveNowGrey() {
    await this.page.getByRole("banner").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.locator("#order").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("checkbox", { name: "I agree to the Pre-Order" }).check();
    await this.page.getByRole("main").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("button", { name: "Return to Homepage" }).click();
    await this.myOrder();
  }
  async reserveNowBrown() {
    await this.page.getByRole("banner").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.locator(".flex-1 > div > div > .flex > button:nth-child(2)").click();
    await this.page.locator("#order").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("checkbox", { name: "I agree to the Pre-Order" }).check();
    await this.page.getByRole("main").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("button", { name: "Return to Homepage" }).click();
    await this.myOrder();
  }

  async reserveNowBlue() {
    await this.page.getByRole("banner").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.locator(".flex-1 > div > div > .flex > button:nth-child(3)").click();
    await this.page.locator("#order").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("checkbox", { name: "I agree to the Pre-Order" }).check();
    await this.page.getByRole("main").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("button", { name: "Return to Homepage" }).click();
    await this.myOrder();
  }
  async reserveNowLightBlue() {
    await this.page.getByRole("banner").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.locator(".flex-1 > div > div > .flex > button:nth-child(4)").click();
    await this.page.locator("#order").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("checkbox", { name: "I agree to the Pre-Order" }).check();
    await this.page.getByRole("main").getByRole("button", { name: "Reserve NOW" }).click();
    await this.page.getByRole("button", { name: "Return to Homepage" }).click();
    await this.myOrder();
  }
  async myOrder() {
    await this.page.getByRole("banner").getByRole("img", { name: "TONIC" }).nth(1).click();
    await this.page.getByRole("link", { name: "My Orders" }).click();
  }

  
}
