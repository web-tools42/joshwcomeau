import React from "react"

const ContentBox = ({ children }) => {
  return (
    <div
      css={theme => ({
        padding: `${theme.space[5]} 0`,
        marginBottom: theme.space[10],

        [theme.mediaQueries.phablet]: {
          padding: theme.space[8],
          paddingRight: 0,
          paddingLeft: theme.space[10],
        },
      })}
    >
      {children}
    </div>
  )
}

export default ContentBox
