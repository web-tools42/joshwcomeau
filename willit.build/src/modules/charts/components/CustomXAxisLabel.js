import React from "react"
import { DetailsChartDimensions } from "../constants"
import { textStyles, tspanStyles } from "../utils/axisLabels"

function CustomXAxisLabel({ isMobile }) {
  const { ChartHeight } = DetailsChartDimensions

  /* on mobile, we need to offset it by half of its width, ~17px */
  const mobileAlignmentShift = -17

  /*
    on desktop, the graph itself isn't centered within the SVG, so we need to
    push it forward by a fair amount.
  */
  const desktopAlignmentShift = -17 + 21

  return (
    <text y={ChartHeight - 15} x={0} css={textStyles}>
      <tspan
        x="50%"
        dx={isMobile ? mobileAlignmentShift : desktopAlignmentShift}
        css={tspanStyles}
      >
        DATE
      </tspan>
    </text>
  )
}

export default CustomXAxisLabel
