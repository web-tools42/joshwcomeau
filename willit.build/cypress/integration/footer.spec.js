describe("Footer", () => {
  beforeEach(() => {
    // Just go on an page that has the header
    cy.visit("/")
  })

  it("should some internal navigation links", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.get('[href="/faq"]').should("be.visible")
      // The API playground link is special, since it's not actually a
      // client-side link.
      cy.get('[href="https://willit.build/api-playground"]').should(
        "be.visible"
      )
      cy.get('[href="/calculator"]').should("be.visible")
    })
  })

  it("should own some information about the project", () => {
    cy.get("[data-cy=footer-note__content").should("be.visible")
  })

  it("should own some external links", () => {
    cy.get("[data-cy=footer]").within(() => {
      cy.contains("Gatsby Cloud")
        .should("be.visible")
        .and("have.attr", "href")
        .and("contain", "https://www.gatsbyjs.com/get-started")

      cy.get('[href="https://github.com/gatsbyjs/gatsby"]').should("be.visible")
      cy.get('[href="https://twitter.com/gatsbyjs"]').should("be.visible")

      cy.contains("Contact us")
        .should("be.visible")
        .and("have.attr", "href")
        .and("contain", "https://www.gatsbyjs.com/contact-us")
    })
  })
})
