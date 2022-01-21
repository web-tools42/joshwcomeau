import React from "react"

import useRandomId from "../hooks/use-random-id.hook"
import CaretDown from "../assets/CaretDown"
import { controlLabelCss, controlFooterCss } from "../styles"

const selectWrapperCss = () => ({
  position: `relative`,
  display: `inline-block`,
})

const realSelectCss = () => ({
  display: `block`,
  position: `absolute`,
  zIndex: 2,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  width: `100%`,
  height: `100%`,
  // This is needed to allow the `<select>` element to have a
  // dynamic height on Safari. The actual appearance doesn't matter
  // since it's invisible.
  WebkitAppearance: `none`,
})

const fakeSelectCss = theme => ({
  alignItems: `center`,
  display: `flex`,
  fontSize: theme.fontSizes[3],
  color: theme.colors.grey[90],
  fontWeight: theme.fontWeights.semiBold,

  // Because we're hiding the actual <select>, we need to transfer the
  // focus ring to the visible sibling.
  "select:focus + &": {
    // Firefox doesn't support -webkit-focus-ring-color.
    // Add a Firefox-style outline as a fallback.
    outline: [`1px dotted black`, `5px auto -webkit-focus-ring-color`],
  },

  [theme.mediaQueries.desktop]: {
    fontSize: theme.fontSizes[5],
  },
})

const caretWrapper = theme => ({
  display: `inline-block`,
  marginLeft: theme.space[3],
})

const SelectControl = ({
  label,
  value,
  id: providedId,
  displayedValue,
  onChange,
  footer,
  labelHeadingTag = ``,
  children,
}) => {
  const id = providedId || useRandomId("select-control")
  const HeadingTag = labelHeadingTag

  return (
    <div>
      {labelHeadingTag ? (
        <HeadingTag>
          <label htmlFor={`${id}`} css={controlLabelCss}>
            {label}
          </label>
        </HeadingTag>
      ) : (
        <label htmlFor={`${id}`} css={controlLabelCss}>
          {label}
        </label>
      )}

      <div css={selectWrapperCss}>
        {/*
          Generally, triggering things on-change instead of on-blur is
          problematic, but because we're using this as a way to change
          routes, I think it's alright.
        */}
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select
          id={id}
          onChange={ev => {
            const selectedOption = ev.target.options[ev.target.selectedIndex]
            const newPath = selectedOption.getAttribute("data-path")

            onChange(ev, newPath)
          }}
          value={value}
          css={realSelectCss}
        >
          {children}
        </select>
        <div data-cy={`${id}-fake`} css={fakeSelectCss}>
          {displayedValue}
          <div css={caretWrapper}>
            <CaretDown />
          </div>
        </div>
      </div>
      <div css={controlFooterCss}>{footer}</div>
    </div>
  )
}

export const SelectControlOption = ({ value, path, children }) => {
  return (
    <option value={value} data-path={path}>
      {children}
    </option>
  )
}

export default SelectControl
