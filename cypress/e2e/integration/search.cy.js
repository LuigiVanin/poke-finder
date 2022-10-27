/// <reference types="cypress" />

describe("Testing the integration of the PokeApi and my application", () => {
    const pokemon = "pikachu";

    beforeEach(() => {
        cy.visitWebSite();
    });

    it("Testing searching a pokemon-species", () => {
        cy.intercept(
            "GET",
            `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
        ).as("firstRequest");
        cy.searchPokemon(pokemon);
        cy.wait("@firstRequest").then(({ response }) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body.id).to.equal(25);
            expect(response.body.name).to.equal(pokemon);
        });
    });

    it("Testing searching evolution chain request", () => {
        const pokemonEvolutionId = 10;
        cy.intercept(
            "GET",
            `https://pokeapi.co/api/v2/evolution-chain/${pokemonEvolutionId}/`
        ).as("evolutionRequest");
        cy.searchPokemon(pokemon);
        cy.wait("@evolutionRequest").then(({ response }) => {
            expect(response.statusCode).to.equal(200);
            expect(response.body.id).to.equal(pokemonEvolutionId);
        });
    });

    it("Testing searching pokemons from evolution chain", () => {
        const pokemons = ["pichu", "pikachu", "raichu"];
        cy.intercept("GET", `https://pokeapi.co/api/v2/pokemon/**`).as(
            "allPokemons"
        );
        cy.searchPokemon(pokemon);
        cy.wait(["@allPokemons", "@allPokemons", "@allPokemons"]).then(
            (response) => {
                cy.log(response);
                response.forEach(({ response }, index) => {
                    expect(pokemons).to.be.include(response.body.name);
                    expect(response.statusCode).to.be.equal(200);
                });
            }
        );
    });
});
