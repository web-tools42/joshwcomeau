import React from "react"
import { useLocation } from "@reach/router"
import { BaseAnchor } from "gatsby-interface"

import SocialShareLink from "./SocialShareLink"
import CopyUrlButton from "./CopyUrlButton"
import TwitterIcon from "../assets/Twitter"
import LinkedInIcon from "../assets/LinkedIn"

const wrapperCss = () => ({
  display: `flex`,
  alignItems: `center`,
})

const spacerCss = theme => ({
  width: theme.space[4],
  height: theme.space[4],
})

const githubLinkCss = theme => ({
  color: theme.colors.grey[60],
  fontSize: theme.fontSizes[1],
  textDecoration: "none",
})

const cmsTwitterMap = {
  DATOCMS: `@datocms`,
  CONTENTFUL: `@contentful`,
  COSMICJS: `@cosmicjs`,
  DRUPAL: `@drupal`,
  MDX: `@mdx_js`,
  MARKDOWN: `Markdown`,
  WORDPRESS: `@WordPress`,
}

const SocialLinks = ({
  repositoryUrl,
  siteType = ``,
  contentSource = ``,
  pageCount = ``,
}) => {
  const { href } = useLocation()

  const twitterShareText = `Check out the benchmarks for building a ${pageCount} page ${
    cmsTwitterMap[contentSource]
  } ${siteType.toLowerCase()} site on @gatsbyjs Cloud.`

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${href}/&text=${encodeURIComponent(
    twitterShareText
  )}`

  // LinkedIn has apparently all but killed their query param share function, cant add a message
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    href
  )}`

  return (
    <div css={wrapperCss}>
      {repositoryUrl && (
        <BaseAnchor
          data-cy="github-repo-link"
          href={`https://github.com/${repositoryUrl}`}
          css={githubLinkCss}
        >
          View benchmark source on Github
        </BaseAnchor>
      )}
      <div css={spacerCss} />
      <div css={spacerCss} />
      <SocialShareLink
        data-cy="social-link__twitter"
        Icon={TwitterIcon}
        url={twitterShareUrl}
        label="Share Gatsby Cloud benchmarks on Twitter"
      />
      <div css={spacerCss} />
      <SocialShareLink
        data-cy="social-link__share"
        Icon={LinkedInIcon}
        url={linkedinShareUrl}
        label="Share Gatsby Cloud benchmarks on LinkedIn"
      />
      <div css={spacerCss} />
      <CopyUrlButton data-cy="social-link__clipboard-copy" content={href} />
    </div>
  )
}

export default SocialLinks
