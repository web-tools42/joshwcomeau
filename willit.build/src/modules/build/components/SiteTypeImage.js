import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  gradient: PropTypes.object,
}
const SiteTypeImage = ({ gradient, children }) => {
  return (
    <div
      css={theme => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
        borderRadius: theme.radii[2],
        background: `linear-gradient(0deg, ${gradient.start}, ${gradient.end})`,
        [theme.mediaQueries.tablet]: {
          height: 80,
          width: 80,
        },
      })}
    >
      {children}
    </div>
  )
}

SiteTypeImage.propTypes = propTypes

export default SiteTypeImage
