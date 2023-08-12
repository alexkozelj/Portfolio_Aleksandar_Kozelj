import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.mjs
    siteTitle: `Aleksandar Koželj Portfolio`,
    siteTitleAlt: `Aleksandar Koželj Portfolio`,
    siteHeadline: `Aleksandar Koželj Portfolio`,
    siteUrl: `https://emilia.lekoarts.de`,
    siteDescription: `Aleksandar Koželj Portfolio`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `Aleksandar Koželj`,
  },
  trailingSlash: `never`,
  pathPrefix: `/Portfolio-Aleksandar-Kozelj`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {

        name: `Aleksandar Koželj`,
        location: `Frankfurt am Main, Germany`,
        
        showThemeAuthor: false,
        socialMedia: [
          {
            title: `Resume`,
            href: `https://aleksandarkozelj.s3.eu-north-1.amazonaws.com/Resume-Aleksandar-Kozelj.pdf`
          },
          {
            title: `Github`,
            href: `https://github.com/alexkozelj`
          },
          {
            title: `LinkedIn`,
            href: `https://www.linkedin.com/in/aleksandar-kozelj/`
          }
        ]
      
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emilia - @lekoarts/gatsby-theme-emilia`,
        short_name: `Emilia`,
        description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
        start_url: `/`,
        background_color: `#858282`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
