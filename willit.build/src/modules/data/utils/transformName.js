/**
 * This module uses module.export because it's used by
 * gatsby-node.js
 */

module.exports.toLowerDashCase = name => {
  return name.toLowerCase().replace("_", "-")
}

module.exports.toCamelCase = name => {
  return name
    .toLowerCase()
    .split(" ")
    .map((item, idx) => {
      if (idx > 0) {
        return `${item[0].toUpperCase()}${item.substr(1)}`
      }

      return item
    })
    .join("")
}
