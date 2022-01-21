import React from "react"
import { navigate } from "gatsby"

import { PageCount } from "@modules/data/constants"
import SelectControl, { SelectControlOption } from "./SelectControl"
import formatPath from "@modules/data/utils/formatPath"

const PageCountSelectControl = ({
  siteType,
  initialPageCount,
  contentSource,
  activeBenchmarks,
  footer,
  pathPrefix,
}) => {
  const [currentPageCount, setCurrentPageCount] = React.useState(
    initialPageCount
  )

  const { displayedAs } = PageCount[currentPageCount]
  const activePageCounts = activeBenchmarks.find(item => {
    return siteType === item.siteType && contentSource === item.contentSource
  }).activePageCounts

  return (
    <SelectControl
      labelHeadingTag="h3"
      label="Pages"
      id="page-count-control"
      value={currentPageCount}
      displayedValue={displayedAs}
      onChange={(ev, newPath) => {
        setCurrentPageCount(ev.target.value)

        navigate(newPath, {
          state: { refocusId: ev.target.id, disableScrollUpdate: true },
        })
      }}
      footer={footer}
    >
      {activePageCounts.map(countNum => (
        <SelectControlOption
          key={countNum}
          value={countNum}
          path={formatPath({
            prefix: pathPrefix,
            siteType,
            contentSource,
            pageCount: countNum,
          })}
        >
          {PageCount[countNum].displayedAs}
        </SelectControlOption>
      ))}
    </SelectControl>
  )
}

export default PageCountSelectControl
