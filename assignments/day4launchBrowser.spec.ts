import test from "@playwright/test";

test("Learn locating strategy using CSS selector",async({page})=> {
    
    await page.goto(`https://login.salesforce.com/`)
     page.locator(`#username`).fill(`demonsalesmanager`)
    await page.waitForTimeout(2000)
     page.locator(`#password`).fill(`crmsfa`)
     page.locator(`#Login`).click
    await page.waitForTimeout(10000)
    const pageTitle=await page.title()
    console.log(`Title: ${pageTitle}`)
    const currenturl =page.url()
    console.log(`URL: ${currenturl}`)


})