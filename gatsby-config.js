const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby-MDX Demo Project',
    description:
      'Compose documents with reusable markdown components (MDX) and customize styling with styled-components.',
      author: '@theRealHansZimmer'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: { default: path.resolve('./src/components/layout.js') },
        extensions: [`.mdx`, `.md`]
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
