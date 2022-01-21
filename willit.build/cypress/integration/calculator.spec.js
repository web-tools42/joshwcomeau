import { BaseContentSource, BasePageCount } from "../../base-constants"

const formatPath = require("../../src/modules/data/utils/formatPath")

const SITE_TYPE = `BLOG`
const INITIAL_CONTENT_SOURCE = `DATOCMS`
const NEW_CONTENT_SOURCE = `CONTENTFUL`
const NEW_BUILD_TYPE = `WARM_START`
const INITIAL_PAGE_COUNT = `512`
const NEW_PAGE_COUNT = `4096`

const INITIAL_PATH = formatPath({
  prefix: `calculator`,
  siteType: SITE_TYPE,
  contentSource: INITIAL_CONTENT_SOURCE,
  pageCount: INITIAL_PAGE_COUNT,
})

const NEW_PAGE_COUNT_PATH = formatPath({
  prefix: `calculator`,
  siteType: SITE_TYPE,
  contentSource: INITIAL_CONTENT_SOURCE,
  pageCount: NEW_PAGE_COUNT,
})

const NEW_CONTENT_SOURCE_PATH = formatPath({
  prefix: `calculator`,
  siteType: SITE_TYPE,
  contentSource: NEW_CONTENT_SOURCE,
  pageCount: INITIAL_PAGE_COUNT,
})

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit(INITIAL_PATH)
  })

  it("should verify that the Calculator contains some default layout information", () => {
    // Main content
    cy.get("[data-cy=calculator__title]")
      .should("be.visible")
      .and("contain", "Build time calculator")

    cy.get("[data-cy=calculator__description]")
      .should("be.visible")
      .and(
        "contain",
        "The Will It Build build time calculator provides an estimation of build time in Gatsby Cloud."
      )

    // Social links
    cy.get("[data-cy=social-link__twitter]").should("be.visible")
    cy.get("[data-cy=social-link__share]").should("be.visible")
    cy.get("[data-cy=social-link__clipboard-copy]").should("be.visible")

    // Source and Page dropdown
    cy.get("[id=content-source-control]").should("be.visible")
    cy.get("[id=page-count-control]").should("be.visible")

    // Calculator metrics
    cy.contains("Indicates a data change", { matchCase: false }).should(
      "be.visible"
    )
    cy.contains("Indicates a cached code change", { matchCase: false }).should(
      "be.visible"
    )
    cy.contains("Indicates an uncached code change", {
      matchCase: false,
    }).should("be.visible")
  })

  it("should redirect to a proper page when Pages dropdown value changes", () => {
    cy.get("[id=page-count-control]")
      .should("be.visible")
      .select(NEW_PAGE_COUNT)

    cy.url().should("contain", NEW_PAGE_COUNT_PATH)

    cy.get("[data-cy=page-count-control-fake]")
      .should("be.visible")
      .and("contain", BasePageCount[NEW_PAGE_COUNT].displayedAs)

    cy.get("[id=page-count-control]")
      .should("be.visible")
      .and("have.value", NEW_PAGE_COUNT)
  })

  it("should redirect to a proper page when Content Source dropdown value changes", () => {
    cy.get("[id=content-source-control]")
      .should("be.visible")
      .select(NEW_CONTENT_SOURCE)

    cy.url().should("contain", NEW_CONTENT_SOURCE_PATH)

    cy.get("[data-cy=content-source-control-fake]")
      .should("be.visible")
      .and("contain", BaseContentSource[NEW_CONTENT_SOURCE].displayedAs)

    cy.get("[id=content-source-control]")
      .should("be.visible")
      .and("have.value", NEW_CONTENT_SOURCE)
  })
})
