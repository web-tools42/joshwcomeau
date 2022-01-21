import React from "react"
import useOnClickOutside from "@modules/ui/hooks/useOnClickOutside"
import { DetailsChartDimensions } from "../constants"
import {
  translateTip,
  getTipEntryKeyframes,
  calculateTipY,
} from "./AnnotationTip.helpers"
import { TipSpout, TipLabel, TipDescription } from "./AnnotationTip.parts"

function AnnotationTip({ activeAnnotation, setActiveAnnotation }) {
  const windowWidth = window.innerWidth

  const tipRef = React.useRef()
  const [tipPosition, setTipPosition] = React.useState()
  const [tipHeight, setTipHeight] = React.useState(0)
  const [tipVisible, setTipVisible] = React.useState(false)
  const [tipAbove, setTipAbove] = React.useState(false)
  const [iconRect, setIconRect] = React.useState()

  const {
    AnnotationTipWidth,
    AnnotationTipWindowMargin,
    AnnotationIconSize,
    AnnotationSpoutWidth,
    AnnotationSpoutHeight,
  } = DetailsChartDimensions

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      setTipHeight(node.getBoundingClientRect().height)
    }
  }, [])

  React.useEffect(() => {
    if (activeAnnotation) {
      const iconRect = activeAnnotation.ref.current.getBoundingClientRect()
      setIconRect(iconRect)

      setTipPosition({
        x: iconRect.left,
        y: calculateTipY({
          iconTop: iconRect.top,
          iconHeight: AnnotationIconSize,
          spoutHeight: AnnotationSpoutHeight,
          scroll: window.scrollY,
          tipAbove,
        }),
        translation: translateTip({
          iconRect,
          windowWidth,
          tipWidth: AnnotationTipWidth,
          tipMargin: AnnotationTipWindowMargin,
          iconWidth: AnnotationIconSize,
        }),
      })
    }

    // after receiving measured height of tip content
    // we decide where to place it above or under the trigger
    if (tipHeight) {
      // if there is a room we place the tip above the trigger
      if (iconRect.y > tipHeight + AnnotationSpoutHeight) {
        setTipPosition({
          ...tipPosition,
          y: calculateTipY({
            iconTop: iconRect.top,
            iconHeight: AnnotationIconSize,
            spoutHeight: AnnotationSpoutHeight,
            scroll: window.scrollY,
            tipAbove: true,
            tipHeight,
          }),
        })

        setTipAbove(true)
      }

      setTipVisible(true)
    }
  }, [activeAnnotation, tipHeight])

  useOnClickOutside(tipRef, () => {
    setActiveAnnotation(null)
    setTipPosition(null)
    setTipVisible(false)
    setTipHeight(0)
    setTipAbove(false)
  })

  if (!activeAnnotation) {
    return null
  }

  const { annotation } = activeAnnotation

  return annotation && tipPosition ? (
    <div
      ref={tipRef}
      css={theme => ({
        animation: `${getTipEntryKeyframes(tipAbove)} ${
          theme.transitions.speed.fast
        } ease-out forwards`,
        left: tipPosition.x,
        opacity: 0,
        position: `absolute`,
        top: tipPosition.y,
        width: `${AnnotationIconSize}px`,
        visibility: tipVisible ? `visible` : `hidden`,
        zIndex: theme.zIndices.dropdowns,
      })}
    >
      <div
        ref={measuredRef}
        css={theme => ({
          background: theme.colors.blackFade[90],
          borderRadius: theme.radii[2],
          color: theme.colors.white,
          width: `${AnnotationTipWidth}px`,
          display: `flex`,
          flexDirection: `column`,
          fontFamily: theme.fonts.body,
          fontSize: theme.fontSizes[0],
          padding: `${theme.space[4]} ${theme.space[5]}`,
          transform: `translate(${tipPosition.translation}, 0)`,
        })}
      >
        <TipLabel label={annotation.label} />

        {annotation.description && (
          <TipDescription
            linkText={annotation.linkText}
            link={annotation.link}
            description={annotation.description}
          />
        )}
      </div>

      <TipSpout
        spoutWidth={AnnotationSpoutWidth}
        iconWidth={AnnotationIconSize}
        spoutHeight={AnnotationSpoutHeight}
        tipAbove={tipAbove}
      />
    </div>
  ) : null
}

export default AnnotationTip
