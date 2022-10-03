import { BasePage } from './basePage'

const basePage = new BasePage

jest.setTimeout(1000000)


test('will footer redirect to portfolio link', async () => {
    await basePage.navigate()
    await basePage.click(basePage.footer)
    await basePage.driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await basePage.driver.getCurrentUrl()
    expect(value).toBe(basePage.portfolio)
})

test('make sure routing in navbar to add item page is functional', async () => {
    await basePage.navigate()
    await basePage.click(basePage.addBtn)
    await basePage.driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await basePage.driver.getCurrentUrl()
    expect(value).toBe(basePage.addItemPage)
})

test('make sure routing in navbar to search item page is functional', async () => {
    await basePage.navigate()
    await basePage.click(basePage.searchBtn)
    await basePage.driver.manage().setTimeouts( { implicit: 2000 } );
    let value = await basePage.driver.getCurrentUrl()
    expect(value).toBe(basePage.searchPage)
})


afterAll(async () => {
    await basePage.driver.quit()
})