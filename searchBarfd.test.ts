//DU
import {chbasePage} from './chbasePage'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';

const chromedriver = require('chromedriver')
const cc = new chbasePage ()
//const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('functional search bar', async () => {
    await cc.driver.get('https://www.champssports.com/')
    await cc.driver.findElement(cc.searchBarfd).click()
    await cc.driver.findElement(cc.searchBarfd).sendKeys('Jordan\n')
    await cc.driver.sleep(1000)
    await cc.driver.wait(until.elementLocated (cc.emailXprompt))
    await cc.driver.findElement(cc.emailXprompt).click()
    await cc.driver.sleep(1000)
    await cc.driver.findElement(cc.policyAgreemnt).click()
    await cc.driver.sleep(1000)

})

afterAll (async () => {
    await cc.driver.quit
})