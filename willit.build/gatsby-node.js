const moduleAliases = require(`./module-aliases`)

const { pageCountIds, BaseBuildType } = require("./base-constants")
const formatPath = require("./src/modules/data/utils/formatPath")
const checkIfConstantsExist = require("./src/modules/data/utils/checkIfConstantsExist")

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {
  // Handle our API Playground redirects.
  // NOTE: This works because we're using `gatsby-plugin-netlify`. So these
  // redirects happen outside of Gatsby altogether.
  createRedirect({
    fromPath: `/api-playground`,
    toPath: `https://analytics.staging.gtsb.io/metrics/graphql`,
    statusCode: 200,
    force: true,
  })
  createRedirect({
    fromPath: `/metrics/graphql`,
    toPath: `https://analytics.staging.gtsb.io/metrics/graphql`,
    statusCode: 200,
    force: true,
  })

  const result = await graphql(
    `
      {
        benchmarkApi {
          benchmarkVendors {
            id
            contentSource
            siteType

            # following part is a temporary solution to check if there is data for particular pageCounts
            # we need to update api the way that it returns an array of all available BenchmarkLatestStats
            # if there is no arguments in query (not specified numberOfPages)

            latest512: latest(numberOfPages: 512) {
              coldStart {
                timeInMs
              }
              warmStart {
                timeInMs
              }
              dataUpdate {
                timeInMs
              }
            }
            latest4096: latest(numberOfPages: 4096) {
              coldStart {
                timeInMs
              }
              warmStart {
                timeInMs
              }
              dataUpdate {
                timeInMs
              }
            }
            latest8192: latest(numberOfPages: 8192) {
              coldStart {
                timeInMs
              }
              warmStart {
                timeInMs
              }
              dataUpdate {
                timeInMs
              }
            }
            latest32768: latest(numberOfPages: 32768) {
              coldStart {
                timeInMs
              }
              warmStart {
                timeInMs
              }
              dataUpdate {
                timeInMs
              }
            }
          }
        }
      }
    `
  )

  const activeBenchmarks = result.data.benchmarkApi.benchmarkVendors.reduce(
    (acc, item) => {
      const {
        id,
        contentSource,
        siteType,
        latest512: { dataUpdate: du512, warmStart: ws512, coldStart: cs512 },
        latest4096: {
          dataUpdate: du4096,
          warmStart: ws4096,
          coldStart: cs4096,
        },
        latest8192: {
          dataUpdate: du8192,
          warmStart: ws8192,
          coldStart: cs8192,
        },
        latest32768: {
          dataUpdate: du32768,
          warmStart: ws32768,
          coldStart: cs32768,
        },
      } = item

      const pageCounts = {
        "512": du512.length && ws512.length && cs512.length,
        "4096": du4096.length && ws4096.length && cs4096.length,
        "8192": du8192.length && ws8192.length && cs8192.length,
        "32768": du32768.length && ws32768.length && cs32768.length,
      }

      const activePageCounts = Object.entries(pageCounts).reduce(
        (acc, [key, val]) => {
          if (val) {
            return [...acc, key]
          }
          return acc
        },
        []
      )

      if (contentSource && siteType && activePageCounts.length) {
        return [...acc, { id, contentSource, siteType, activePageCounts }]
      }

      return acc
    },
    []
  )

  activeBenchmarks.forEach(
    ({ id, contentSource, siteType, activePageCounts }) => {
      activePageCounts.forEach(pageCount => {
        // prevents creating pages for newly added benchmarks if there is no
        // coresponding meta constants
        // the checkIfConstantsExist helper prints console.warn if there is
        // no coresponding constants
        if (!checkIfConstantsExist({ id, contentSource, siteType })) {
          return
        }

        createPage({
          path: formatPath({
            prefix: `details`,
            siteType,
            contentSource,
            pageCount,
          }),
          component: require.resolve(
            `./src/modules/siteDetails/components/SiteDetailsPage.js`
          ),
          context: {
            id,
            pageCount: Number(pageCount),
            contentSource,
            siteType,
            activeBenchmarks,
          },
        })

        createPage({
          path: formatPath({
            prefix: `calculator`,
            siteType,
            contentSource,
            pageCount,
          }),
          component: require.resolve(
            `./src/modules/calculator/components/CalculatorPage.js`
          ),
          context: {
            pageCount: Number(pageCount),
            contentSource,
            activeBenchmarks,
            siteType,
          },
        })
      })
    }
  )

  const defaultCalculatorContentSource =
    result.data.benchmarkApi.benchmarkVendors[0].contentSource
  const defaultCalculatorSiteType =
    result.data.benchmarkApi.benchmarkVendors[0].siteType

  createPage({
    path: `/calculator`,
    component: require.resolve(
      `./src/modules/calculator/components/CalculatorPage.js`
    ),
    context: {
      pageCount: Number(pageCountIds[0]),
      contentSource: defaultCalculatorContentSource,
      activeBenchmarks,
      siteType: defaultCalculatorSiteType,
    },
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: moduleAliases,
    },
  })
}
