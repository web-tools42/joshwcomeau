import React from "react"
import { Link as BaseLink } from "gatsby-interface"
import { getTextGradientStyle } from "@modules/ui/utils"
import { MdArrowBack } from "react-icons/md"
import { SiteType, ContentSource } from "@modules/data/constants"

const SOURCE_ICON_WIDTH = `22px`
const SOURCE_ICON_HORIZONTAL_OFFSET = `30px`

export const smallTextCss = theme => ({
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[1],
})

function Link({ children, ...rest }) {
  return (
    <BaseLink
      to="/"
      css={theme => [
        smallTextCss(theme),
        {
          textDecoration: `none`,
        },
      ]}
      {...rest}
    >
      {children}
    </BaseLink>
  )
}

export function BackLink() {
  return (
    <Link
      data-cy="siteDetails__backLink"
      to="/"
      css={theme => ({
        [theme.mediaQueries.desktop]: {
          transform: `translateX(-${SOURCE_ICON_HORIZONTAL_OFFSET})`,
          marginLeft: `-2px`, // nullifies svg white spaceimport transformName from "@modules/data/utils/transformName"
        },
      })}
    >
      <MdArrowBack
        css={theme => ({
          marginRight: theme.space[2],
        })}
      />
      Back to all sites
    </Link>
  )
}

export function HeaderTitle({ contentSource }) {
  const { displayedAs, gradient, Icon } = ContentSource[contentSource] || {}
  const { start, end } = gradient || {}

  return (
    <h1
      data-cy="siteDetails__headerTitle"
      css={theme => [
        {
          alignItems: `center`,
          display: `flex`,
          fontSize: theme.fontSizes[6],

          [theme.mediaQueries.desktop]: {
            position: `relative`,
            fontSize: theme.fontSizes[10],
            lineHeight: 1,
            marginBottom: `-.1em`,
          },
        },
        gradient ? getTextGradientStyle(theme, start, end, `90deg`) : {},
      ]}
    >
      {Icon && (
        <Icon
          css={theme => ({
            width: SOURCE_ICON_WIDTH,
            height: SOURCE_ICON_WIDTH,
            marginRight: theme.space[2],

            [theme.mediaQueries.desktop]: {
              position: `absolute`,
              top: 0,
              left: 0,

              transform: `translate(-${SOURCE_ICON_HORIZONTAL_OFFSET}, 0.15em)`,
            },
          })}
        />
      )}
      {displayedAs ? displayedAs : contentSource}
    </h1>
  )
}

export function HeaderSiteType({ siteType }) {
  const { displayedAs, Icon } = SiteType[siteType] || {}

  return (
    <div
      data-cy="siteDetails__siteType"
      css={theme => [
        smallTextCss(theme),
        {
          alignItems: `center`,
          display: `inline-flex`,
          marginLeft: theme.space[1],
          marginTop: theme.space[3],

          [theme.mediaQueries.desktop]: {
            marginLeft: theme.space[6],
            marginTop: 0,
          },
        },
      ]}
    >
      {Icon && (
        <Icon
          css={theme => ({
            marginRight: theme.space[2],
          })}
        />
      )}
      {displayedAs ? displayedAs : siteType}
    </div>
  )
}
