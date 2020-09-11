/// <reference types="Cypress" />


import '../support/loginCommands.js';
import '../support/connectCommands.js';

var users = require('../testData/users.json');

context('Login and register tests', () => {
    beforeEach(() => {
        cy.connect();
    })

    it('Should login', () => {
        cy.login(users[0].email, users[0].password);
        cy.get('.main-menu__user--active')
        .should('be.visible');
    })

    it('Should not login', () => {
        cy.login(users[1].email, users[1].password);
        cy.get('.form-error')
        .should('contain', 'Please, enter valid credentials');
    })

    it('Should display an error when email is empty', () => {
        cy.get('[data-testid=login-btn]')
        .click();
        cy.get('input[name="email"]')
        .clear();
        cy.get('.input__error')
        .should('contain', 'Please fill out this field.');
    })

    it('Should display an error when password is empty', () => {
        cy.get('[data-testid=login-btn]')
        .click();
        cy.get('input[name="password"]')
        .clear();
        cy.get('.input__error')
        .should('contain', 'Please fill out this field.');
    })

})