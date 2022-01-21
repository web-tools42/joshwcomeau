import {
  contentSourceIds,
  contentSourceDisplayedAsRegExp,
  pageCountDisplayedAsRegExp,
} from "../../base-constants"

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should contain common page layout sections", () => {
    cy.get("[data-cy=header]").should("be.visible")
    cy.get("[data-cy=footer]").should("be.visible")
  })

  it("should contain all Hero elements", () => {
    cy.get("[data-cy=main-title]").should("be.visible")
    cy.get("[data-cy=main-description]").should("be.visible")
  })

  it("should contain cards for all active benchmarks", () => {
    const NUMBER_OF_BENCHMARKS = contentSourceIds.filter(
      // we exclude COSMICJS because for now there is no data for it
      item => item !== `COSMICJS`
    ).length

    cy.get("[data-cy=build-card")
      .its("length")
      .should("be.eq", NUMBER_OF_BENCHMARKS)
  })

  it("cards should contain all required elements", () => {
    cy.get("[data-cy=build-card").each((el, idx) => {
      cy.get("[data-cy=build-card__link]", { withinSubject: el }).should(
        "be.visible"
      )

      cy.get("[data-cy=build-card__source]", { withinSubject: el })
        .contains(`Source / Type`, { matchCase: false })
        .should("be.visible")

      cy.get("[data-cy=build-card__source]", { withinSubject: el })
        .contains(new RegExp(contentSourceDisplayedAsRegExp, "g"))
        .should("be.visible")

      cy.get("[data-cy=build-card__pages]", { withinSubject: el })
        .contains(`Pages`, { matchCase: false })
        .should("be.visible")

      cy.get("[data-cy=build-card__pages]", { withinSubject: el })
        .contains(new RegExp(pageCountDisplayedAsRegExp))
        .should("be.visible")

      cy.get("[data-cy=build-card__stats]", { withinSubject: el })
        .contains(`Build Times`, { matchCase: false })
        .should("be.visible")

      cy.get("[data-cy=build-card__stats]", { withinSubject: el })
        .contains(/\d+m\s\d{1,2}s/gi)
        .should("be.visible")
    })
  })

  it("card link should redirect to a working Site Details page", () => {
    cy.get("[data-cy=build-card__link]")
      .first()
      .click()

    cy.get("[data-cy=siteDetails__headerTitle]").should($title => {
      const title = $title.text()
      const text = $title.text()
      expect(text).to.match(new RegExp(contentSourceDisplayedAsRegExp, "g"))
    })
  })
})
