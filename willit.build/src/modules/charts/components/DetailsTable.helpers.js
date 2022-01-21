import format from "date-fns/format"

export const tableHeadingCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  margin: `${theme.space[10]} 0 ${theme.space[6]} 0`,

  [theme.mediaQueries.desktop]: {
    marginLeft: `-2em`,
  },
})

export const tableCss = theme => ({
  borderCollapse: `collapse`,
  borderTop: `1px solid ${theme.colors.blackFade[10]}`,
  color: `#333`,
  margin: `0 auto`,
  width: `100%`,
})

export const tableHeaderCss = theme => ({
  color: theme.colors.grey[70],
  fontSize: theme.fontSizes[0],
  fontWeight: theme.fontWeights.body,
  letterSpacing: theme.letterSpacings.tracked,
  padding: theme.space[5],
  paddingLeft: theme.space[2],
  paddingBottom: theme.space[6],
  textTransform: `uppercase`,
  textAlign: `left`,
  position: `relative`,

  "&:after": {
    content: "''",
    position: `absolute`,
    height: `1px`,
    left: 0,
    right: 0,
    bottom: theme.space[3],
    borderBottom: `1px dashed ${theme.colors.grey[30]}`,
  },

  "&:first-of-type": {
    "&:after": {
      right: `2rem`,
    },
  },

  [theme.mediaQueries.desktop]: {
    padingLeft: theme.space[3],
  },
})

export const tableHeaderColNameCss = theme => ({
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  textAlign: `center`,
  width: `20%`,
})

export const tableHeaderColTxtCss = theme => ({
  fontSize: theme.fontSizes[0],
  whiteSpace: `nowrap`,

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[2],
  },
})

export const tableHeaderColPositionerCss = theme => ({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  padding: `${theme.space[3]} 0`,

  [theme.mediaQueries.desktop]: {
    alignItems: `center`,
    flexDirection: `row`,
    padding: theme.space[3],
  },
})

export const tableDataCss = theme => ({
  fontSize: theme.fontSizes[0],
  borderBottom: `1px solid ${theme.colors.blackFade[10]}`,
  borderTop: `1px solid ${theme.colors.blackFade[10]}`,
  padding: `${theme.space[4]} ${theme.space[3]}`,

  "&:first-of-type": {
    paddingLeft: 0,
  },

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[2],
  },
})

export const tableDataDefaultCss = theme => ({
  display: `flex`,
  alignItems: `center`,
  whiteSpace: `nowrap`,
  justifyContent: `center`,

  [theme.mediaQueries.desktop]: {
    justifyContent: `flex-start`,
  },
})

export const tabularIconCss = theme => ({
  marginRight: theme.space[3],
  width: `1.4em`,
  height: `1.4em`,
})

export function getFormattedDate(date) {
  return {
    mobile: format(new Date(`${date}`), `MM/dd/yy`),
    desktop: format(new Date(`${date}`), `MMMM d, ''yy`),
  }
}

export const mobileOnlyVisibleCss = theme => ({
  display: `block`,

  [theme.mediaQueries.desktop]: {
    display: `none`,
  },
})

export const desktopOnlyVisibleCss = theme => ({
  display: `none`,

  [theme.mediaQueries.desktop]: {
    display: `block`,
  },
})
