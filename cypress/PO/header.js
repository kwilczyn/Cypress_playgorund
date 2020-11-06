import LoginPopup from './login_popup'

class Header{
    constructor(){
        this.login_popup = new LoginPopup()
    }

    get_login_button(){   
        return cy.xpath('//div[@id="top"]//a[@data-target="#login-modal"]')
    }

    click_login_button(){
        this.get_login_button().click()
        return this.login_popup
    }
    
}

export default Header