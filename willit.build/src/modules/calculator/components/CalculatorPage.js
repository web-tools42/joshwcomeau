import React from "react"
import { graphql } from "gatsby"

import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import ContentBox from "@modules/ui/components/ContentBox"
import Header from "./Header"
import Calculator from "./Calculator"
import { SEO } from "@modules/seo/components/SEO"

const CalculatorPage = ({ pageContext, data }) => {
  const { siteType, contentSource, activeBenchmarks, pageCount } = pageContext

  return (
    <MaxWidthWrapper>
      <SEO
        title="Gatsby Build Time Calculator"
        description="Estimate build times for your projects in Gatsby Cloud | Will It Build"
      />
      <ContentBox>
        <Header
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
        />
        <Calculator
          siteType={siteType}
          contentSource={contentSource}
          pageCount={pageCount}
          data={data}
          activeBenchmarks={activeBenchmarks}
        />
      </ContentBox>
    </MaxWidthWrapper>
  )
}

export default CalculatorPage

export const query = graphql`
  query calculatorStats(
    $contentSource: BenchmarkVendors_CmsVendor!
    $siteType: BenchmarkVendors_BenchmarkSiteType!
    $pageCount: Int!
  ) {
    benchmarkApi {
      benchmarkVendor(siteType: $siteType, contentSource: $contentSource) {
        id
        latest(numberOfPages: $pageCount) {
          coldStart {
            timeInMs
            timeInMinutes
            humanReadableTime
          }
          warmStart {
            timeInMs
            timeInMinutes
            humanReadableTime
          }
          dataUpdate {
            timeInMs
            timeInMinutes
            humanReadableTime
          }
        }
      }
    }
  }
`
