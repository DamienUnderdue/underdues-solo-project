//DU
import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver; 
    url?: string;
    
}


export class chbasePage {
    driver: WebDriver;
    url: string = "https://www.champsSports.com/"; 

    //DU 
    //ChampsSports Locators and Base Page

    

    // Below is the Base Page that we created in Class//
    constructor (options?: Options){
        if (options&& options.driver) this .driver= options.driver
        else
        //this.driver = new Builder() .withCapabilities(Capabilities.chrome()).build()
        if (options && options.url) this. url = options.url
    }
    async navigate (url?: string): Promise < void> {
        if (url) return await this .driver.get (url)
        else if (this.url) return await this.driver .get (this.url)
        // above method is for page objects

        else 
        return Promise.reject(
            'Basepage.navigate () needs a url defined on the page objects or one passed in '
        )
    }
    async getElement(elementBy: By) : Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element =await this .driver. findElement(elementBy)
        await this .driver.wait(until .elementIsVisible(element))
        return element

    }
    async click(elementBy:By): Promise<void> {
        return(await this.getElement(elementBy)).click()
    }
    async setInput(elementBy:By, keys: any): Promise<void>{
        let input = await this.getElement(elementBy)
        await input. clear()
        return input.sendKeys(keys)

    }
    async getText(elementBy: By): Promise<string>{
    return (await this.getElement(elementBy)).getText()

    }
    async getAttribute(elementBy: By, attributes: string): Promise<string> {
        return (await this. getElement(elementBy)).getAttribute(attributes)

    }
}