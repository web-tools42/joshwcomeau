import React from "react"

export function Border(props) {
  return (
    <div
      aria-hidden="true"
      css={theme => ({
        display: ``,

        [theme.mediaQueries.desktop]: {
          width: `1px`,
          background: theme.colors.blackFade[10],
        },
      })}
      {...props}
    />
  )
}

export function OverviewItem({ children, ...rest }) {
  return (
    <div
      css={theme => ({
        paddingBottom: theme.space[7],
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-end`,
      })}
      {...rest}
    >
      {children}
    </div>
  )
}

export const contextOverviewItemCss = ({
  theme,
  basis = `auto`,
  type = `static`,
}) => ({
  flexBasis: basis,
  justifyContent: type === `control` ? `flex-start` : undefined,
  paddingTop: type === `control` ? 0 : undefined,

  [theme.mediaQueries.phablet]: {
    flexBasis: `auto`,
  },
  [theme.mediaQueries.desktop]: {
    width: `auto`,
    justifyContent: `flex-end`,
    paddingTop: theme.space[5],

    "&:first-of-type": {
      paddingRight: theme.space[6],
    },

    "&:not(:first-of-type)": {
      paddingLeft: theme.space[6],
    },
  },
})
