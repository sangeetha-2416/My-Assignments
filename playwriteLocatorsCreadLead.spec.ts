import test, { expect } from "@playwright/test";

test("Create a lead", async({page})=>{

    await page.goto(`http://leaftaps.com/opentaps/control/main`)
    await page.getByRole(`textbox`,{name:`Username`}).fill(`democsr`)
    await page.getByRole(`textbox`,{name:`Password`}).fill(`crmsfa`)
    await page.getByRole(`button`,{name: `Login`}).click()
    await page.getByRole(`link`,{name:`CRM/SFA`}).click()
    await page.getByRole(`link`,{name:`Leads`}).click()
    await page.locator(`//a[contains(text(), "Create Lead")]`).click()
    await page.locator(`#createLeadForm_companyName`).fill(`capgemini`)
  const frstName = page.locator(`#createLeadForm_firstName`)
  await frstName.fill(`Sangeetha`)
  await expect(frstName).toHaveValue(`Sangeetha`)
  console.log(`First Name is : `+await frstName.inputValue())
  const lstName = page.locator(`#createLeadForm_lastName`)
  await lstName.fill(`Ramalingam`)
   await expect(lstName).toHaveValue(`Ramalingam`)
   console.log(`Last Name is : `+await lstName.inputValue())
   await page.locator(`#createLeadForm_personalTitle`).fill(`Mrs`)
   await page.locator(`#createLeadForm_generalProfTitle`).fill(`TestEngineer`)
   await page.locator(`#createLeadForm_annualRevenue`).fill(`1400000`)
   await page.locator(`#createLeadForm_departmentName`).fill(`Testing`)
   await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`9940777945`)
   await page.locator(`//input[@class="smallSubmit"]`).click()
   
     
      //await page.locator(`//span[contains(text(), "Status")]`)
   const status = page.locator(`#viewLead_statusId_sp`)

   await expect(status).toHaveText(`Assigned`)
console.log(`The Status is assigned`)
 console.log(await page.title())












})