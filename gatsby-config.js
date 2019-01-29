module.exports = {
  siteMetadata: {
    title: `Hack Cincinnati`,
    description: `Hack Cincinnati is the largest high school hackathon in the Midwest, bringing hundreds of students together for programming and fun!`,
    author: `@hackcincinnati`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-90399761-5'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:900', 'Cabin:400,500']
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hack Cincinnati`,
        short_name: `HackCin`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00ab92`,
        display: `browser`,
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    }
  ]
}
