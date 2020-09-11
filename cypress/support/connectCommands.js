/// <reference types="Cypress" />


Cypress.Commands.add('connect', () => {
    cy.visit('https://demo.saleor.io/');
})