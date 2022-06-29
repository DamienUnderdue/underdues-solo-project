import {chbasePage} from './chbasePage'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';
import { DriverService } from 'selenium-webdriver/remote';

const chromedriver = require('chromedriver')
const cc = new chbasePage ()
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test(' Sale and Shop All Sale Feature button', async () => {
    await cc.driver.get('https://www.champssports.com/')

    await cc.driver.wait(until.elementLocated (cc.emailXprompt))
    await cc.driver.findElement(cc.emailXprompt).click()
    await cc.driver.sleep(10000)

    await cc.driver.findElement(cc.policyAgreemnt).click()
    await cc.driver.sleep(10000)



    await cc.driver.findElement(cc.saleFtrBtn).click()
    await cc.driver.sleep(1000)
    await cc.driver.findElement(cc.shopAllsaleBtn).click()
    await cc.driver.sleep(2000)

    
    

    
})

afterAll (async () => {
    await cc.driver.quit
})