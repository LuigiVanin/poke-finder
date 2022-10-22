/// <reference types="cypress" />

import { generateText } from "../../utils/fabric";

describe("Testing all my components from landing page", () => {
    beforeEach(() => {
        cy.visitWebSite();
    });

    it("Testing landing page - checking if the components are all loaded", () => {
        cy.get("h1.title").should("contain", "Search Pokemons By its *name*");
        cy.log(
            "If the above assertion succed it means the website is at the correct page"
        );

        cy.get(".wrapper h1")
            .should("be.visible")
            .should("contain", "Nenhum Pokemon Econtrado!");

        cy.log(
            "If the above assertion succed it means that the website has no found pokemons yet"
        );
    });

    it("Testing header components - checking if everything is at its place", () => {
        cy.get("header .wrapper h1").contains("Poke Finder");
        cy.get(".btn").contains("Random");
    });

    it("Test form - checking if form components are equal with the expected", () => {
        cy.get("form input")
            .should("be.empty")
            .get("form button")
            .contains("Search")
            .should(
                "have.css",
                "background",
                "rgb(211, 178, 233) none repeat scroll 0% 0% / auto padding-box border-box"
            )
            .get("form button ion-icon[name=search]")
            .should("exist");
    });

    it("Testing form components integrity - typing, hovering and clicking", () => {
        const text = generateText(10);
        cy.getAndType("form input", text).should("have.value", text);

        cy.get("form button")
            .trigger("mouseover")
            .should(
                "have.css",
                "background",
                "rgb(211, 178, 233) none repeat scroll 0% 0% / auto padding-box border-box"
            )
            .click();

        cy.get(".loader").should("be.visible");
    });
});
