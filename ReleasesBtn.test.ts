import {chbasePage} from './chbasePage'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';
import { DriverService } from 'selenium-webdriver/remote';

const chromedriver = require('chromedriver')
const cc = new chbasePage ()
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('Releases feature Button', async () => {
    await driver.get('https://www.champssports.com/')
    await driver.findElement(cc.releasesBtn).click()
    await driver.sleep (10000)

    await driver.wait(until.elementLocated (cc.emailXprompt))
    await driver.findElement(cc.emailXprompt).click()

    await driver.findElement(cc.policyAgreemnt).click()
    await driver.sleep(1000)
})

afterAll (async () => {
    await driver.quit
})