import test, { expect } from "@playwright/test";

test("Edit lead", async ({page}) => {
    
   await page.goto(`http://leaftaps.com/opentaps/control/main`)
   await page.getByRole(`textbox`,{name:`Username`}).fill(`democsr`)
    await page.getByRole(`textbox`,{name:`Password`}).fill(`crmsfa`)
    await page.getByRole(`button`,{name: `Login`}).click()
    await page.getByRole(`link`,{name:`CRM/SFA`}).click()
    await page.getByRole(`link`,{name:`Leads`}).click()
    await page.getByRole(`link`,{name:`Find Leads`}).click()
    await page.getByRole(`textbox`,{name:`First name`}).fill(`Sangeetha`)
    await page.locator(`(//button[@class="x-btn-text"])[6]`).click()
   // await page.locator(`//div[@class="x-grid3-hd-inner x-grid3-hd-partyId"]/a`).first().click();
   //const chckvisibility= page.locator(`#ext-gen824`)
   //await expect(chckvisibility).toBeVisible()
   //await chckvisibility.click()
   await page.getByText(`11656`,{exact:true}).click()

    await page.getByRole(`link`,{name:`Edit`}).click()  

    const updatedCoName =  page.locator(`#updateLeadForm_companyName`);
    await updatedCoName.fill(`TCS`);
    await expect(updatedCoName).toHaveValue(`TCS`);
    console.log(`Updated co. name is :`+await updatedCoName.inputValue());

    const updatedAnnualRev= page.locator(`#updateLeadForm_annualRevenue`);
    await updatedAnnualRev.fill(`1500000`);
    await expect(updatedAnnualRev).toHaveValue(`1500000`);
    console.log(`Updated Annual Revenue is :`+await updatedAnnualRev.inputValue());

    const updatedDep=  page.locator(`#updateLeadForm_departmentName`);
    await updatedDep.fill(`Management`);
    await expect(updatedDep).toHaveValue(`Management`);
    console.log(`Updated Department is :`+await updatedDep.inputValue());

    await page.locator(`#updateLeadForm_description`).fill(`updated the changes`);
    await page.getByRole(`button`,{name:`Update`}).click();
    console.log (await page.title());


})