import test, { expect } from "@playwright/test";

test("Creating a new account",async({page})=>{

    await page.goto(`https://login.salesforce.com/`)
    await page.getByLabel(`Username`).fill(`dilipkumar.rajendran@testleaf.com`)
    await page.getByLabel(`Password`).fill(`TestLeaf@2025`)
    await page.getByRole(`button`,{name:`Log In`}).click()
   
     //await expect(page).toHaveURL(`https://testleaf.lightning.force.com/lightning/page/home`)
     console.log(page.url())

     //await expect(page).toHaveTitle(`Home | Salesforce`)
     console.log(await page.title())

     await page.locator(`//div[@class="slds-icon-waffle"]`).click()
     await page.locator(`//p[contains(text(), "Service")]`).click()
     await page.locator(`//a[@title="Accounts"]`).click()
     await page.getByRole(`button`,{name:`New`}).click()
     await page.locator(`#input-523`).fill(`Sangeetha`)
     await page.locator(`(//button[contains(text(),"Save")])[2]`).click()
     //await page.getByText(`View All`,{exact:true}).first().click()

     //const placeholder= page.getByPlaceholder(`Search apps or items...`)
     //await placeholder.fill(`Service`)
     //await placeholder.press(`Enter`)

    //const srchbox = page.getByRole(`combobox`,{name:`Search apps or items...`})
    //await srchbox.fill(`service`)
    //await srchbox.press(`Enter`)

     //await page.locator(`(//p[contains(text(),"Service")])[1]`).click()

     //await page.locator(`//[class^="Accoun"]`).click()
    
     //await page.locator(`(//p[contains(text(),"Service")])[1]`).click()
})