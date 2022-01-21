import React from "react"
import { HORIZONTAL_PADDING_MOBILE as wrapperPaddingMobile } from "@modules/ui/components/MaxWidthWrapper"

import { HeaderTitle, HeaderSiteType, BackLink } from "./DetailsHeader.parts"
import SocialLinks from "@modules/ui/components/SocialLinks"

function DetailsHeader({ siteType, contentSource, pageCount, repositoryUrl }) {
  return (
    <header
      css={theme => ({
        borderTop: `1px solid ${theme.colors.blackFade[10]}`,
        display: `flex`,
        flexDirection: `column`,
        paddingBottom: theme.space[6],
        background: theme.colors.white,
        padding: `${theme.space[6]} ${wrapperPaddingMobile} ${theme.space[6]}`,

        [theme.mediaQueries.desktop]: {
          background: `none`,
          border: 0,
          paddding: 0,
          padding: 0,
        },
      })}
    >
      <BackLink />
      <div
        css={theme => ({
          display: `flex`,
          flexDirection: `column`,
          marginTop: theme.space[5],

          [theme.mediaQueries.desktop]: {
            alignItems: `baseline`,
            flexDirection: `row`,
            marginTop: theme.space[7],
          },
        })}
      >
        <HeaderTitle contentSource={contentSource} />
        <HeaderSiteType siteType={siteType} />
        <div
          css={theme => ({
            marginLeft: `auto`,
            // Slight tweak for baseline alignment with non-button icon
            transform: `translateY(3px)`,
            paddingTop: theme.space[6],

            [theme.mediaQueries.tablet]: {
              paddingTop: 0,
            },
          })}
        >
          <SocialLinks
            repositoryUrl={repositoryUrl}
            contentSource={contentSource}
            siteType={siteType}
            pageCount={pageCount}
          />
        </div>
      </div>
    </header>
  )
}

export default DetailsHeader
