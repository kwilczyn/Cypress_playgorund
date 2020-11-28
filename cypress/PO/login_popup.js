class LoginPopup{

    get_username_inputbox(){
        return cy.get('#username-modal') 
    }

    get_password_inputbox(){
        return cy.get('#password-modal') 
    }

    get_confirmation_login_button(){
        return cy.get('button[onclick*="return login"]')
    }

    set_username(value){
        this.get_username_inputbox().type(value, { force: true })
        return this
    }

    set_password(value){
        this.get_password_inputbox().click().type(value, { force: true })
        return this
    }

    click_confirmation_login_button(){
        this.get_confirmation_login_button().click()
        cy.wait('@getLogin')
        return this
    }
    
}

export default LoginPopup
    