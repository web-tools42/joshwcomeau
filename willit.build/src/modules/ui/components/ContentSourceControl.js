import React from "react"
import { navigate } from "gatsby"

import { ContentSource, BuildType } from "@modules/data/constants"
import SelectControl, {
  SelectControlOption,
} from "@modules/ui/components/SelectControl"
import formatPath from "@modules/data/utils/formatPath"

const ContentSourceControl = ({
  siteType,
  pageCount,
  initialContentSource,
  activeBenchmarks,
  buildType,
}) => {
  const [currentContentSource, setCurrentContentSource] = React.useState(
    initialContentSource
  )

  const { displayedAs, Icon } = ContentSource[currentContentSource]

  return (
    <SelectControl
      labelHeadingTag="h2"
      label="Content Source"
      id="content-source-control"
      value={currentContentSource}
      displayedValue={
        <>
          <Icon
            css={theme => ({
              marginRight: theme.space[2],
            })}
          />
          {displayedAs}
        </>
      }
      onChange={(ev, newPath) => {
        setCurrentContentSource(ev.target.value)

        navigate(newPath, {
          state: { refocusId: ev.target.id, disableScrollUpdate: true },
        })
      }}
    >
      {activeBenchmarks.map(({ contentSource }) => {
        return (
          <SelectControlOption
            key={contentSource}
            value={contentSource}
            path={formatPath({
              prefix: `calculator`,
              siteType,
              contentSource,
              pageCount,
              buildType: buildType
                ? BuildType[buildType].displayedAs
                : undefined,
            })}
          >
            {ContentSource[contentSource].displayedAs}
          </SelectControlOption>
        )
      })}
    </SelectControl>
  )
}

export default ContentSourceControl
