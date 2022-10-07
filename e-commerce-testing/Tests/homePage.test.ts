import { HomePage } from '../Page-Objects/homePage'


const homePage = new HomePage

jest.setTimeout(10000)


test('navigate to url and sign in page', async () => {
    await homePage.navigate()
    await homePage.click(homePage.signIn)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    let value = await homePage.driver.getCurrentUrl()
    expect(value).toBe(homePage.loginPage)
})

test('sign in', async () => {
    await (await homePage.getElement(homePage.userInput)).sendKeys('salloum1@msu.edu')
    await (await homePage.getElement(homePage.pwInput)).sendKeys('testingautomation')
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.signInBtn)
    let value = await homePage.driver.getCurrentUrl()
    expect(value).toBe(homePage.signedInPage)
})


test('add item to cart', async () => {
    await homePage.click(homePage.logoRedirect)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.ssAddtoCart)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.cntShopBtn)
    let value = await homePage.driver.findElement(homePage.cart).getText()
    expect(value).toBe('1')
})

test('go to dresses and add one to cart', async () => {
    await homePage.click(homePage.dresses)
    await homePage.click(homePage.prntdDrs)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.cntShopBtn)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    let value = await homePage.driver.findElement(homePage.cart).getText()
    expect(value).toBe('2')
})

test('add to cart and start checking out', async () => {
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.cart)
    await homePage.click(homePage.proceed)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );    
    let value = await homePage.driver.getCurrentUrl()
    expect(value).toBe(homePage.step1)
})

test('confirm address', async () => {
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.proceedAdress)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );   
    await homePage.click(homePage.tos)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } ); 
    await homePage.click(homePage.proceedPayment)
    let value = await homePage.driver.getCurrentUrl()
    expect(value).toBe(homePage.paymentMethod)
})

test('choose pay through bank wire payment method', async () => {
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.bank)
    await homePage.driver.manage().setTimeouts( { implicit: 100 } );
    await homePage.click(homePage.confirm)
    let value = await homePage.driver.findElement(homePage.pgHeading).getText()
    expect(value).toBe('ORDER CONFIRMATION')
})

afterAll(async () => {
    await homePage.driver.quit()
})