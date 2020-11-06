import Site from './site'
import CartPage from './cart_page'

class ResultPage extends Site{

    constructor(){
        super()
    }

    visit(){
        cy.visit('/category.html')
        return this
    }

    get_category_filter_checkbox(filter_value){
        return cy.xpath('//form[@id="filters-form"]//input[@value="'+filter_value+'"]')
    }

    set_category_filter(filter_value){
        this.get_category_filter_checkbox(filter_value).click()
        return this
    }

    get_submit_filter_button(){
        return cy.get('#filters-form>a')
    }

    click_submit_filter_button(){
        this.get_submit_filter_button().click().wait('@getCatalogue')
        return this
    }

    get_product_selector(product_name){
        return cy.xpath('//div[.//h3[contains(.,"'+product_name+'")] and @class="product"]//a[contains(@onclick,"addToCart")]')
    }

    add_product_to_cart(product_name){
        this.get_product_selector(product_name).click()
        cy.wait(['@getCatalogue', '@getCustomers'])
        return this
    }

    navigate_to_cart_page(){
        this.navigation_bar.click_cart_button()
        if (cy.cart_page)
                return cy.cart_page
            else 
                cy.cart_page = new CartPage()
            return cy.cart_page
    }
}

export default ResultPage