//DU
import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'

const chromedriver = require('chromedriver')

interface Options {
    driver?: WebDriver; 
    url?: string;

}

export class chbasePage {
    driver: WebDriver;
    url: string = "https://www.champssports.com/"; 

    //ChampsSports Locators 
    // The locator below is for the "sign-in button"
    signInBtn: By = By.xpath('//button[@class="Link Link-underline c-header-ribbon__link"]')
    // The locator below is for the "email input field"
    emailInputfd: By = By.xpath('//input[@id="SignIn_email_uid"]')
    // The locator below is for the "password input field"
    passwordInputfd: By = By.xpath('//input[@name="password"]')
    // The locator below is for the "searchbar"
    searchBarfd: By = By.xpath('//input[@name="query"]')
   
    //The loctor below is for interaction with men's Original Adidas Superstar item.
    adSuperstarbtn: By =By.xpath('(//li[@class="product-container col"])[1]')

    // The locator below is for selecting a size "8" mens originals adidas superstar
    size8btn: By = By.xpath ('//*[@id="ProductDetails"]/div[4]/fieldset/button[2]')
    //button[@aria-label="Size: 08.0 is selected"]')

    // The locator below is for the add to cart button
    addTocartBtn: By =By.xpath('//button[@class="Button ProductDetails-form__action"]')
    //button[@type="submit"]')
        
    // The locator below is for the for the "x" in the pop up email sign up prompt
    emailXprompt: By = By.xpath('//button[@class="close_button-24264-button close_button-24264-button-d2 bluecoreCloseButton"]')
    // The locator below  is for agreeing to policy updare.
    policyAgreemnt: By = By.xpath('//button[@id="touAgreeBtn"]')
    

    // The locator below is for interaction with the "NewArrivals"feature button.
    newArrivalsbtn: By = By.xpath('//a[@href="/category/new-arrivals.html"]')
    // The locator below is for interaction with the "Releases"feature button
    releasesBtn: By = By.xpath('//a[@href="/release-dates.html"]')

    // The locator below is for interaction with the "Sale" feature button.
    saleFtrBtn: By =By.xpath('//*[@id="app"]/div[1]/header/nav[2]/div[2]/div[9]')
        //'//button[@class="HeaderNavigation-link HeaderNavigation-link--active"]')
    shopAllsaleBtn: By = By.xpath('//a[@href="/category/sale.html"]')    
    dropmenubtn: By=By.xpath('//body[@class="ReactModal__Body--open"]')

    // The locator below is for interaction with the "Find the Store" feature button.
    findAstoreBtn: By = By.xpath('//*[@id="app"]/div[1]/header/nav[1]/div/div[1]')
    // The Locator below is for interaction with the "Change Store"button.
    changeStoreBtn: By = By.xpath('//strong[@class="StoreLocatorDropdown-heading"]')
    
    //The locator below is for interaction with the "location Input" field.
    locInputfd: By = By.xpath('//input[@id="StoreLocator_search_query"]')
    // The locator below is for interaction with "ChesterfieldTowneCenter"
    cfieldTownBtn: By = By.xpath('//button[@aria-label="Set CHESTRFLD TC to My Store."]')
    
    
    
    // The locator below is for interaction with the exit button.
    exitBtn: By = By.xpath('//span[@class="Icon Icon--close"]')
    // The Locator below is for interaction with CCBtn
    cCbtn: By = By.xpath('//button[@id="ccpaClose"]')

    // Below is the Base Page that we created in Class//
    constructor (options?: Options){
        if (options&& options.driver) this .driver= options.driver
        else
        this.driver = new Builder() .withCapabilities(Capabilities.chrome()).build()
        if (options && options.url) this. url = options.url
    }
    async navigate (url?: string): Promise < void> {
        if (url) return await this .driver.get (url)
        else if (this.url) return await this.driver .get (this.url)
        // above method is for page objects

        else 
        return Promise.reject(
            'chbasepage.navigate () needs a url defined on the page objects or one passed in '
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