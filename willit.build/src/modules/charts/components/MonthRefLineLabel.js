import React from "react"

const REQUIRED_SPACE_FOR_LABEL = 50

function MonthRefLineLabel(props) {
  const { viewBox, label, controllerInitialWidth } = props
  const printLabel =
    controllerInitialWidth - viewBox.x > REQUIRED_SPACE_FOR_LABEL

  return (
    <text x={viewBox.x} y={0}>
      <tspan
        dx={`0.6em`}
        dy={`1.6em`}
        css={theme => ({
          fontSize: theme.fontSizes[0],
          fill: theme.colors.blackFade[60],
        })}
      >
        {printLabel && label}
      </tspan>
    </text>
  )
}

export default MonthRefLineLabel
