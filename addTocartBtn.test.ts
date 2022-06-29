import {chbasePage} from './chbasePage'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';
import { DriverService } from 'selenium-webdriver/remote';

const chromedriver = require('chromedriver')
const cc = new chbasePage ()
//const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('Add item to cart', async () => {
    await cc.driver.get('https://www.champssports.com/')
    await cc.driver.findElement(cc.searchBarfd).click()
    await cc.driver.findElement(cc.searchBarfd).sendKeys('original adidas Superstars\n')
    await cc.driver.sleep(20000)

    await cc.driver.wait(until.elementLocated (cc.emailXprompt))
    await cc.driver.findElement(cc.emailXprompt).click()
    await cc.driver.sleep(2000)

    await cc.driver.findElement(cc.adSuperstarbtn).click()
    await cc.driver.sleep(10000)

    await cc.driver.findElement(cc.policyAgreemnt).click()
    await cc.driver.sleep(1000)


    await cc.driver.findElement(cc.size8btn).click()
    await cc.driver.sleep(1000)

    //await cc.driver.findElement(cc.policyAgreemnt).click()
    //await cc.driver.sleep(10000)

    await cc.driver.wait(until.elementLocated(cc.addTocartBtn))
    await cc.driver.findElement(cc.addTocartBtn).click()
    await cc.driver.sleep(1000)
    // Once added to Cart will be met with Captcha.. Yay!
    console.log("You are now stepping in style.");
})
afterAll (async () => {
    await cc.driver.quit
})