const webpack = require("webpack");
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  // webpack: (config, { isServer }) => {
  //     if (!isServer) {
  //         config.node = {
  //             fs: 'empty'
  //         }
  //     }

  //     return config
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
  env: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  },
  images: {
    domains: ["orbbitprofileimagebucket.s3.ca-central-1.amazonaws.com"],
    formats: ["image/png", "image/webp"],
  },
};
