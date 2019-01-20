module.exports = {
  siteMetadata: {
    title: `Hack Cincinnati`,
    description: `Hack Cincinnati is the largest high school hackathon in the region, bringing hundreds of high school students together for programming and fun!`,
    author: `@hackcincinnati`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-90399761-5',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:400, 500', 'Cabin:900'],
        },
      },
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
        icon: `src/images/icon.png`,
      },
    },
  ],
}
