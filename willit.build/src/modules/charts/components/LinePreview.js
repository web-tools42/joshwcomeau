import React from "react"

function LinePreview({
  strokeDasharray,
  strokeColor,
  strokeWidth = 2,
  width = 20,
  ...rest
}) {
  const dasharray = strokeDasharray.split(` `)
  const linePattern = []
  let linePatternFullWidth = 0

  function createLinePattern(item, idx) {
    if (+item < 1) {
      return
    }

    if (!(idx % 2) && linePatternFullWidth + +item <= width) {
      const dash = {
        x: linePatternFullWidth,
        width: +item,
      }

      linePattern.push(dash)
    }

    linePatternFullWidth += +item
  }

  if (dasharray.length === 1) {
    // solid linePattern
    linePattern.push({
      x: 0,
      width,
    })
  } else if (dasharray.length > 1) {
    // dashed linePatterns
    while (linePatternFullWidth <= width) {
      dasharray.forEach(createLinePattern)
    }
  } else {
    return null
  }

  return (
    <svg
      width={width}
      height={strokeWidth}
      viewBox={`0 0 ${width} ${strokeWidth}`}
      {...rest}
    >
      {linePattern.map((item, idx) => (
        <rect
          key={idx}
          x={item.x}
          width={item.width}
          height={strokeWidth}
          fill={strokeColor}
        />
      ))}
    </svg>
  )
}

export default LinePreview
