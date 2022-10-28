/// <reference types="cypress" />

import { Interception } from "cypress/types/net-stubbing";
import { getEvolutions } from "../utils/utils";

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

            randomPokemon: () => Chainable<void>;

            afterPokemonAction: (
                pokemonToSearch: string,
                evolutions: string[],
                afterAction: (responses: Interception[]) => void
            ) => void;

            afterSearchPikachu: (
                afterAction: (responses: Interception[]) => void
            ) => void;
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

Cypress.Commands.add("getAndClick", (element) => {
    cy.get(element).click();
});

Cypress.Commands.add("searchPokemon", (pokemon: string) => {
    cy.getAndType("form input", pokemon);
    cy.getAndClick("form button");
});

Cypress.Commands.add("randomPokemon", () => {
    cy.getAndClick(".btn");
});

Cypress.Commands.add(
    "afterPokemonAction",
    (
        pokemonToSearch: string,
        evolutions: string[],
        afterAction: (responses: Interception[]) => void
    ) => {
        cy.intercept(`https://pokeapi.co/api/v2/pokemon/**`).as(
            "pokemonRequest"
        );
        const pokemonsRequestName: string[] = [];
        evolutions.forEach(() => {
            pokemonsRequestName.push(`@pokemonRequest`);
        });
        cy.searchPokemon(pokemonToSearch);
        cy.wait(pokemonsRequestName).then((responses) => {
            afterAction(responses);
        });
    }
);

Cypress.Commands.add("afterSearchPikachu", (afterAction) => {
    cy.afterPokemonAction(
        "pikachu",
        ["pichu", "pikachu", "raichu"],
        afterAction
    );
});
