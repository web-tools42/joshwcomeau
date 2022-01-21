import fs from "fs"
import pify from "pify"
import minimatch from "minimatch"

export const withoutTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``)

export const writeFile = pify(fs.writeFile)
export const renameFile = pify(fs.rename)

export const runQuery = (handler, query, excludes, pathPrefix) =>
  handler(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(`, `))
    }

    // Removing excluded paths
    r.data.allSitePage.edges = r.data.allSitePage.edges.filter(
      page =>
        !excludes.some(excludedRoute =>
          minimatch(withoutTrailingSlash(page.node.path), excludedRoute)
        )
    )

    // Add path prefix
    r.data.allSitePage.edges = r.data.allSitePage.edges.map(page => {
      page.node.path = (pathPrefix + page.node.path).replace(/^\/\//g, `/`)
      return page
    })

    // siteUrl Validation
    if (
      !r.data.site.siteMetadata.siteUrl ||
      r.data.site.siteMetadata.siteUrl.trim().length == 0
    ) {
      throw new Error(
        `SiteMetaData 'siteUrl' property is required and cannot be left empty. Check out the documentation to see a working example: https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use`
      )
    }

    // remove trailing slash of siteUrl
    r.data.site.siteMetadata.siteUrl = withoutTrailingSlash(
      r.data.site.siteMetadata.siteUrl
    )

    return r.data
  })

export const defaultOptions = {
  query: `
    {
      site {
        siteMetadata {
          siteUrl
        }
      }

      allSitePage {
        edges {
          node {
            path
          }
        }
      }
  }`,
  output: `/sitemap.xml`,
  exclude: [
    `/dev-404-page`,
    `/404`,
    `/404.html`,
    `/offline-plugin-app-shell-fallback`,
  ],
  createLinkInHead: true,
  serialize: ({ site, allSitePage }) =>
    allSitePage.edges.map(edge => {
      return {
        url: site.siteMetadata.siteUrl + edge.node.path,
        changefreq: `daily`,
        priority: 0.7,
      }
    }),
}
