/// <reference types="Cypress" />

import '../support/connectCommands.js';

context('Connect tests', () =>{
    it('Should connect website properly', () => {
        cy.connect();
        cy.get('[data-src="/images/logo-small.svg"]').
        should('be.visible');
    })
})