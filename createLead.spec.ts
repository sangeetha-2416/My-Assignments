//Assignment 1 Create Lead

import test, { expect } from "@playwright/test";

test("To create lead", async ({page}) => {
    
    await page.goto(`https://login.salesforce.com`)
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`#password`).fill(`TestLeaf@2025`)
    await page.locator(`#Login`).click()
    await page.getByRole(`button`,{name: `App Launcher`}).click()
        await page.getByRole(`button`,{name: `View All Applications`}).click()
        await page.getByRole(`combobox`,{name: `Search apps or items...`}).fill(`sales`)
        await page.locator(`(//p[contains(text(),'Manage your sales process with accounts, leads, opportunities, and more')])`).click()
        
        await page.locator(`(//span[contains(text(),"Leads")])[1]`).click()
await page.locator(`//div[@title="New"]`).click()

await page.getByRole("textbox",{name:`Last Name`}).fill(`Ramalingam`)
await page.getByRole("textbox",{name:`Company`}).fill(`Capgemini`)
await page.locator(`//button[contains(@class,'slds-button slds-button_brand')]`).click()
const leadName = page.getByText(`Ramalingam`, { exact: true })
await expect(leadName).toBeVisible({timeout: 15000})
console.log("LeadName: "+ leadName.inputValue)



})