/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import TagsIcon from "react-icons/lib/ti/tags"

import Layout from "../components/layout"
import Button from "../components/button"
import Container from "../components/container"
import BlogPostPreviewItem from "../components/blog-post-preview-item"
import Pagination from "../components/pagination"
import EmailCaptureForm from "../components/email-capture-form"
import FooterLinks from "../components/shared/footer-links"

import { mediaQueries } from "../gatsby-plugin-theme-ui"
import { pullIntoGutter, breakpointGutter } from "../utils/styles"

class BlogPostsIndex extends React.Component {
  render() {
    const { allMdx } = this.props.data

    return (
      <Layout location={this.props.location}>
        <main id={`reach-skip-nav`}>
          <Helmet>
            <title>{`Blog | Page ${this.props.pageContext.currentPage}`}</title>
          </Helmet>
          <Container>
            <div
              sx={{
                ...pullIntoGutter,
                display: `flex`,
                justifyContent: `space-between`,
                borderBottom: t => `1px solid ${t.colors.ui.border}`,
                mb: 6,
                pb: 6,
                [breakpointGutter]: {
                  pb: 0,
                  border: 0,
                },
              }}
            >
              <h1 sx={{ mb: 0 }}>Blog</h1>
              <Button
                key="blog-view-all-tags-button"
                to="/blog/tags"
                variant="small"
              >
                View all Tags <TagsIcon />
              </Button>
            </div>
            {allMdx.edges.map(({ node }, index) => (
              <BlogPostPreviewItem
                post={node}
                key={node.fields.slug}
                sx={{
                  borderBottomWidth: `1px`,
                  borderBottomStyle: `solid`,
                  borderColor: `ui.border`,
                  pb: 8,
                  mb: index === allMdx.edges.length - 1 ? 0 : 8,
                  ...pullIntoGutter,
                  [breakpointGutter]: {
                    p: 9,
                    boxShadow: `raised`,
                    bg: `card.background`,
                    borderRadius: 2,
                    border: 0,
                    mb: 6,
                    mx: 0,
                    transition: t =>
                      `transform ${t.transition.speed.default} ${t.transition.curve.default},  box-shadow ${t.transition.speed.default} ${t.transition.curve.default}, padding ${t.transition.speed.default} ${t.transition.curve.default}`,
                    "&:hover": {
                      transform: t => `translateY(-${t.space[1]})`,
                      boxShadow: `overlay`,
                    },
                    "&:active": {
                      boxShadow: `cardActive`,
                      transform: `translateY(0)`,
                    },
                  },
                  [mediaQueries.md]: {
                    marginLeft: t => `-${t.space[9]}`,
                    marginRight: t => `-${t.space[9]}`,
                  },
                }}
              />
            ))}
            <Pagination context={this.props.pageContext} />
            <EmailCaptureForm signupMessage="Enjoying our blog? Receive the next post in your inbox!" />
          </Container>
          <FooterLinks />
        </main>
      </Layout>
    )
  }
}

export default BlogPostsIndex

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/docs.blog/" }
        fields: { released: { eq: true } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...BlogPostPreview_item
        }
      }
    }
  }
`
