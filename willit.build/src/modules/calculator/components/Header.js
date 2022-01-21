import React from "react"

import SocialLinks from "@modules/ui/components/SocialLinks"
import { pageHeadingCss } from "@modules/ui/styles"

const headerStyles = theme => [
  pageHeadingCss(theme),
  {
    margin: 0,
    maxWidth: `none`,
  },
]

const topRowCss = theme => ({
  display: `flex`,
  flexDirection: "column",
  position: `relative`,
  paddingBottom: theme.space[5],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,

  [theme.mediaQueries.tablet]: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `baseline`,
  },
})

const socialLinksWrapperCss = theme => ({
  [theme.mediaQueries.mobile]: {
    paddingTop: theme.space[6],
    alignSelf: `flex-end`,
  },
})

const blurbWrapperCss = theme => ({
  fontSize: theme.fontSizes[1],
  color: theme.colors.grey[60],
  paddingTop: theme.space[7],
  paddingBottom: theme.space[7],
  marginBottom: theme.space[7],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
})

const blurbCss = theme => ({
  maxWidth: 500,
  marginBottom: theme.space[6],
  lineHeight: theme.lineHeights.default,
})

const Header = ({ siteType, contentSource, pageCount }) => {
  return (
    <header>
      <div css={topRowCss}>
        <h1 css={headerStyles} data-cy="calculator__title">
          Build time calculator
        </h1>
        <div css={socialLinksWrapperCss}>
          <SocialLinks
            siteType={siteType}
            contentSource={contentSource}
            pageCount={pageCount}
          />
        </div>
      </div>
      <div css={blurbWrapperCss}>
        <p css={blurbCss} data-cy="calculator__description">
          The Will It Build build time calculator provides an estimation of
          build time in Gatsby Cloud.
        </p>
      </div>
    </header>
  )
}

export default Header
