import {BasePage} from '../Page-Objects/basePage'
import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'



export class SearchPage extends BasePage {
//Locators Here
    url: string = 'https://capstone-jilli.herokuapp.com/search.html'
    searchInput: By = By.className('searchform')
    style: By = By.id('style')
    season: By = By.id('season')
    brand: By = By.id('brand')
    firstEl: By = By.className('card')
    searchBtn: By = By.id('search-icon-img')
    winSearch: By = By.xpath("//*[text()='lydia top']");
constructor() {
super({url: 'https://capstone-jilli.herokuapp.com/search.html'})
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