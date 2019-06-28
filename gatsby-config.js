module.exports = {
  __experimentalThemes: [
    {
      resolve: '@jxnblk/gatsby-theme-mdx-blog',
      options: {
        name: 'blog',
        path: 'src/content',
        pageSize: 16,
      },
    },
  ],
  siteMetadata: {
    title: 'Buckland Nurseries Garden Centre',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Buckland Nurseries Garden Centre',
        short_name: 'Buckland Nurseries',
        start_url: '/',
        icon: 'src/assets/img/sunflower.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-16739033-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-offline',
  ],
}
