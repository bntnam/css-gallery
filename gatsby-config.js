module.exports = {
  siteMetadata: {
    title: "CSS Gallery",
    description: "CSS Gallery",
    author: "bntnam",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'bntnam',
        short_name: 'bntnam',
        start_url: '/',
        background_color: '#F19066',
        theme_color: '#F19066',
        display: 'standalone',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    `gatsby-plugin-less`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
