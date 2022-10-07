import { SearchPage } from '../Page-Objects/searchPg'
import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'


const searchPage = new SearchPage

jest.setTimeout(10000)



test('search for dresses', async () => {
    await searchPage.navigate()
    await searchPage.click(searchPage.searchBar)
    await (await searchPage.getElement(searchPage.searchBar)).sendKeys('Dress')
    await searchPage.driver.manage().setTimeouts( { implicit: 100 } ); 
    await searchPage.click(searchPage.searchBtn)
    await searchPage.driver.manage().setTimeouts( { implicit: 100 } ); 
    let value = await searchPage.driver.getCurrentUrl()
    expect(value).toBe('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Dress&submit_search=')
})

test('check results for dresses', async () => {
    await searchPage.getElement(searchPage.logoRedirect)
    let value = await (await searchPage.getElement(searchPage.prntdDrs)).isDisplayed()
    expect(value).toBeTruthy()
})

test('search for shoes', async () => {
    await searchPage.navigate()
    await searchPage.click(searchPage.searchBar)
    await (await searchPage.getElement(searchPage.searchBar)).sendKeys('Shoes')
    await searchPage.driver.manage().setTimeouts( { implicit: 100 } ); 
    await searchPage.click(searchPage.searchBtn)
    await searchPage.driver.manage().setTimeouts( { implicit: 100 } ); 
    let value = await searchPage.driver.getCurrentUrl()
    expect(value).toBe('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Shoes&submit_search=')
})

test('check results for shoes', async () => {
    await searchPage.getElement(searchPage.logoRedirect)
    let value = await (await searchPage.getElement(searchPage.prntdDrs)).isDisplayed()
    expect(value).toBeFalsy()
})

afterAll(async () => {
    await searchPage.driver.quit()
})