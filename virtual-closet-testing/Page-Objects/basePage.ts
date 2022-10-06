import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class BasePage {
    driver: WebDriver
    url: string = 'https://capstone-jilli.herokuapp.com/index.html'
    firstEl: By = By.className('card')
    footer: By = By.xpath("//*[text()='Like what you see?']")
    addBtn: By = By.xpath("//*[text()='Add an Item']")
    searchBtn: By = By.xpath("//*[text()='Search Items']")
    addItemPage: string = 'https://capstone-jilli.herokuapp.com/add-item.html'
    searchPage: string = 'https://capstone-jilli.herokuapp.com/search.html'
    portfolio: string = 'https://jilliansalloum.github.io/index.html'

    constructor(options?: Options) {
        if(options && options.driver) this.driver = options.driver
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url)
        else if (this.url) return await this.driver.get(this.url)
        else return Promise.reject('You need a url to visit the page please add one in the page objects or in your test')
    }

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }

    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }

    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys)
    }

    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }

    async getAttribute(elementBy: By, attribute: string) {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
}
