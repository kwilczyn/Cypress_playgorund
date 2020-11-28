class NavigationBar{
    
    get_catalogue_button(){
        return cy.xpath('//li[@id="tabCatalogue"]').should('be.visible')
    }

    click_catalogue_button(){
        return this.get_catalogue_button().click().wait('@getCart')
    }

    get_cart_button(){
        return cy.xpath('//span[@id="numItemsInCart"]').should("be.visible")
    }

    click_cart_button(){
        this.get_cart_button().click().wait('@getCart').wait('@getCatalogue')
        return this
    }

}

export default NavigationBar