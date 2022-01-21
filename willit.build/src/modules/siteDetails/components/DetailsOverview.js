import React from "react"

import { visuallyHiddenCss } from "@modules/a11y/stylesheets"
import PageCountSelectControl from "@modules/ui/components/PageCountSelectControl"
import { ContentSource } from "@modules/data/constants"
import StatItem from "./StatItem"
import {
  OverviewItem,
  contextOverviewItemCss,
  Border,
} from "./DetailsOverview.parts"
import { HORIZONTAL_PADDING_MOBILE as wrapperPaddingMobile } from "@modules/ui/components/MaxWidthWrapper"
import { BaseBuildType } from "../../../../base-constants"

function DetailsOverview({
  siteType,
  pageCount,
  contentSource,
  activeBenchmarks,
  stats,
}) {
  const hideData = ContentSource[contentSource].hideData

  const formattedStats = [
    !hideData &&
      stats.dataUpdate[0] && {
        colorKey: "DATA_UPDATE",
        displayedAs: "Data",
        description: BaseBuildType.DATA_UPDATE.description,
        timeInMinutes: stats.dataUpdate[0].timeInMinutes,
      },
    stats.warmStart[0] && {
      colorKey: "WARM_START",
      displayedAs: "Cached",
      description: BaseBuildType.WARM_START.description,
      timeInMinutes: stats.warmStart[0].timeInMinutes,
    },
    stats.coldStart[0] && {
      colorKey: "COLD_START",
      displayedAs: "Uncached",
      description: BaseBuildType.COLD_START.description,
      timeInMinutes: stats.coldStart[0].timeInMinutes,
    },
  ].filter(stat => stat)

  return (
    <div
      css={theme => ({
        padding: `${theme.space[6]} ${wrapperPaddingMobile} ${theme.space[8]}`,

        [theme.mediaQueries.desktop]: {
          borderTop: `1px solid ${theme.colors.blackFade[10]}`,
          borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
          padding: 0,
          marginTop: theme.space[6],
          marginBottom: theme.space[4],
        },
      })}
    >
      <div
        css={theme => ({
          borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
          display: `flex`,
          justifyContent: `space-between`,
          flexWrap: `wrap`,
          paddingBottom: theme.space[8],

          [theme.mediaQueries.desktop]: {
            borderBottom: 0,
            justifyContent: `flex-start`,

            flexWrap: `no-wrap`,
            paddingBottom: 0,
          },
        })}
      >
        <h2 css={visuallyHiddenCss}>Dataset select controls</h2>
        <OverviewItem
          css={theme =>
            contextOverviewItemCss({ theme, basis: `100%`, type: `control` })
          }
        >
          <PageCountSelectControl
            siteType={siteType}
            initialPageCount={pageCount}
            contentSource={contentSource}
            footer="1 image per page"
            pathPrefix="details"
            activeBenchmarks={activeBenchmarks}
          />
        </OverviewItem>

        <Border />

        <h2 css={visuallyHiddenCss}>Most recent build results</h2>

        {formattedStats.map((item, idx) => {
          return (
            <StatItem
              key={idx}
              data={item}
              idx={idx}
              css={theme => contextOverviewItemCss({ theme })}
            />
          )
        })}
      </div>
    </div>
  )
}

export default DetailsOverview
