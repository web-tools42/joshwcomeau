import React from "react"
import { MdInfoOutline } from "react-icons/md"
import { GoLinkExternal } from "react-icons/go"

export function TipLabel({ label }) {
  return (
    <strong
      css={theme => ({
        display: `flex`,
        alignItems: `center`,
        fontSize: theme.fontSizes[1],
        fontWeight: theme.fontWeights.body,
      })}
    >
      <MdInfoOutline
        css={theme => ({
          color: theme.colors.whiteFade[60],
          marginRight: theme.space[1],
          transform: `translate(-${theme.space[1]}, 0)`,
        })}
      />
      {label}
    </strong>
  )
}

export function TipDescription({ description, link, linkText }) {
  return (
    <p
      css={theme => ({
        marginTop: theme.space[3],
        lineHeight: theme.lineHeights.default,
      })}
    >
      {description}{" "}
      {link && (
        <a
          href={link}
          css={theme => ({
            textDecoration: `none`,
            color: theme.colors.purple[30],
          })}
        >
          {linkText ? linkText : `Read more`}{" "}
          <GoLinkExternal
            css={{
              verticalAlign: `middle`,
              marginTop: `-0.2em`,
            }}
          />
        </a>
      )}
    </p>
  )
}

export function TipSpout({ spoutWidth, spoutHeight, iconWidth, tipAbove }) {
  return (
    <span
      css={{
        display: `flex`,
        position: !tipAbove ? `absolute` : undefined,
        top: !tipAbove ? 0 : undefined,
        transform: !tipAbove
          ? `translateY(-${spoutHeight}px) rotate(180deg)`
          : undefined,
        width: `${spoutWidth}px`,
        marginLeft: `${(iconWidth - spoutWidth) / 2}px`,
      }}
    >
      <svg
        height="10"
        width="20"
        viewBox="0 0 20 10"
        xmlns="http://www.w3.org/2000/svg"
        css={theme => ({
          fill: theme.colors.blackFade[90],
          width: `100%`,
        })}
      >
        <polygon points="0, 0 20, 0 10, 10" />
      </svg>
    </span>
  )
}
