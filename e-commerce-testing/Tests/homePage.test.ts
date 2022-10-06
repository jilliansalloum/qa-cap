import { HomePage } from '../Page-Objects/homePage'

const homePage = new HomePage

jest.setTimeout(10000)


test('navigate to url and sign in page', async () => {
    await homePage.navigate()
    await homePage.click(homePage.signIn)
    await homePage.driver.manage().setTimeouts( { implicit: 200 } );
    let value = await homePage.driver.getCurrentUrl()
    expect(value).toBe(homePage.loginPage)
})

test('sign in', async () => {
    await (await homePage.getElement(homePage.userInput)).sendKeys('salloum1@msu.edu')
    await (await homePage.getElement(homePage.pwInput)).sendKeys('testingautomation')
    await homePage.driver.manage().setTimeouts( { implicit: 200 } );
    await homePage.click(homePage.signInBtn)
    let value = await homePage.driver.getCurrentUrl()
    expect(value).toBe(homePage.signedInPage)
})


afterAll(async () => {
    await homePage.driver.quit()
})