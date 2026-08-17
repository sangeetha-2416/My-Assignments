import test from "@playwright/test"

test(`Assignment: 3 Create Individuals `, async ({page}) => {
    await page.goto(`https://login.salesforce.com`)
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`#password`).fill(`TestLeaf@2025`)
    await page.locator(`#Login`).click()
    await page.getByRole(`button`,{name: `App Launcher`}).click()
     await page.getByRole(`button`,{name: `View All Applications`}).click()
        await page.getByRole(`combobox`,{name: `Search apps or items...`}).fill(`Individuals`)
        await page.locator(`//mark[contains(text(), 'Indi')]`).click()
await page.getByRole(`button`,{name:`New`}).click()
const lastname = page.getByRole(`textbox`,{name:`Last Name`})
await lastname.fill(`Ramalingam`)
console.log("Individual name is Sangeetha "+ lastname.inputValue() );
await page.locator(`(//span[contains(text(), 'Save')])[2]`).click()


})
