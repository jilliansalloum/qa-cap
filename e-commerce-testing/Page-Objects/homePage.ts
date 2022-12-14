import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class HomePage {
    driver: WebDriver
    url: string = 'http://automationpractice.com/index.php'
    signIn: By = By.className('login')
    userInput: By = By.id('email')
    pwInput: By = By.id('passwd')
    signInBtn: By = By.id('SubmitLogin')
    goHome: By = By.className('icon-chevron-left')
    loginPage: string = 'http://automationpractice.com/index.php?controller=authentication&back=my-account'
    signedInPage: string = 'http://automationpractice.com/index.php?controller=my-account'
    ssAddtoCart: By = By.className('ajax_add_to_cart_button')
    cntShopBtn: By = By.className('continue btn btn-default button exclusive-medium')
    dresses: By = By.className('sf-with-ul')
    prntdDrs: By = By.css('a[data-id-product*="3"]')
    prntdSumDrs: By = By.css('a[data-id-product*="4"]')
    logoRedirect: By = By.className('logo img-responsive')
    cart: By = By.className('ajax_cart_quantity') 
    proceed: By = By.className('button btn btn-default standard-checkout button-medium')
    proceedAdress: By = By.xpath("//*[text()='Proceed to checkout']");
    proceedPayment: By = By.className('button btn btn-default standard-checkout button-medium');
    tos: By = By.className('checker')
    bank: By = By.className('bankwire')
    confirm: By = By.xpath("//*[text()='I confirm my order']")
    step1: string = 'http://automationpractice.com/index.php?controller=order&step=1'
    paymentMethod: string = 'http://automationpractice.com/index.php?controller=order&multi-shipping='
    pgHeading: By = By.className('page-heading')

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

