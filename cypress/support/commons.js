Cypress.Commands.add('set_main_routes', (username, password) => {
        cy.server()
        .route('GET','/catalogue/*').as('getCatalogue')
        .route('GET','/cart').as('getCart')    
        .route('GET','/login').as('getLogin')
        .route('GET','/customers/*').as('getCustomers')
    })




