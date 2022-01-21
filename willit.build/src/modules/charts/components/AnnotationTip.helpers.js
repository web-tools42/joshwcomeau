import { keyframes } from "@emotion/core"

export function translateTip({
  iconRect,
  windowWidth,
  tipWidth,
  tipMargin,
  iconWidth,
}) {
  let translation = `-${tipWidth / 2 - iconWidth / 2}px`

  const spaceOnLeft = iconRect.left
  const spaceOnRight = windowWidth - (iconRect.left + iconRect.width)

  if (spaceOnLeft < tipWidth / 2) {
    translation = `-${spaceOnLeft - tipMargin}px`
  }

  if (spaceOnRight < tipWidth / 2) {
    translation = `-${tipWidth - iconWidth + tipMargin - spaceOnRight}px`
  }

  return translation
}

export const getTipEntryKeyframes = tipAbove => {
  // depending on tip placement (above or under the trigger)
  // we animate sliding down or up
  const startingPoint = tipAbove ? `-20px` : `20px`

  return keyframes`
  0% {
   opacity: 0;
   transform: translate(0, ${startingPoint});
  }

  100% {
    opacity: 1;
    transform: translate(0,0)
  }
`
}

export function calculateTipY({
  iconTop,
  iconHeight,
  spoutHeight,
  scroll,
  tipAbove,
  tipHeight,
}) {
  const above = iconTop + scroll - spoutHeight - tipHeight
  const below = iconTop + iconHeight + spoutHeight + scroll

  return tipAbove ? above : below
}
