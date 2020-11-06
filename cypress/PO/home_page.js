import Site from './site'
import CategoryPage from './category_page'


class HomePage extends Site{

    constructor(){
        super()
        cy.set_main_routes()
    }

    visit(){
        cy.visit('/')
        .wait('@getCart')
        return this
    }

    navigate_to_category_page(){
        this.navigation_bar.click_catalogue_button()
        if (cy.category_page)
                return cy.category_page
            else 
                cy.category_page = new CategoryPage()
            return cy.category_page
    }

}

export default HomePage