// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

Cypress.Commands.add("hasNavBar", () => {
        cy.get("img").should("have.css", "height", "50px")
        cy.get("img").should("have.css", "width", "50px")
        cy.get("a").contains("Movies").should("have.attr", "href", "/movies")
        cy.get("a").contains("People").should("have.attr", "href", "/people")
        cy.get("a").contains("Locations").should("have.attr", "href", "/locations")
})


