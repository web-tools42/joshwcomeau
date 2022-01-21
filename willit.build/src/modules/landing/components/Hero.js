import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import DecorativeBackground from "../assets/DecorativeBackground"
import { HERO_PADDING_DESKTOP } from "../constants"
import { pageHeadingCss } from "@modules/ui/styles"

const Hero = () => {
  const { contentfulHomepage } = useStaticQuery(graphql`
    {
      contentfulHomepage {
        description {
          description
        }
        button
        header
      }
    }
  `)

  const title = contentfulHomepage.header
  const description = contentfulHomepage.description.description

  return (
    <header>
      <div
        css={theme => ({
          zIndex: `1`,
          position: `relative`,

          [theme.mediaQueries.phablet]: {
            paddingLeft: HERO_PADDING_DESKTOP,
            paddingTop: theme.space[8],
          },
        })}
      >
        <h1 data-cy="main-title" css={pageHeadingCss}>
          {title}
        </h1>
        <p
          data-cy="main-description"
          css={theme => ({
            color: theme.colors.grey[90],
            fontSize: theme.fontSizes[2],
            lineHeight: theme.lineHeights.default,
            fontFamily: theme.fonts.body,
            maxWidth: `100%`,
            marginBottom: theme.space[10],
            [theme.mediaQueries.tablet]: {
              fontSize: theme.fontSizes[3],
              maxWidth: `70%`,
            },
          })}
        >
          {description}
        </p>
      </div>
      <div
        css={{
          zIndex: `-1`,
          position: `absolute`,
          left: `-20vw`,
          right: 0,
          top: `-20vw`,
          width: `80vw`,
          overflow: `hidden`,
        }}
      >
        <DecorativeBackground css={{ width: `100%` }} />
      </div>
    </header>
  )
}

export default Hero
