import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `messe-ae`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "YOUR_GOOGLE_TAGMANAGER_ID",
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //     gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
    //     gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
    //     dataLayerName: "YOUR_DATA_LAYER_NAME",
    //     routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
    //     enableWebVitalsTracking: true,
    //     selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
    //     selfHostedPath: "YOUR_SELF_HOSTED_PATH",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
