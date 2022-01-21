context("All pages", () => {
  it("audits the homepage", () => {
    cy.visit("/")
    cy.audit({
      performance: 90,
      accessibility: 100,
      "best-practices": 78,
      seo: 70,
      pwa: 50,
    })
  })

  it("audits the FAQ", () => {
    cy.visit("/faq")
    cy.audit({
      performance: 90,
      accessibility: 100,
      "best-practices": 78,
      seo: 70,
      pwa: 59,
    })
  })

  it("audits the calculator", () => {
    cy.visit("/calculator/type/blog/source/datocms/page-count/512")
    cy.audit({
      performance: 90,
      accessibility: 100,
      "best-practices": 78,
      seo: 70,
      pwa: 40,
    })
  })
})
