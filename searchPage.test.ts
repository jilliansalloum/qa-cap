import { SearchPage } from './searchPage'

const searchItem = new SearchPage

jest.setTimeout(10000)

test('search for an item by brand', async () => {
    await searchItem.navigate()
    await (await searchItem.getElement(searchItem.searchInput)).sendKeys('Aritzia')
    await searchItem.click(searchItem.brand)
    await searchItem.driver.sleep(200)
    await searchItem.click(searchItem.searchBtn)
    let value = await searchItem.driver.findElement(searchItem.firstEl).getText()
    expect(value).toContain('')
})

test('search for an item by style', async () => {
    await searchItem.navigate()
    await (await searchItem.getElement(searchItem.searchInput)).sendKeys('jeans')
    await searchItem.click(searchItem.style)
    await searchItem.driver.sleep(200)
    await searchItem.click(searchItem.searchBtn)
    let value = await searchItem.driver.findElement(searchItem.firstEl).getText()
    expect(value).toContain('')
})

test('search for an item by season', async () => {
    await searchItem.navigate()
    await (await searchItem.getElement(searchItem.searchInput)).sendKeys('fall')
    await searchItem.click(searchItem.season)
    await searchItem.driver.sleep(200)
    await searchItem.click(searchItem.searchBtn)
    let value = await searchItem.driver.findElement(searchItem.firstEl).getText()
    expect(value).toContain('')
})

test('search for a season and find a specific top', async () => {
    await searchItem.navigate()
    await (await searchItem.getElement(searchItem.searchInput)).sendKeys('winter')
    await searchItem.click(searchItem.season)
    await searchItem.driver.sleep(200)
    await searchItem.click(searchItem.searchBtn)
    await searchItem.getElement(searchItem.winSearch)
    await searchItem.click(searchItem.searchBtn)
    let value = await searchItem.driver.findElement(searchItem.winSearch).getAttribute('class')
    expect(value).toContain('style')
})

afterAll(async () => {
    await searchItem.driver.quit()
})
