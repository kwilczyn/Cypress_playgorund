class NavigationBar{
    
    get_catalogue_button(){
        return cy.xpath('//li[@id="tabCatalogue"]').should('be.visible')
    }

    click_catalogue_button(){
        return this.get_catalogue_button().click()
    }

    get_cart_button(){
        return cy.get('#basket-overview')
    }

    click_cart_button(){
        this.get_cart_button().click()
        return this
    }

}

export default NavigationBar