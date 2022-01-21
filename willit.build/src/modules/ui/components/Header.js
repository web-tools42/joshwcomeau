import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as Interface from "gatsby-interface"

import logoSrc from "../../../images/logo.svg"

import MaxWidthWrapper from "./MaxWidthWrapper"

export const mobileNavMediaQuery = `@media (max-width: 800px)`

const outerWrapperCss = theme => ({
  position: `relative`,
  zIndex: theme.zIndices.dropdowns,
})

const wrapperCss = theme => ({
  display: `flex`,
  justifyContent: `space-between`,
  paddingTop: theme.space[8],
  paddingBottom: theme.space[8],
})

const logoWrapperCss = theme => ({
  textDecoration: `none`,
  fontSize: theme.fontSizes[2],
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.grey[90],
  display: `flex`,
  alignItems: `center`,
})

const logoCss = theme => ({
  display: `block`,
  marginRight: theme.space[7],
})

const Header = () => {
  const data = useStaticQuery(graphql`
    query getHeaderData {
      site {
        siteMetadata {
          title
        }
      }
      contentfulHeaderNavigation(name: { eq: "Main Header" }) {
        button {
          name
          href
        }
        contentfulchildren {
          ... on ContentfulNavigationItem {
            id
            name
            linkTo
          }
        }
      }
    }
  `)

  return (
    <div css={outerWrapperCss}>
      <header data-cy="header">
        <MaxWidthWrapper>
          <div css={wrapperCss}>
            <Link to="/" css={logoWrapperCss} data-cy="header-brand__link">
              <img src={logoSrc} css={logoCss} alt="" />
              {data.site.siteMetadata.title}
            </Link>
            <div>
              <Interface.Navigation
                items={data.contentfulHeaderNavigation.contentfulchildren}
                css={{ nav: { paddingRight: 0 } }}
                mobileNavMediaQuery={mobileNavMediaQuery}
                aria-label="General site navigation in header"
              >
                {data.contentfulHeaderNavigation.button && (
                  <Interface.Navigation.Button
                    linkTo={data.contentfulHeaderNavigation.button.href}
                    css={theme => ({
                      fontFamily: theme.fonts.body,
                      fontSize: theme.fontSizes[1],
                      fontWeight: theme.fontWeights.semiBold,
                    })}
                  >
                    {data.contentfulHeaderNavigation.button.name}
                  </Interface.Navigation.Button>
                )}
              </Interface.Navigation>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Header
