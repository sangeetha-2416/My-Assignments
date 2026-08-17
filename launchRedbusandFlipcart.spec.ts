import test, { chromium, firefox } from "@playwright/test"

test("Launch Redbus",async () => {
    
    const browser = await chromium.launch({channel: `msedge`})
    const context= await browser.newContext()
    const page = await context.newPage()

    await page.goto(`https://www.redbus.in`)
    const title =await page.title()
    console.log(title)
    console.log(page.url())
})

test("Launch Flipcart", async()=>{
        const browser= await firefox.launch({channel: `firefox`})
        const context=await browser.newContext()
        const page = await context.newPage()

       await page.goto(`https://www.flipkart.com`)
       console.log(page.url())
       console.log(await page.title())

})