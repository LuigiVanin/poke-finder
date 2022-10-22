/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
export {};

declare global {
    namespace Cypress {
        interface Chainable {
            visitWebSite(): Chainable<null>;

            getAndType: (
                name: string,
                text: string
            ) => Chainable<JQuery<HTMLElement>>;

            getAndClick: (element: string) => Chainable<void>;

            searchPokemon: (pokemonName: string) => Chainable<void>;
        }
    }
}

Cypress.Commands.add("visitWebSite", () => {
    const myUrl = "http://localhost:5173/";
    cy.visit(myUrl);
});

Cypress.Commands.add("getAndType", (name, text) => {
    return cy.get(String(name)).type(text);
});

// Cypress.Commands.add("getAndClick")

// Cypress.Commands.add("searchPokemon", (pokemon: string) => {
//     cy.getAndType("form input", pokemon);
//     cy.get;
// });
