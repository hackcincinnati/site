import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ keywords, title, path }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle = title + ' | ' + data.site.siteMetadata.title
        const metaURL = 'https://hackcincinnati.io' + path
        return (
          <Helmet
            htmlAttributes={{
              lang: 'en'
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
                content: `https://hackcincinnati.io/logo-facebook.png`
              },
              {
                property: `og:image:width`,
                content: `1200`
              },
              {
                property: `og:image:height`,
                content: `630`
              },
              {
                property: `og:image:alt`,
                content: `Hack Cincinnati's official logo, consisting of line-art of the Cincinnati skyline.`
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
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
                content: `https://hackcincinnati.io/logo-twitter.png`
              },
              {
                name: `twitter:image:width`,
                content: `1012`
              },
              {
                name: `twitter:image:height`,
                content: `506`
              }
            ].concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `)
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  keywords: [],
  path: '/'
}

SEO.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  path: PropTypes.string
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
