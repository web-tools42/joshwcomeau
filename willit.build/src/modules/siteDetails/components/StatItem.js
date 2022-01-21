import React from "react"
import { OverviewItem } from "./DetailsOverview.parts"
import {
  controlLabelCss,
  controlValueCss,
  buildTypeMarkerCss,
} from "@modules/ui/styles"
import HelpCircle from "@modules/ui/components/HelpCircle"
import { useTheme } from "@modules/ui/components/ThemeProvider"

const Titles = [`Build Times`]

const descriptionCss = theme => ({
  fontSize: theme.fontSizes[0],
  color: theme.colors.grey[60],
})

const statStateCss = theme => ({
  fontWeight: theme.fontWeights.semiBold,
  marginLeft: theme.space[3],
  fontSize: theme.fontSizes[1],
})

function StatItem({ data, idx, ...rest }) {
  const { timeInMinutes, colorKey, displayedAs, description } = data
  const title = Titles[idx]

  const { tones } = useTheme()

  return (
    <OverviewItem {...rest} data-cy="stat-item" css={{ flex: 1 }}>
      {title && (
        <h3 css={theme => controlLabelCss(theme)}>
          {title}{" "}
          <HelpCircle
            helpInfo="Learn more about our various build types in our Frequently Asked Questions."
            href="/faq#build-type-differences"
          />
        </h3>
      )}

      <div>
        <span css={controlValueCss}>{timeInMinutes}</span>
        <span
          css={theme => [
            statStateCss(theme),
            buildTypeMarkerCss({ theme }),
            {
              "&::after": {
                background: tones[colorKey].medium,
              },
            },
          ]}
        >
          {displayedAs}
        </span>
      </div>

      <p css={descriptionCss}>{description}</p>
    </OverviewItem>
  )
}

export default StatItem
