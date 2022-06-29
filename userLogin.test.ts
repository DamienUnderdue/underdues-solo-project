//DU
import {chbasePage} from './chbasePage'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';

const chromedriver = require('chromedriver')
const cc = new chbasePage ()
//const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()


test('user login feature ', async () => {
    await cc.driver.get('https://www.champssports.com/')
    await cc.driver.findElement(cc.signInBtn).click()
    await cc.driver.sleep(1000)

    await cc.driver.findElement(cc.emailInputfd).click ()
    await cc.driver.findElement(cc.emailInputfd).sendKeys('MisterFEarth616@gmail.com\n')
    await cc.driver.sleep (1000)
    await cc.driver.findElement(cc.passwordInputfd).click()
    await cc.driver.findElement(cc.passwordInputfd).sendKeys('Solokangwar1!\n')
    await cc.driver.sleep (1000)

    await cc.driver.findElement(cc.cCbtn).click ()
    await cc.driver.sleep(1000)

    //Test will Run into a Captcha surprise!//

})
afterAll (async ()=> {
    await cc.driver.quit ()
})