import React from "react"
import { keyframes } from "@emotion/core"
import { MdClose } from "react-icons/md"

const fadeInAnimation = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const BANNER_HEIGHT = 40
const LOCALSTORAGE_PREFIX = `will-it-build:banner`
const ANIMATION_DURATION = 300

const wrapperStyles = theme => ({
  minHeight: BANNER_HEIGHT,
  background: theme.colors.purple[60],
  color: theme.colors.white,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  fontSize: theme.fontSizes[1],
  animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms  both`,
  transformOrigin: `top center`,
})

const textStyles = theme => ({
  flex: 1,
  textAlign: `center`,
  animation: `${fadeInAnimation} ${ANIMATION_DURATION}ms ${ANIMATION_DURATION}ms both`,
  lineHeight: theme.lineHeights.dense,
  padding: `${theme.space[3]}`,
})

const closeBoxStyles = () => ({
  width: BANNER_HEIGHT,
  height: BANNER_HEIGHT,
  display: `grid`,
  placeItems: `center`,
})

const closeButtonStyles = theme => ({
  display: `flex`,
  placeContent: `center`,
  width: BANNER_HEIGHT,
  height: `100%`,
  border: `none`,
  background: `transparent`,
  color: `inherit`,
  fontSize: theme.fontSizes[4],
  padding: 0,
})

const availableBanners = {
  // NOTE: No banners currently avaiable.
  // Leaving this banner in as a demo of how to use it in the future.
  //
  // You'll also need to mount the banner in `ui/components/Header.js`
  //
  // "banner-id": {
  //   contents: <p>Text here!</p>
  // },
}

const Banner = ({ id }) => {
  const { contents } = availableBanners[id]

  const [isBannerVisible, hideBanner] = useBannerStatus(id)

  if (!isBannerVisible) {
    return null
  }

  return (
    <div css={wrapperStyles}>
      <div css={textStyles}>{contents}</div>
      <div css={closeBoxStyles}>
        <button
          css={closeButtonStyles}
          aria-label="Dismiss banner"
          onClick={hideBanner}
        >
          <MdClose />
        </button>
      </div>
    </div>
  )
}

const useBannerStatus = id => {
  const [isBannerVisible, setIsBannerVisible] = React.useState(false)

  const localStorageKey = `${LOCALSTORAGE_PREFIX}-${id}-dismissed`

  React.useEffect(() => {
    const hasPreviouslyDismissed = window.localStorage.getItem(localStorageKey)

    if (!hasPreviouslyDismissed) {
      setIsBannerVisible(true)
    }
  }, [])

  const hideBanner = React.useCallback(() => {
    setIsBannerVisible(false)
    window.localStorage.setItem(localStorageKey, true)
  }, [setIsBannerVisible])

  return [isBannerVisible, hideBanner]
}

export default Banner
