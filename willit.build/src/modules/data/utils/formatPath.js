/**
 * This module uses module.export because it's used by
 * gatsby-node.js
 */
const { toLowerDashCase } = require("./transformName")

module.exports = function formatPath({
  prefix,
  siteType,
  contentSource,
  pageCount,
}) {
  return `/${prefix}/type/${toLowerDashCase(siteType)}/source/${toLowerDashCase(
    contentSource
  )}/page-count/${pageCount}`
}
