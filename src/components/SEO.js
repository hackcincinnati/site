import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, location }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle = title + ' | ' + data.site.siteMetadata.title
        const metaURL = 'https://hackcincinnati.io' + (location || '/')
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: data.site.siteMetadata.description
              },
              {
                property: `og:title`,
                content: metaTitle
              },
              {
                property: `og:description`,
                content: data.site.siteMetadata.description
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: `og:url`,
                content: metaURL
              },
              {
                property: `og:image:url`,
                content: `https://hackcincinnati.io/logo.png`
              },
              {
                property: `og:image:width`,
                content: `1000`
              },
              {
                property: `og:image:height`,
                content: `1000`
              },
              {
                property: `og:image:alt`,
                content: `Hack Cincinnati's official logo, consisting of line-art of the Cincinnati skyline.`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: metaTitle
              },
              {
                name: `twitter:description`,
                content: data.site.siteMetadata.description
              },
              {
                name: `twitter:url`,
                content: metaURL
              },
              {
                name: `twitter:image`,
                content: `https://hackcincinnati.io/logo.png`
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
