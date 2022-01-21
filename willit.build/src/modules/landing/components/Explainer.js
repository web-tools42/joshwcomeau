import React from "react"

import GatsbyIcon from "@modules/data/assets/icons/GatsbyIcon"
import DatocmsIcon from "@modules/data/assets/icons/DatocmsIcon"
import WordpressIcon from "@modules/data/assets/icons/WordpressIcon"
import DrupalIcon from "@modules/data/assets/icons/DrupalIcon"
import MarkdownIcon from "@modules/data/assets/icons/MarkdownIcon"
import ContentfulIcon from "@modules/data/assets/icons/ContentfulIcon"

import wordmarkSrc from "@images/wordmark.svg"
import gatsbyCloudSrc from "@images/gatsby-cloud.svg"

import { HERO_PADDING_DESKTOP } from "../constants"

const LabelStyles = theme => ({
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[1],
  lineHeight: theme.lineHeights.dense,
  paddingBottom: theme.space[4],
})

const Block = ({ children }) => (
  <div
    css={theme => ({
      paddingBottom: theme.space[9],
      lineHeight: theme.lineHeights.solid,
    })}
  >
    {children}
  </div>
)

const Icon = ({ Icon }) => <Icon height="20px" width="20px" />

const BlockGrid = ({ children }) => (
  <div
    css={theme => ({
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "min-content",
      gridGap: theme.space[2],
      alignItems: "center",
      [theme.mediaQueries.desktop]: {
        gridGap: theme.space[3],
      },
    })}
  >
    {children}
  </div>
)

const Delimiter = () => (
  <span
    css={theme => ({
      color: theme.colors.grey[30],
      fontSize: theme.fontSizes[4],
    })}
  >
    /
  </span>
)

const Explainer = () => {
  return (
    <div
      css={theme => ({
        paddingTop: theme.space[10],
        display: `flex`,
        flexWrap: "wrap",
        flex: "0 0 auto",
        paddingRight: HERO_PADDING_DESKTOP,
        "> div": {
          marginRight: theme.space[10],
          "&:last-child": {
            marginRight: 0,
          },
        },
        [theme.mediaQueries.phablet]: {
          paddingLeft: HERO_PADDING_DESKTOP,
        },
        [theme.mediaQueries.tablet]: {
          display: "grid",
          gridTemplateColumns: `3fr 2fr 1.5fr`,
          gridGap: theme.space[6],
          paddingRight: 0,
          "> div": {
            marginRight: 0,
          },
        },
      })}
    >
      <Block>
        <p css={LabelStyles}>Gatsby + 6 different Data Sources</p>
        <BlockGrid>
          <Icon Icon={GatsbyIcon} />{" "}
          <span
            css={theme => ({
              color: theme.colors.grey[40],
              fontSize: theme.fontSizes[4],
              fontWeight: theme.fontWeights.bold,
            })}
          >
            +
          </span>{" "}
          <Icon Icon={ContentfulIcon} />
          <Delimiter />
          <Icon Icon={DrupalIcon} />
          <Delimiter />
          <Icon Icon={DatocmsIcon} />
          <Delimiter />
          <Icon Icon={WordpressIcon} />
          <Delimiter />
          <Icon Icon={MarkdownIcon} />
        </BlockGrid>
      </Block>
      <Block>
        <p css={LabelStyles}>Up to 32,768 pages built on</p>
        <BlockGrid>
          <img src={gatsbyCloudSrc} alt="Gatsby Cloud logo" />
        </BlockGrid>
      </Block>
      <Block>
        <p css={LabelStyles}>Powered by</p>
        <img src={wordmarkSrc} alt="Gatsby logo" style={{ width: 74 }} />
      </Block>
    </div>
  )
}

export default Explainer
