import {
  BaseContentSource,
  BasePageCount,
  BaseSiteType,
  BaseBuildType,
} from "../../base-constants"

const formatPath = require("../../src/modules/data/utils/formatPath")

const CONTENT_SOURCE = `DATOCMS`
const SITE_TYPE = `BLOG`
const INITIAL_BUILD_TYPE = `WARM_START`
const NEW_BUILD_TYPE = `COLD_START`
const INITIAL_PAGE_COUNT = `512`
const NEW_PAGE_COUNT = `4096`

const INITIAL_PATH = formatPath({
  prefix: `details`,
  siteType: SITE_TYPE,
  contentSource: CONTENT_SOURCE,
  pageCount: INITIAL_PAGE_COUNT,
  buildType: BaseBuildType[INITIAL_BUILD_TYPE].displayedAs,
})

const NEW_PAGE_COUNT_PATH = formatPath({
  prefix: `details`,
  siteType: SITE_TYPE,
  contentSource: CONTENT_SOURCE,
  pageCount: NEW_PAGE_COUNT,
  buildType: BaseBuildType[INITIAL_BUILD_TYPE].displayedAs,
})

const NEW_BUILD_TYPE_PATH = formatPath({
  prefix: `details`,
  siteType: SITE_TYPE,
  contentSource: CONTENT_SOURCE,
  pageCount: INITIAL_PAGE_COUNT,
  buildType: BaseBuildType[NEW_BUILD_TYPE].displayedAs,
})

describe("SiteDetails page", () => {
  beforeEach(() => {
    cy.visit(INITIAL_PATH)
  })

  it("should contain common page layout sections", () => {
    cy.get("[data-cy=header]").should("be.visible")
    cy.get("[data-cy=footer]").should("be.visible")
  })

  it("should contain all Header elements", () => {
    // back link to Home page
    cy.get("[data-cy=siteDetails__backLink]")
      .should("be.visible")
      .and("have.attr", "href", "/")

    // properly printed title, based on content source id
    cy.get("[data-cy=siteDetails__headerTitle]")
      .should("be.visible")
      .and("contain", BaseContentSource[CONTENT_SOURCE].displayedAs)

    // properly printed site type, based on site type id
    cy.get("[data-cy=siteDetails__siteType]")
      .should("be.visible")
      .and("contain", BaseSiteType[SITE_TYPE].displayedAs)

    cy.get("[data-cy=github-repo-link]")
      .should("be.visible")
      .and("have.attr", "href")
      .and("match", /github/)

    // Social links
    cy.get("[data-cy=social-link__twitter]").should("be.visible")
    cy.get("[data-cy=social-link__share]").should("be.visible")
    cy.get("[data-cy=social-link__clipboard-copy]").should("be.visible")
  })

  it("should contain required Overview elements", () => {
    // page count controler
    cy.contains("label", `Pages`, { matchCase: false }).should("be.visible")
    cy.get("#page-count-control")
      .should("be.visible")
      .and("have.value", INITIAL_PAGE_COUNT)
    cy.get("[data-cy=page-count-control-fake]")
      .should("be.visible")
      .and("contain", BasePageCount[INITIAL_PAGE_COUNT].displayedAs)

    // stats
    cy.get("[data-cy=stat-item")
      .its("length")
      .should("be.gte", 1) // at least one stat section
    cy.get("[data-cy=stat-item").each(el => {
      // item should contain stat value
      cy.get("span", { withinSubject: el })
        .contains(/\d+m\s\d{1,2}s/gi)
        .should("be.visible")
    })
  })

  it("should contain all chart elements", () => {
    // graphs
    cy.get(".recharts-responsive-container")
      .should("have.length", 3) // 3 containers: main chart + mini chart + brush
      .each((el, idx) => {
        el.find(".recharts-wrapper").find(".recharts-surface")

        // main chart container
        if (idx === 0) {
          el.find(".recharts-cartesian-grid")
          el.find(".recharts-yAxis")
          el.find(".recharts-xAxis")
          cy.get(".recharts-area", { withinSubject: el }).should(
            "have.length",
            3
          )
        }

        // mini chart container
        if (idx === 1) {
          el.find(".recharts-cartesian-grid")
          cy.get(".recharts-area", { withinSubject: el }).should(
            "have.length",
            3
          )
        }

        // brush container
        if (idx === 2) {
          el.find(".recharts-brush")
        }
      })

    // legend
    cy.get("[data-cy=chart-legend-item]")
      .its("length")
      .should("be.gte", 1) // there should be at least one controller
  })

  // page count change
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
})
