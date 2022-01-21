import React from "react"
import ContentBox from "@modules/ui/components/ContentBox"
import MaxWidthWrapper from "@modules/ui/components/MaxWidthWrapper"
import { pageHeadingCss } from "@modules/ui/styles"

const NotFoundPage = () => {
  return (
    <MaxWidthWrapper>
      <ContentBox>
        <h1 css={pageHeadingCss}>Page not found</h1>
        <p>
          {`We don't seem to have a page at this URL. Sorry for the inconvenience!`}
        </p>
      </ContentBox>
    </MaxWidthWrapper>
  )
}

export default NotFoundPage
