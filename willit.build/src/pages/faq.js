import React from "react"

import Methodology from "@modules/docs/components/Methodology"
import FAQs from "@modules/docs/components/FAQs"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import ContentBox from "@modules/ui/components/ContentBox"
import { SEO } from "@modules/seo/components/SEO"

const FAQ = () => {
  return (
    <MaxWidthWrapper>
      <SEO
        title="Frequently Asked Questions"
        description="Learn more about Will It Build and Gatsby Builds. How are the build times measured?, Why are Gatsby builds faster on Gatsby Cloud than on other solutions?, and more."
      />
      <ContentBox>
        <Methodology />
        <FAQs />
      </ContentBox>
    </MaxWidthWrapper>
  )
}

export default FAQ
