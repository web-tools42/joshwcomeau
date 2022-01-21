import React from "react"
import PropTypes from "prop-types"

import { controlLabelCss } from "@modules/ui/styles"
import HelpCircle from "@modules/ui/components/HelpCircle"

const statCss = ({ theme }) => ({
  marginBottom: theme.space[8],
  textAlign: `center`,

  [theme.mediaQueries.desktop]: {
    marginBottom: 0,
    textAlign: `left`,
    flex: 1,
  },
})

const statHeaderCss = theme => [
  controlLabelCss(theme),
  {
    lineHeight: theme.lineHeights.body,
    marginBottom: theme.space[3],
    span: {
      display: `block`,
      fontSize: `10px`,
    },

    [theme.mediaQueries.tablet]: {
      span: {
        display: `inline`,
        fontSize: theme.fontSizes[0],
      },
    },
  },
]

const statContentCss = {
  display: `flex`,
  flexDirection: `column`,
}

const statValueCss = ({ theme }) => ({
  color: theme.colors.blackFade[90],
  fontSize: theme.fontSizes[6],
  fontWeight: theme.fontWeights.body,
  // Optically align the numbers with the left edge
  transform: `translateX(-2px)`,

  [theme.mediaQueries.desktop]: {
    color: theme.colors.blackFade[90],
    fontSize: theme.fontSizes[9],
    fontWeight: theme.fontWeights.body,
  },
})

const statDescriptionCss = theme => ({
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[1],
  fontWeight: theme.fontWeights.body,
  marginTop: theme.space[3],
})

const propTypes = {
  time: PropTypes.string.isRequired,
  label: PropTypes.node,
  description: PropTypes.string.isRequired,
}

const Stat = ({ time, label, description }) => {
  return (
    <div css={theme => statCss({ theme })}>
      <h3 css={statHeaderCss}>
        {label}{" "}
        <HelpCircle
          helpInfo="Learn more about our various build types in our Frequently Asked Questions."
          href="/faq#build-type-differences"
        />
      </h3>
      <div css={statContentCss}>
        <span css={theme => statValueCss({ theme })}>{time}</span>
        <span css={statDescriptionCss}>{description} </span>
      </div>
    </div>
  )
}

Stat.propTypes = propTypes

export default Stat
