/// <reference types="Cypress" />


Cypress.Commands.add('login', (email, password) =>{
    cy.get('[data-testid=login-btn]')
    .click();

    cy.get('input[name="email"]')
    .clear()
    .type(email);

    cy.get('input[name="password"]')
    .clear()
    .type(password+'{enter}');
})