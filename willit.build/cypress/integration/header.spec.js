describe("Header", () => {
  beforeEach(() => {
    // Just go on an page that has the header
    cy.visit("/")
  })

  it("should own the product name", () => {
    cy.get("[data-cy=header]").should("be.visible")

    cy.get("[data-cy=header-brand__link]")
      .should("be.visible")
      .and("have.attr", "href", "/")
      .and("contain.text", "Will It Build?")
  })

  it("should own valid menu links", () => {
    cy.get("[data-cy=header]").within(() => {
      cy.get('[href="/faq"]').should("be.visible")
      cy.get('[href="/calculator"]').should("be.visible")
    })
  })
})
