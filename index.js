/**
 * Create a custom Docusaurus v2.0 webpack configuration for post css
 *
 * Modified https://github.com/rlamana/docusaurus-plugin-sass/blob/master/docusaurus-plugin-sass.js
 */
module.exports = function (_, { id, ...options }) {
  return {
    name: "docusaurus-plugin-postcss",

    configureWebpack(config, isServer, utils) {
      const { getStyleLoaders } = utils;

      const isProd = process.env.NODE_ENV === "production";

      console.log(`------------- docusaurus-plugin-postcss --------------`);
      console.log(
        `config, isServer, utils`,
        config,
        isServer,
        utils,
        require.resolve("postcss-loader")
      );

      return {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [
                // ...getStyleLoaders(isServer),
                {
                  // loader: "postcss-loader",
                  loader: require.resolve("postcss-loader"),
                  options: options || {},
                },
              ],
              // oneOf: [
              //   {
              //     test: /\.module\.s[ca]ss$/,
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
              //         loader: "postcss-loader",
              //         options: options || {},
              //       },
              //     ],
              //   },
              //   {
              //     use: [
              //       ...getStyleLoaders(isServer),
              //       {
              //         loader: "postcss-loader",
              //         options: options || {},
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
