//DU
import {chbasePage} from './chbasePage'
import {Builder, Button, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { headersToString } from 'selenium-webdriver/http';
import { elementIsEnabled, urlContains } from 'selenium-webdriver/lib/until';
import { DriverService } from 'selenium-webdriver/remote';

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
    // After  the password is entered , test will run into a captcha

})    
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
})
afterAll (async () =>{
  await cc.driver.quit
})

test(' Sale and Shop All Sale Feature button', async () => {
    await cc.driver.get('https://www.champssports.com/')

    //await cc.driver.wait(until.elementLocated (cc.emailXprompt))
    //await cc.driver.findElement(cc.emailXprompt).click()
    //await cc.driver.sleep(10000)

    await cc.driver.findElement(cc.policyAgreemnt).click()
    await cc.driver.sleep(10000)



    await cc.driver.findElement(cc.saleFtrBtn).click()
    await cc.driver.sleep(10000)
    await cc.driver.findElement(cc.shopAllsaleBtn).click()
    await cc.driver.sleep(20000)
  
})

test('Releases feature Button', async () => {
    await cc.driver.get('https://www.champssports.com/')
    await cc.driver.findElement(cc.releasesBtn).click()
    await cc.driver.sleep (10000)

    await cc.driver.wait(until.elementLocated (cc.emailXprompt))
    await cc.driver.findElement(cc.emailXprompt).click()

    await cc.driver.findElement(cc.policyAgreemnt).click()
    await cc.driver.sleep(1000)

})    

afterAll (async () => {
    await cc.driver.quit
})