import React from "react"
import { DetailsChartDimensions } from "../constants"

function AnnotationRefLineLabel({ viewBox, annotation, onClick }) {
  const ref = React.useRef()
  const { AnnotationIconSize } = DetailsChartDimensions

  return (
    <g>
      <svg
        ref={ref}
        x={viewBox.x - AnnotationIconSize / 2}
        y={1}
        width={AnnotationIconSize}
        height={AnnotationIconSize}
        viewBox={`0 0 ${AnnotationIconSize} ${AnnotationIconSize}`}
        fill="none"
        css={{
          cursor: `pointer`,
        }}
        onClick={() => onClick(annotation, ref)}
      >
        <rect
          width={AnnotationIconSize}
          height={AnnotationIconSize}
          css={theme => ({
            fill: theme.colors.grey[5],
            opacity: 0,
          })}
        />
        <line
          x1="0"
          x2="0"
          y1="0"
          y2="4"
          strokeWidth={1}
          css={theme => ({
            stroke: theme.colors.blackFade[30],
            transform: `translate(15px, 23px)`,
          })}
        />
        <path
          d="M7.33203 4.66634H8.66536V5.99967H7.33203V4.66634ZM7.33203 7.33301H8.66536V11.333H7.33203V7.33301ZM7.9987 1.33301C4.3187 1.33301 1.33203 4.31967 1.33203 7.99967C1.33203 11.6797 4.3187 14.6663 7.9987 14.6663C11.6787 14.6663 14.6654 11.6797 14.6654 7.99967C14.6654 4.31967 11.6787 1.33301 7.9987 1.33301ZM7.9987 13.333C5.0587 13.333 2.66536 10.9397 2.66536 7.99967C2.66536 5.05967 5.0587 2.66634 7.9987 2.66634C10.9387 2.66634 13.332 5.05967 13.332 7.99967C13.332 10.9397 10.9387 13.333 7.9987 13.333Z"
          css={theme => ({
            fill: theme.colors.grey[50],
            transform: `translate(7px, 7px)`,
          })}
        />
      </svg>
    </g>
  )
}

export default AnnotationRefLineLabel
