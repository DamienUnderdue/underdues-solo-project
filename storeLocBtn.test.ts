import {chbasePage} from './chbasePage'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';
import { DriverService } from 'selenium-webdriver/remote';

const chromedriver = require('chromedriver')
const cc = new chbasePage ()
//const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('Store Locator Feature', async () => {
    await cc.driver.get('https://www.champssports.com/')
    await cc.driver.sleep(1000)    
    //await driver.findElement(cc.emailXprompt).click ()
    //await driver.sleep(1000)

    await cc.driver.findElement(cc.findAstoreBtn).click ()
    await cc.driver.sleep(1000)
    await cc.driver.findElement(cc.changeStoreBtn).click()
    await cc.driver.sleep(1000)
    await cc.driver.findElement(cc.locInputfd).sendKeys('23235\n')
    await cc.driver.sleep(10000)
    await cc.driver.findElement(cc.cfieldTownBtn).click()
    await cc.driver.sleep(1000)
    //await driver.findElement(cc.exitBtn).click()
    //await driver.sleep(1000)

    //await driver.findElement(cc.emailXprompt).click()
    //await driver.findElement(cc.policyAgreemnt).click()
    //await driver.sleep(1000)


})
afterAll (async() => {
    await cc.driver.quit
})   