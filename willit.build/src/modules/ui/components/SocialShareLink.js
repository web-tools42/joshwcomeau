import React from "react"
import PropTypes from "prop-types"

import { Button, shadows, colors } from "gatsby-interface"

const propTypes = {
  Icon: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export const SocialShareIcon = ({ Icon, url, label, ...props }) => {
  return (
    <Button
      tone={`NEUTRAL`}
      size={`S`}
      aria-label={label}
      css={{
        backgroundColor: `transparent`,
        border: `none`,
        padding: 0,
        cursor: `pointer`,
        "&[disabled]": {
          cursor: `not-allowed`,
          padding: 0,
          border: `none`,
        },
        ":not([disabled]):hover": {
          background: `transparent`,
          border: `none`,
          padding: 0,
        },
        ":active": {
          boxShadow: shadows.floating,
          padding: 0,
        },
      }}
      onClick={() => {
        if (window) {
          window.open(url, `_blank`, `height=500,width=500`)
        }
      }}
      {...props}
    >
      <Icon fill={colors.grey[40]} />
    </Button>
  )
}

SocialShareIcon.propTypes = propTypes

export default SocialShareIcon
