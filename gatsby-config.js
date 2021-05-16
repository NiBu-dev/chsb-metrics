const {
  prismicRepo,
  releaseID,
  accessToken,
} = require('./prismic-configuration')

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
const apiKey = process.env.PRISMIC_API_KEY || accessToken
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID

const chsbMetricsSchema  = require('./custom_types/chsb_metrics.json')
const appRatingSchema  = require('./custom_types/app_rating_data.json')
const navigationSchema  = require('./custom_types/navigation.json')
const footerSchema  = require('./custom_types/footer.json')

const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    releaseID: prismicReleaseID,
    prismicToolbar: true,
    linkResolver: () => {},
    schemas: {
      chsb_metrics: chsbMetricsSchema,
      app_rating_data: appRatingSchema,
      navigation: navigationSchema,
      footer: footerSchema
    },
  },
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Prismic Starter',
    description: 'Starter for Gatsby & Prismic',
    author: 'nicolae6',
  },
  plugins: [
    gastbySourcePrismicConfig,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
