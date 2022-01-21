import React from "react"
import { Link, Tooltip } from "gatsby-interface"

import helpCircleSrc from "../../../images/help-circle.svg"

const helpCircleWrapperStyles = _theme => ({
  display: `inline-block`,
  verticalAlign: `middle`,
  marginLeft: 5,
  position: `relative`,
})

const helpCircleStyles = _theme => ({
  width: 14,
  height: 14,
})

// The tooltip makes for a very small click/tap target. This invisible
// box extends that size.
const innerTriggerGrowerStyles = _theme => ({
  position: `absolute`,
  top: -5,
  left: -5,
  right: -5,
  bottom: -5,
})

const labelWrapperStyles = _theme => ({
  maxWidth: 200,
})

const HelpCircle = ({ helpInfo, href }) => {
  return (
    <Tooltip label={<div css={labelWrapperStyles}>{helpInfo}</div>}>
      <span>
        <Link href={href} css={helpCircleWrapperStyles}>
          <img src={helpCircleSrc} css={helpCircleStyles} alt={helpInfo} />
          <div css={innerTriggerGrowerStyles} />
        </Link>
      </span>
    </Tooltip>
  )
}

export default HelpCircle
