require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://eotas.education',
    title: `EOTAS Education`,
    description: `Education Other Than At School`,
    author: '@eotas',
    contactInfo: {
      phone: '02071128105',
      email: 'info@eotas.education',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EOTAS Education`,
        short_name: `EOTAS Education`,
        start_url: `/`,
        background_color: `#F6FAFC`,
        theme_color: `#39C4FF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-eslint',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(({ node: post }) => {
                return {
                  title: post.title,
                  date: post.createdAt,
                  description: post.content.childMarkdownRemark.excerpt,
                  url: `${site.siteMetadata.siteUrl}/blog/${post.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${post.slug}`,
                  custom_elements: [{ 'content:encoded': post.content.childMarkdownRemark.html }],
                };
              });
            },
            query: `
              {
                allContentfulBlogPost(
                  sort: { fields: createdAt, order: DESC }
                ) {
                  edges {
                    node {
                      slug
                      title
                      createdAt
                      content {
                        childMarkdownRemark {
                          excerpt(format: PLAIN, truncate: false)
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'EOTAS Education Blog',
          },
        ],
      },
    },
  ],
};
