import Site from './site'

class CartPage extends Site{
    constructor(){
        super()
    }

    get_proceed_to_checkout_button(){
        return cy.get('#orderButton')
    }

    click_proceed_to_checkout_button(){
        this.get_proceed_to_checkout_button().click()
        return this
    }
}

export default CartPage