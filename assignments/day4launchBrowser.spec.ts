
import { test, chromium } from '@playwright/test';

test('Launch Salesforce and Login', async () => {

    // Launch Chromium browser in non-headless mode
    const browser = await chromium.launch({ channel: "chrome",
        headless: false
    });

    // Create a new browser context.
    const context = await browser.newContext();

    // Open a new page within the browser context.
    const page = await context.newPage();

    // Load the URL
    await page.goto(`https://login.salesforce.com/`);

    // Enter the username
    await page.locator(`#username`).fill(`demonsalesmanager`);

    // Enter the password.
    await page.locator(`#password`).fill(`crmsfa`);

    // Click the Login button.
     await page.locator(`#Login`).click();

    //Wait for 10 seconds
    await page.waitForTimeout(10000);

    // Print the page title and the current url of the page
    console.log(page.url(), page.title());

    // Close browser
    await browser.close();
});
