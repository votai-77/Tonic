import { test } from '@playwright/test';

test("Check OS of browser environment", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Lấy userAgent của trình duyệt
    const userAgent = await page.evaluate(() => navigator.userAgent);

    if (userAgent.includes('Linux')) {
        console.log("Project is running on Linux.");
    } else if (userAgent.includes('Windows')) {
        console.log("Project is running on Windows.");
    } else if (userAgent.includes('Mac')) {
        console.log("Project is running on macOS.");
    } else {
        console.log("Could not determine the OS.");
    }

    await context.close();
});