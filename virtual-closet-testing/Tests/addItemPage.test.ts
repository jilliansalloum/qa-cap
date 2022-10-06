import { AddItemPage } from '../Page-Objects/addItemPage'

const addItem = new AddItemPage

jest.setTimeout(5000)


test('use input form to add an item', async () => {
    await addItem.navigate()
    await (await addItem.getElement(addItem.brand)).sendKeys('Aritzia')
    await (await addItem.getElement(addItem.season)).sendKeys('Fall')
    await (await addItem.getElement(addItem.style)).sendKeys('Long Sleeve Shirt')
    await (await addItem.getElement(addItem.imgURL)).sendKeys('https://aritzia.scene7.com/is/image/Aritzia/f22_04_a02_103078_1274_on_a?wid=900')
    await addItem.click(addItem.addBtn)
    let value = await addItem.driver.findElement(addItem.brand).getText()
    expect(value).toContain('')
})

test('cannot send an uncomplete form', async () => {
    await (await addItem.getElement(addItem.season)).sendKeys('Fall')
    await addItem.click(addItem.addBtn)
    let value = await addItem.driver.findElement(addItem.season).getText()
    expect(value).toContain('Fall')
})

test('find added form as card', async () => {
    await addItem.navigate(addItem.basePage)
    await addItem.driver.manage().setTimeouts( { implicit: 200 } );
    await addItem.getElement(addItem.lastCard)
    let value = await addItem.driver.findElement(addItem.lastCard).getText()
    expect(value).toContain('Long Sleeve Shirt')
})


afterAll(async () => {
    await addItem.driver.quit()
})