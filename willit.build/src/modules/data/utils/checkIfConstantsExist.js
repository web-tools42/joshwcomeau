/**
 * This module uses module.export because it's used by
 * gatsby-node.js
 */

const { contentSourceIds, siteTypeIds } = require("../../../../base-constants")

module.exports = function checkIfConstantsExist({
  id,
  contentSource,
  siteType,
}) {
  if (!contentSourceIds.includes(contentSource)) {
    console.warn(
      `There is no value for 'ContentSource[${contentSource}]' so metrics for the '${contentSource}' value of 'contentSource' are ommited (id: ${id}). Please update 'base-constants.js' file.`
    )
    return false
  }

  if (!siteTypeIds.includes(siteType)) {
    console.warn(
      `There is no value for 'SiteType[${siteType}]' so metrics for the '${siteType}' value of 'contentSource' are ommited (id: ${id}). Please update 'base-constants.js' file.`
    )
    return false
  }

  return true
}
