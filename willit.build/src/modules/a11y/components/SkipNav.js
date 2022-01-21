import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { colors, space, radii } from "gatsby-interface"

import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

const SKIP_TARGET_ID = `gatsby-skip-here`

const triggerPropTypes = {
  children: PropTypes.element,
}

export const SkipNavTrigger = ({ children = `Skip to content` }) => {
  const [hasAValidTarget, setHasAValidTarget] = React.useState(false)

  React.useLayoutEffect(() => {
    const target = document.querySelector(`#${SKIP_TARGET_ID}`)

    if (!!target && !hasAValidTarget) {
      setHasAValidTarget(true)
    }
  }, [hasAValidTarget, setHasAValidTarget])

  // If we've rendered the trigger, but there is no target available, we don't
  // want to show the trigger. Doing so would just be frustrating, since it
  // wouldn't skip anything.
  if (!hasAValidTarget) {
    return null
  }

  return <TriggerAnchor href={`#${SKIP_TARGET_ID}`}>{children}</TriggerAnchor>
}

SkipNavTrigger.propTypes = triggerPropTypes

export const SkipNavTarget = () => (
  <div id={SKIP_TARGET_ID} style={{ contain: `none` }} />
)

const TriggerAnchor = styled.a(visuallyHiddenCss, {
  position: `fixed`,
  zIndex: `9999999`,
  top: space[7],
  left: space[7],
  padding: space[5],
  borderRadius: radii[2],
  background: colors.white,
  color: colors.blue[70],
  textDecoration: `none`,

  "&:focus": {
    width: `auto`,
    height: `auto`,
    clip: `auto`,
  },
})
