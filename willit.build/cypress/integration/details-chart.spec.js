import { BaseBuildType } from "../../base-constants"

const formatPath = require("../../src/modules/data/utils/formatPath")

const CONTENT_SOURCE = `DATOCMS`
const SITE_TYPE = `BLOG`
const BUILD_TYPE = `WARM_START`
const PAGE_COUNT = `512`

const chartPagePath = formatPath({
  prefix: `details`,
  siteType: SITE_TYPE,
  contentSource: CONTENT_SOURCE,
  pageCount: PAGE_COUNT,
  buildType: BaseBuildType[BUILD_TYPE].displayedAs,
})

describe("DetailsChart", () => {
  beforeEach(() => {
    cy.visit(chartPagePath)
  })

  it("should show/hide tooltip on mouseover/mouseout", () => {
    cy.get("[data-cy=main-chart] .recharts-surface").trigger("mouseover")
    cy.get("[data-cy=chart-tooltip]").should("be.visible")

    cy.get("[data-cy=main-chart] .recharts-surface").trigger("mouseout")
    cy.get("[data-cy=chart-tooltip]").should("not.be.visible")
  })

  it("tooltip should contain metrics for all dates", () => {
    cy.get("[data-cy=main-chart] .recharts-surface").trigger("mouseover")

    cy.get("[data-cy=chart-tooltip-metric]").should("have.length", 3)

    cy.get("[data-cy=chart-tooltip-metric]").each(el => {
      cy.get("[data-cy=chart-tooltip-value]", { withinSubject: el })
        .should("be.visible")
        .contains(/\d+m\s\d{1,2}s|Error/gi)
    })

    cy.get("[data-cy=chart-tooltip-date]").should("be.visible")
  })

  it("should hide/show lines on toggle of legend buttons", () => {
    // in current implementation there is not way to add identifier to the sub svg elements
    // which existence we will test so we have to rely on this long selector
    const pathSelector =
      ".main-chart-area > .recharts-layer > .recharts-layer > .recharts-layer > path"

    // there are always 2 paths per line (one for the true line
    // there are 3 potential states
    const INITIAL_NUMBER_OF_PATHS = 2 * 3
    const UPDATED_NUMBER_OF_PATHS = 2 * 2

    cy.get(pathSelector)
      .filter(":visible")
      .its("length")
      .should("be.eq", INITIAL_NUMBER_OF_PATHS)

    cy.get("[data-cy=chart-legend-item]")
      .first()
      .find("input")
      .uncheck({ force: true })

    // after one uncheck there should one line less
    cy.get(pathSelector)
      .filter(":visible")
      .its("length")
      .should("be.eq", UPDATED_NUMBER_OF_PATHS)
  })
})
