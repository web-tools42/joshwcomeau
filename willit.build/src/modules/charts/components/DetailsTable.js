import React from "react"
import PropTypes from "prop-types"
import { ContentSource } from "@modules/data/constants"
import { BuildType, buildTypeIds } from "../../data/constants"
import TabularIcon from "../../data/assets/icons/TabularIcon"
import {
  tableHeadingCss,
  tableCss,
  tableHeaderCss,
  tableHeaderColNameCss,
  tableHeaderColTxtCss,
  tableHeaderColPositionerCss,
  tableDataCss,
  tableDataDefaultCss,
  tabularIconCss,
  getFormattedDate,
  mobileOnlyVisibleCss,
  desktopOnlyVisibleCss,
} from "./DetailsTable.helpers"
import { visuallyHiddenCss } from "@modules/a11y/stylesheets"

export const propTypes = {
  data: PropTypes.array,
  contentSource: PropTypes.string.isRequired,
}

function DetailsTable({ data = [], contentSource }) {
  const hideData = ContentSource[contentSource].hideData
  const buildTypes = buildTypeIds.filter(
    buildType => !(buildType === "DATA_UPDATE" && hideData)
  )

  // Sort the dataset -- most recent to least recent
  let sortedData = [...data].reverse()

  // For v1, show the data from the last thirty days
  // Later work may include progressively loading more data, if deemed a priority
  sortedData = sortedData.slice(0, 30)

  return (
    <div>
      <div css={tableHeadingCss}>
        <TabularIcon css={tabularIconCss} />
        <h2>Tabular data</h2>
      </div>

      <table css={tableCss}>
        <thead>
          <tr>
            <th css={tableHeaderCss} colSpan="1" scope="colgroup">
              Date
            </th>
            <th css={tableHeaderCss} colSpan="3" scope="colgroup">
              Build Times
            </th>
          </tr>
          <tr>
            <th css={tableHeaderColNameCss} colSpan="1"></th>
            {buildTypes.map(buildType => {
              return (
                <th
                  key={`${buildType}_tableheader`}
                  css={tableHeaderColNameCss}
                  colSpan="1"
                >
                  <div css={tableHeaderColPositionerCss}>
                    <span css={tableHeaderColTxtCss}>
                      {BuildType[buildType].displayedAs}
                    </span>
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map(dataPerDiem => {
            const formattedDate = getFormattedDate(dataPerDiem.createdAt)

            return (
              <tr key={`${dataPerDiem.createdAt}_daterow`}>
                <td css={tableDataCss}>
                  <span css={mobileOnlyVisibleCss}>{formattedDate.mobile}</span>
                  <span css={desktopOnlyVisibleCss}>
                    {formattedDate.desktop}
                  </span>
                </td>
                {buildTypes.map(buildType => {
                  const visualValue = dataPerDiem.valuesInMinutes[buildType]
                  const visuallyHiddenValue =
                    dataPerDiem.humanReadableTime[buildType]

                  return (
                    <td key={`${buildType}_buildtime`} css={tableDataCss}>
                      <span css={visuallyHiddenCss}>
                        {visuallyHiddenValue ? visuallyHiddenValue : `no data`}
                      </span>
                      <div aria-hidden="true" css={tableDataDefaultCss}>
                        {visualValue ? (
                          <span
                            css={theme => ({
                              fontWeight: theme.fontWeights.semiBold,
                            })}
                          >
                            {visualValue}
                          </span>
                        ) : (
                          <em
                            css={theme => ({
                              color: theme.colors.grey[50],
                            })}
                          >
                            no data
                          </em>
                        )}
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

DetailsTable.propTypes = propTypes

export default DetailsTable
