import { chromium, test } from "@playwright/test";
import { Action } from "../Pages/TN_Actions";

let browser;
let page;
let action;

test.beforeEach(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  action = new Action(page);
});
test.afterEach(async () => {
  await page.close();
  await browser.close();
});

// test.describe("Login and reserve now with account email", () => {
// test("Reserve Now", async () => {
//============================LOGIN Email==================================
test("Login success with email registed!", async () => {
  console.log("Login success with email registed!");
  action = new Action(page);
  await action.loginByEmail();
});
// ==========================ORDER Phone Grey===============================
test("Order with phone Grey color", async () => {
  console.log("Reserve Now with phone grey color");
  action = new Action(page);
  await action.loginByEmail();
  await action.reserveNowGrey();
});
// ==========================ORDER Phone Brown===============================
test("Order with phone brown color", async () => {
  console.log("Reserve Now with phone brown color");
  action = new Action(page);
  await action.loginByEmail();
  await action.reserveNowBrown();
});
// ==========================ORDER Phone Blue===============================
test("Order with phone blue color", async () => {
  console.log("Reserve Now with phone blue color");
  action = new Action(page);
  await action.loginByEmail();
  await action.reserveNowBlue();
}); // ==========================ORDER Phone LightBlue===============================
test("Order with phone lightblue color", async () => {
  console.log("Reserve Now with phone lightblue color");
  action = new Action(page);
  await action.loginByEmail();
  await action.reserveNowLightBlue();
});
