import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import marked from "marked"
import { pageHeadingCss } from "@modules/ui/styles"

const Methodology = () => {
  const { contentfulMethodology } = useStaticQuery(graphql`
    {
      contentfulMethodology {
        title
        description {
          description
        }
        subheading {
          subheading
        }
      }
    }
  `)

  const title = contentfulMethodology.title
  const description = contentfulMethodology.description.description
  const subheading = contentfulMethodology.subheading.subheading

  return (
    <div>
      <header>
        <h1 css={pageHeadingCss}>{title}</h1>
        <p
          css={theme => ({
            color: theme.colors.blackFade[80],
            fontFamily: theme.fonts.body,
            fontWeight: theme.fontWeights.body,
            maxWidth: `100%`,
            lineHeight: theme.lineHeights.default,

            marginBottom: theme.space[10],
            [theme.mediaQueries.tablet]: {
              maxWidth: `65%`,
              fontSize: theme.fontSizes[5],
            },
          })}
        >
          {subheading}
        </p>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: marked(description) }}
        css={theme => ({
          color: theme.colors.blackFade[80],
          fontFamily: theme.fonts.body,
          maxWidth: `100%`,
          lineHeight: theme.lineHeights.default,
          marginBottom: theme.space[10],

          p: {
            paddingTop: theme.space[4],
          },
          [theme.mediaQueries.tablet]: {
            maxWidth: `65%`,
            fontSize: theme.fontSizes[3],
          },
        })}
      />
    </div>
  )
}

export default Methodology
