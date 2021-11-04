const assert = require('assert')

describe('Loading Dominos webpage', () => {

   it("validates website title", async() => {
       await browser.url("https://www.dominos.com/en/pages/order/coupon")
       const title = await browser.getTitle()
       assert.strictEqual(title, "Get National &amp; Local Dominos Pizza Coupons for Carryout or Delivery")
   })

})