/**
 * Create a custom Docusaurus v2.0 webpack configuration for post css
 *
 * Modified https://github.com/rlamana/docusaurus-plugin-sass/blob/master/docusaurus-plugin-sass.js
 */
module.exports = function (_, { id, ...pluginOptions }) {
  return {
    name: "docusaurus-plugin-postcss",

    configureWebpack(config, isServer, utils) {
      const { getStyleLoaders } = utils;

      const isProd = process.env.NODE_ENV === "production";
      const loader = require.resolve("postcss-loader");
      const options = pluginOptions || {};

      // console.log(`------------- docusaurus-plugin-postcss --------------`);
      // console.log(
      //   `config, isServer, utils`,
      //   config,
      //   isServer,
      //   utils,
      //   require.resolve("postcss-loader")
      // );

      return {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [
                // ...getStyleLoaders(isServer),
                {
                  // loader: "postcss-loader",
                  loader,
                  options,
                },
              ],
              // oneOf: [
              //   {
              //     test: /\.module\.css$/,
              //     use: [
              //       ...getStyleLoaders(isServer, {
              //         modules: {
              //           localIdentName: isProd
              //             ? `[local]_[hash:base64:4]`
              //             : `[local]_[path]`,
              //         },
              //         importLoaders: 1,
              //         sourceMap: !isProd,
              //         onlyLocals: isServer,
              //       }),
              //       {
              //         loader,
              //         options,
              //       },
              //     ],
              //   },
              //   {
              //     use: [
              //       ...getStyleLoaders(isServer),
              //       {
              //         loader,
              //         options,
              //       },
              //     ],
              //   },
              // ],
            },
          ],
        },
      };
    },
  };
};
