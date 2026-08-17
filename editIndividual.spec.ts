import test from "@playwright/test"

test(`Assignment: 4 Edit Individuals`, async ({page}) => {
    await page.goto(`https://login.salesforce.com`)
    await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.locator(`#password`).fill(`TestLeaf@2025`)
    await page.locator(`#Login`).click()
    await page.getByRole(`button`,{name: `App Launcher`}).click()
     await page.getByRole(`button`,{name: `View All Applications`}).click()
        await page.getByRole(`combobox`,{name: `Search apps or items...`}).fill(`Individuals`)
        await page.locator(`//mark[contains(text(), 'Indi')]`).click()
        const srchLastname= page.getByRole(`searchbox`,{name:`Search this list...`})
        await srchLastname.fill(`Ramalingam`);
        await srchLastname.press(`Enter`);
        //await page.locator(`//span[@id= "button-label-213"]`).click()
        const drpdwn = page.getByRole(`button`, {name: `Show more actions`})
        await drpdwn.click();
        await drpdwn.press(`Enter`);
        page.waitForTimeout(3000)
        await page.getByText(`Edit`,{exact:true}).click()
})

