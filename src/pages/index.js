import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title='home' />
      <div>
      <h1>Jianmin's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>(
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
          <BlogTitle>
            {node.frontmatter.title} - {node.frontmatter.date}
          </BlogTitle>
          </BlogLink>
          <p>{node.except}</p>

        </div>
      ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
