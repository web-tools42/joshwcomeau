import React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => (
  <Global
    styles={theme => css`
      html {
        background: ${theme.colors.grey[5]};
        box-sizing: border-box;
        font-family: ${theme.fonts.body};
      }
      *,
      *:after,
      *:before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
    `}
  />
)

export default GlobalStyles
