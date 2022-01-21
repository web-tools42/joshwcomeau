import { getTextGradientStyle } from "@modules/ui/utils"

export const controlLabelCss = theme => ({
  display: `block`,
  textTransform: `uppercase`,
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.body,
  letterSpacing: theme.letterSpacings.tracked,
  color: theme.colors.grey[70],
  marginBottom: theme.space[5],
})

export const controlFooterCss = theme => ({
  fontSize: theme.fontSizes[0],
  color: theme.colors.grey[60],
  marginTop: theme.space[2],

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[1],
  },
})

export const controlValueCss = theme => ({
  fontSize: theme.fontSizes[3],
  color: theme.colors.grey[90],
  fontWeight: theme.fontWeights.semiBold,

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[5],
  },
})

export const buildTypeMarkerCss = ({ theme }) => ({
  "&::after": {
    content: `""`,
    display: `inline-block`,
    width: `8px`,
    height: `8px`,
    background: `black`,
    borderRadius: theme.radii[2],
    marginLeft: theme.space[3],
  },
})

export const pageHeadingCss = theme => [
  getTextGradientStyle(
    theme,
    `${theme.colors.blue[50]} 32.5%`,
    `${theme.colors.purple[50]} 50.5%`
  ),
  {
    display: `inline-block`,
    maxWidth: `90%`,
    marginBottom: theme.space[8],
    fontSize: theme.fontSizes[6],
    lineHeight: theme.lineHeights.dense,

    [theme.mediaQueries.tablet]: {
      maxWidth: `80%`,
      fontSize: theme.fontSizes[8],
    },
    [theme.mediaQueries.desktop]: {
      fontSize: theme.fontSizes[10],
    },
  },
]
