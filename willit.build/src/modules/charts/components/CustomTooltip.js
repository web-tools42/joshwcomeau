import React from "react"
import format from "date-fns/format"
import { BuildType } from "@modules/data/constants"
import LinePreview from "./LinePreview"
import { useTheme } from "@modules/ui/components/ThemeProvider"

function CustomTooltip({ active, payload }) {
  const { tones } = useTheme()

  if (!active) {
    return null
  }

  const innerPayload = payload && payload[0] && payload[0].payload

  if (!innerPayload) {
    return null
  }

  const errors = Object.entries(innerPayload.errors || {}).map(
    ([key, value]) => ({
      name: key,
      error: value,
    })
  )

  const valuesInMinutes = innerPayload.valuesInMinutes

  const values = payload
    .map(({ name, value }) => ({
      name,
      value,
      valueInMinutes: valuesInMinutes[name],
    }))
    .sort((a, b) => {
      return b.value - a.value
    })

  const valuesDate = innerPayload.createdAt
  const formattedDate =
    valuesDate && format(new Date(`${valuesDate}`), `MMMM d, yyyy`)

  const tooltipItems = [...errors, ...values]

  return (
    <div
      data-cy="chart-tooltip"
      css={theme => ({
        display: `flex`,
        flexDirection: `column`,
        background: theme.colors.blackFade[90],
        borderRadius: theme.radii[2],
        color: theme.colors.white,
        padding: theme.space[5],
        fontFamily: theme.fonts.body,
        margin: `0 ${theme.space[3]}`,

        [theme.mediaQueries.desktop]: {
          padding: theme.space[7],
        },
      })}
    >
      {tooltipItems.map(({ name, valueInMinutes, error }) => {
        return (
          <span
            data-cy="chart-tooltip-metric"
            key={`${name}TooltipSec`}
            css={theme => ({
              display: `flex`,
              flexDirection: `column`,
              marginBottom: theme.space[5],
              lineHeight: 1,
            })}
          >
            <span
              data-cy="chart-tooltip-value"
              css={theme => ({
                fontWeight: theme.fontWeights.bold,
                color: theme.tones[name].medium,
                fontSize: error ? theme.fontSizes[2] : theme.fontSizes[3],

                [theme.mediaQueries.desktop]: {
                  fontSize: error ? theme.fontSizes[3] : theme.fontSizes[5],
                },
              })}
            >
              {error ? error : valueInMinutes}
            </span>

            <span
              data-cy="chart-tooltip-label"
              css={theme => ({
                display: `flex`,
                alignItems: `center`,
                marginTop: theme.space[2],
              })}
            >
              <span
                css={theme => ({
                  whiteSpace: `nowrap`,
                  fontSize: theme.fontSizes[0],

                  [theme.mediaQueries.desktop]: {
                    fontSize: theme.fontSizes[1],
                  },
                })}
              >
                {BuildType[name].displayedAs}
              </span>

              <LinePreview
                strokeDasharray={BuildType[name].strokeDasharray}
                strokeColor={tones[name].medium}
                width={25}
                css={theme => ({
                  marginLeft: theme.space[2],
                })}
              />
            </span>
          </span>
        )
      })}
      <span
        data-cy="chart-tooltip-date"
        css={theme => ({
          fontSize: theme.fontSizes[0],
          color: theme.colors.whiteFade[70],
        })}
      >
        {formattedDate}
      </span>
    </div>
  )
}

export default CustomTooltip
