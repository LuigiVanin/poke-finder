describe("Application layout when pokemon is loaded", () => {
    beforeEach(() => {
        cy.visitWebSite();
    });

    it("check pokemon selection result", () => {
        cy.afterSearchPikachu((responses) => {
            cy.get(".selection").should("be.visible");
            cy.get(".card").should("be.visible");
            cy.get(".selection .pokemon").then((items) => {
                expect(items).to.length(3);
                items.each((item, idx) => {
                    if (idx === 1) {
                        expect(item).has.class("selected");
                    }
                });
            });
        });
    });

    it("check pokemon card result", () => {
        cy.afterSearchPikachu((responses) => {
            cy.get(".card").contains("pikachu");
            cy.get(".card header ul button")
                .eq(0)
                .should("have.class", "selected")
                .contains("normal");

            cy.get(".card header ul button")
                .eq(1)
                .should("have.class", "disable")
                .contains("shiny");

            cy.get(".content")
                .should("have.css", "height", "0px")
                .and("have.class", "collapse");
        });
    });

    it("checking pokemon card interaction", () => {
        cy.afterSearchPikachu((responses) => {
            cy.get(".card header ul button")
                .eq(1)
                .should("have.class", "disable")
                .click()
                .should("have.class", "selected");

            cy.get(".card header ul button")
                .eq(0)
                .should("have.class", "disable")
                .click()
                .should("have.class", "selected");

            cy.get(".content")
                .should("have.css", "height", "0px")
                .and("have.class", "collapse");

            cy.get(".rotate").should("not.exist");

            cy.get("main h1")
                .click({ multiple: true })
                .get(".rotate")
                .should("exist");

            cy.get(".content")
                .should("have.css", "height", "200px")
                .and("not.have.class", "collapse");

            cy.get("main h1")
                .click({ multiple: true })
                .get(".rotate")
                .should("not.exist");
        });
    });
});
