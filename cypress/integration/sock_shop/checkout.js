import HomePage from '../../PO/home_page'

describe('Checkout', () => {
    before(() => {
        let env = Cypress.env()
        cy.home_page = new HomePage()
        cy.home_page.visit()
        .login(env.username, env.password)
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('logged_in', 'md.sid', '_TRAEFIK_BACKEND')
        cy.set_main_routes()
        cy.home_page.visit()
    })

    it('buy formal cat socks', () => {
        cy.home_page.navigate_to_category_page()
        .set_category_filter('formal')
        .click_submit_filter_button()
        .add_product_to_cart("Cat socks")
        .navigate_to_cart_page()
        .click_proceed_to_checkout_button()
        cy.contains('My orders').should('be.visible')
    })

    it('buy two types of socks', () => {
        cy.home_page.navigate_to_category_page()
        .set_category_filter('blue')
        .set_category_filter('black')
        .add_product_to_cart("Colourful")
        .add_product_to_cart("Crossed")
        .navigate_to_cart_page()
        .click_proceed_to_checkout_button()
        cy.contains('My orders').should('be.visible')
    })

    after(() =>
        cy.clearCookies()
    )
})