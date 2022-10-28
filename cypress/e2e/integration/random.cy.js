import { getEvolutions } from "../../utils/utils";

describe("Testing random pokemon requests", () => {
    beforeEach(() => {
        cy.visitWebSite();
    });

    it("Send random pokemon-specie", () => {
        cy.intercept(`https://pokeapi.co/api/v2/pokemon-species/**`).as(
            "randomRequest"
        );
        cy.randomPokemon();
        cy.wait("@randomRequest").then(({ response }) => {
            expect(response.body.name).be.a("string");
            expect(response.statusCode).be.equal(200);
        });
    });

    it("Random quest - check evolution request", () => {
        cy.intercept(`https://pokeapi.co/api/v2/evolution-chain/**`).as(
            "randonChainRequest"
        );
        cy.randomPokemon();
        cy.wait("@randonChainRequest").then(({ response }) => {
            const evolutions = getEvolutions(response.body.chain);
            cy.intercept(`https://pokeapi.co/api/v2/pokemon/**`).as(
                "pokemonRequest"
            );
            const pokemons = [];
            evolutions.forEach(() => {
                pokemons.push(`@pokemonRequest`);
            });
            cy.wait(pokemons).then((responses) => {
                if (responses.length) {
                    const response = responses[0].response;
                    cy.get("header > h1").contains(response.body.name);
                }
            });
        });
    });
});
