export const wrapperStyles = theme => ({
  background: theme.colors.white,
  boxShadow: theme.shadows.raised,
  fontFamily: theme.fonts.body,
  position: "relative",
  transition: `box-shadow ${theme.transitions.speed.default} ${theme.transitions.curve.default}`,
  ":hover": {
    boxShadow: theme.shadows.dialog,
    zIndex: 1,
  },
  "&:first-of-type": {
    borderTopLeftRadius: theme.radii[2],
    borderTopRightRadius: theme.radii[2],
  },
  "&:last-of-type": {
    borderBottomLeftRadius: theme.radii[2],
    borderBottomRightRadius: theme.radii[2],
  },
  "&:not(:first-of-type)": {
    "&:before": {
      content: "''",
      height: 1,
      background: theme.colors.grey[20],
      position: "absolute",
      top: 0,
      left: theme.space[6],
      right: 0,
      bottom: 0,
      [theme.mediaQueries.phablet]: {
        left: theme.space[8],
        right: theme.space[8],
      },
      [theme.mediaQueries.desktop]: {
        left: theme.space[10],
        right: theme.space[10],
      },
    },
  },
})

export const gridStyles = theme => ({
  display: `grid`,
  gridTemplateColumns: `48px 2fr 1fr`,
  gridTemplateRows: `2fr`,
  gridGap: theme.space[6],
  margin: theme.space[7],
  [theme.mediaQueries.phablet]: {
    gridTemplateRows: `1fr`,
    margin: theme.space[8],
    gridGap: theme.space[8],
  },
  [theme.mediaQueries.tablet]: {
    gridTemplateColumns: `80px 3fr 1.25fr 4fr 2.25fr`,
  },
  [theme.mediaQueries.desktop]: {
    margin: theme.space[10],
  },
})

export const buildTimeStyles = theme => ({
  gridColumn: `2 / 4`,
  [theme.mediaQueries.tablet]: {
    gridColumn: "auto",
  },
})

export const benchmarkLinkStyles = theme => ({
  gridColumn: `2 / 4`,
  textAlign: `right`,
  [theme.mediaQueries.tablet]: {
    gridColumn: "auto",
  },
})

export const subtextStyles = theme => ({
  alignItems: `center`,
  display: `flex`,
  fontSize: theme.fontSizes[0],
  lineHeight: 1,
  color: theme.colors.grey[60],
  svg: {
    marginRight: theme.space[3],
  },
  [theme.mediaQueries.phablet]: {
    color: theme.colors.grey[90],
    fontSize: theme.fontSizes[1],
  },
})

export const linkStyles = theme => ({
  color: theme.colors.lilac,
  textDecoration: "none",
  verticalAlign: `middle`,
  height: `100%`,
  svg: {
    marginLeft: `0.25rem`,
  },
  // Make the whole card clickable
  // @see https://inclusive-components.design/cards/#thepseudocontenttrick
  "&:after": {
    content: "''",
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
})

export const sectionHeadingCss = theme => ({
  fontSize: theme.fontSizes[0],
  lineHeight: theme.lineHeights.dense,
  letterSpacing: `0.05em`,
  color: theme.colors.grey[50],
  textTransform: `uppercase`,
  fontWeight: theme.fontWeights.body,
})

export const separatorCss = theme => ({
  fontWeight: `normal`,
  margin: `0 ${theme.space[2]}`,
  color: theme.colors.grey[40],
})

export const emphesizedTextCss = theme => ({
  display: `flex`,
  paddingTop: theme.space[4],
  paddingBottom: theme.space[3],
  fontSize: theme.fontSizes[3],
  lineHeight: theme.lineHeights.solid,
  color: theme.colors.blackFade[90],
  fontWeight: theme.fontWeights.semiBold,

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[5],
  },
})

export const deEmphesizedTextCss = theme => ({
  color: theme.colors.blackFade[70],
  fontWeight: theme.fontWeights.body,
})
