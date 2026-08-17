import test from "@playwright/test"

test("JavaScript Alert handeling",async ({page}) =>{
    
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on("dialog", async(alerts)=>{
let alertType =alerts.type()
console.log(alertType)
console.log(alerts.message())


switch (alertType) {
     case "alert":
                await alerts.accept()
                break;

                case "confirm":
                await alerts.accept()
                break;

                case "promt":
                await alerts.accept("Sangeetha")
                break;

    default :
    alerts.dismiss()
        break;
}

   
    
})


    await page.getByRole(`button`, {name: `Click for JS Alert`}).click()
    await page.waitForTimeout(2000)
        await page.getByRole(`button`, {name: `Click for JS Confirm`}).click()
         await page.waitForTimeout(2000)
    await page.getByRole(`button`, {name: `Click for JS Prompt`}).click()
    await page.waitForTimeout(2000)

})