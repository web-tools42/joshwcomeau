import React from "react"
import { DetailsChartDimensions } from "../constants"
import { textStyles, tspanStyles } from "../utils/axisLabels"

function CustomYAxisLabel({ isMobile }) {
  const { ChartHeight } = DetailsChartDimensions
  const y = ChartHeight / 2 + 35 // "35" is ~half of width of "BUILD TIME" string

  /*
    the positioning 'magic' numbers was manually set
    through trial and error, they will have to be
    manually update whenever chart content or dimensions change
  */

  return (
    <text
      y={y}
      x={0}
      transform={`rotate(-90, 0, ${y}) translate(0,10)`}
      css={textStyles}
    >
      <tspan x="0" dx={0} dy={isMobile ? 15 : 0} css={tspanStyles}>
        BUILD TIME
      </tspan>
    </text>
  )
}

export default CustomYAxisLabel
