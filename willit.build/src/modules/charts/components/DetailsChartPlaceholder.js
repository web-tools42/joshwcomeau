import React from "react"
import { DetailsChartDimensions } from "@modules/charts/constants"
import { keyframes } from "@emotion/core"

const { ChartWithControlsHeight } = DetailsChartDimensions

const getActiveAnimation = theme => keyframes`
  20% {
    transform: scale(1.75);
    fill: ${theme.colors.purple[50]};
  }
  40% {
    transform: scale(1);
    fill: ${theme.colors.white};
  }
`

const DefaultPoints = [
  { x: 20, y: 40 },
  { x: 50, y: 20 },
  { x: 80, y: 30 },
  { x: 110, y: 10 },
]

function DetailsChartPlaceholder() {
  const [points, setPoints] = React.useState(DefaultPoints)

  React.useEffect(() => {
    const animatePoints = setInterval(() => {
      let activePointIndex = points.findIndex(item => item.active)

      if (activePointIndex < 0 || activePointIndex === points.length - 1) {
        activePointIndex = 0
      } else {
        activePointIndex = activePointIndex + 1
      }

      const newPoints = points.map((item, idx) => {
        if (idx === activePointIndex) {
          item.active = true
        } else {
          item.active = false
        }

        return item
      })

      setPoints(newPoints)
    }, 350)

    return function cleanup() {
      clearInterval(animatePoints)
    }
  }, [])

  return (
    <div
      css={theme => ({
        alignItems: `center`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        width: `100%`,
        background: theme.colors.grey[5],
        minHeight: `${ChartWithControlsHeight}px`,
      })}
    >
      <svg
        width={120}
        height={60}
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={{
          borderLeft: `1px dashed #aaa`,
          borderBottom: `1px dashed #aaa`,
        }}
      >
        <polyline
          points={points.map(item => `${item.x},${item.y}`).join(" ")}
          css={theme => ({
            fill: `none`,
            stroke: theme.colors.grey[40],
            strokeWidth: 2,
            strokeDasharray: `10, 3`,
          })}
        />
        {points.map(({ x, y }, idx) => {
          return (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r="3"
              css={theme => ({
                animation: `${getActiveAnimation(theme)} 2s ${idx *
                  0.5}s linear infinite`,
                fill: theme.colors.white,
                stroke: theme.colors.grey[40],
                strokeWidth: 2,
                transformBox: `fill-box`,
                transform: `scale(1)`,
                transformOrigin: `center center`,
              })}
            />
          )
        })}
      </svg>
      <div
        css={theme => ({
          alignItems: `center`,
          color: theme.colors.grey[50],
          display: `flex`,
          flexDirection: `column`,
          fontSize: theme.fontSizes[1],
          marginTop: theme.space[5],
        })}
      >
        Chart loading
        <noscript>
          <span
            css={theme => ({
              color: theme.colors.red[50],
              display: `block`,
              fontSize: theme.fontSizes[0],
              lineHeight: theme.lineHeights.dense,
              marginTop: theme.space[3],
              textAlign: `center`,
            })}
          >
            Upsss. Your browser does not support JavaScript! <br />
            You need it to see the interactive chart.
          </span>
        </noscript>
      </div>
    </div>
  )
}

export default DetailsChartPlaceholder
