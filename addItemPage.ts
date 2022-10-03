import {BasePage} from './basePage'
import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'



export class AddItemPage extends BasePage {
//Locators Here
    url: string = 'https://capstone-jilli.herokuapp.com/add-item.html'
    brand: By = By.id('brand')
    style: By = By.id('style')
    season: By = By.id('season')
    imgURL: By = By.id('img')
    addBtn: By = By.className('add-button')
constructor() {
super({url: 'https://capstone-jilli.herokuapp.com/add-item.html'})
}
//methods
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys);
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
}