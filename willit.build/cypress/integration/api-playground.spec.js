describe("API Playground", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should load the API playground", async () => {
    cy.get('[href="https://willit.build/api-playground"]')
      .first()
      // Need to remove the `target="_blank"` since Cypress doesn't work
      // across multiple tabs
      .invoke("removeAttr", "target")
      .click()

    cy.get(".graphiql-wrapper").should("be.visible")
  })
})
