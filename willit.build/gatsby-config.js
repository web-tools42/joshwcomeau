const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || `development`

console.info(`Using environment config: '${activeEnv}'`)

if (process.env.LOCAL_DEV) {
  console.info(`Loading dot env config: '${activeEnv}'`)
  require(`dotenv`).config({
    path: `.env.${activeEnv}`,
  })
}

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    (process.env.GATSBY_ENV || process.env.NODE_ENV) === `production`
      ? process.env.CONTENTFUL_LIVE_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host:
    (process.env.GATSBY_ENV || process.env.NODE_ENV) === `production`
      ? undefined
      : process.env.CONTENTFUL_HOST,
}

module.exports = {
  siteMetadata: {
    title: `Will It Build?`,
    description: `Will it build? That is the question. Gatsby sites are increasingly being used for larger and more ambitious projects, and Will It Build lets developers learn how much time it'll take to build large, complex projects at scale.`,
    author: `@gatsbyjs`,
    url: `https://willit.build`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/json`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/willitbuild-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "BenchmarkVendors",
        fieldName: "benchmarkApi",
        url: `${process.env.GATSBY_GRAPHQL_URL}`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
