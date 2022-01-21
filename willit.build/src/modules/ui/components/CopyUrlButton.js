import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Button, colors } from "gatsby-interface"
import LinkIcon from "../assets/Link"
import copyToClipboard from "../utils/copy-to-clipboard"

function Copy({ content, duration, trim = false, ...props }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let timeoutId

    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false)
      }, duration)
    }

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [duration, copied, setCopied])

  const label = copied ? `URL copied to clipboard` : `Copy URL to clipboard`

  return (
    <Button
      tone={`NEUTRAL`}
      size={`S`}
      name={label}
      disabled={copied}
      css={{
        position: `relative`,
        color: colors.grey[60],
        backgroundColor: `transparent`,
        border: `none`,
        padding: 0,
        cursor: `pointer`,

        "&[disabled]": {
          cursor: `not-allowed`,
          padding: 0,
          border: `none`,
        },
        ":hover": {
          background: `transparent`,
          border: `none`,
          padding: 0,
        },
        ":active": {
          background: `transparent`,
          color: colors.grey[40],
          padding: 0,
        },
      }}
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content)
        setCopied(true)
      }}
      {...props}
    >
      <div
        css={theme => ({
          position: `absolute`,
          top: 0,
          left: "50%",
          transform: `translate(-50%, -100%)`,
          fontWeight: theme.fontWeights.body,
          fontSize: theme.fontSizes[0],
        })}
      >
        {copied ? `Copied` : `Copy`}
      </div>
      <LinkIcon fill={colors.grey[40]} />
    </Button>
  )
}

Copy.propTypes = {
  content: PropTypes.string.isRequired,
  duration: PropTypes.number,
  trim: PropTypes.bool,
}

Copy.defaultProps = {
  duration: 5000,
  fileName: ``,
}

export default Copy
