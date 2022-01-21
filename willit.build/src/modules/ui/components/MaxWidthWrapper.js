import React from "react"

export const MAX_WIDTH = 1064
export const HORIZONTAL_PADDING_MOBILE = `1.5rem`
export const HORIZONTAL_PADDING_DESKTOP = `2rem`

const wrapperCss = theme => ({
  maxWidth: MAX_WIDTH,
  paddingLeft: HORIZONTAL_PADDING_MOBILE,
  paddingRight: HORIZONTAL_PADDING_MOBILE,
  marginLeft: "auto",
  marginRight: "auto",

  [theme.mediaQueries.phablet]: {
    paddingLeft: HORIZONTAL_PADDING_DESKTOP,
    paddingRight: HORIZONTAL_PADDING_DESKTOP,
  },
})

const MaxWidthWrapper = ({ children, ...rest }) => {
  return (
    <div css={wrapperCss} {...rest}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
