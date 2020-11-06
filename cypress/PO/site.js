import Header from "./header"
import NavigationBar from './navigation_bar'

class Site{

    constructor(){
        this.header = new Header()
        this.navigation_bar = new NavigationBar()
    }

    login(username, password){
        this.header.click_login_button()
        .set_username(username)
        .set_password(password)
        .click_confirmation_login_button()
        cy.wait('@getCart')
        return this
    }
    
}export default Site