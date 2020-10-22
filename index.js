/**
 * Create a custom Docusaurus v2.0 webpack configuration for post css
 *
 * Copied from https://github.com/rlamana/docusaurus-plugin-sass/blob/master/docusaurus-plugin-sass.js
 */
module.exports = function (_, { id, ...options }) {
  return {
    name: "docusaurus-plugin-sass",
    configureWebpack(_, isServer, utils) {
      const { getStyleLoaders } = utils;

      const isProd = process.env.NODE_ENV === "production";
      return {
        module: {
          rules: [
            {
              test: /\.s[ca]ss$/,
              oneOf: [
                {
                  test: /\.module\.s[ca]ss$/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: {
                        localIdentName: isProd
                          ? `[local]_[hash:base64:4]`
                          : `[local]_[path]`,
                      },
                      importLoaders: 1,
                      sourceMap: !isProd,
                      onlyLocals: isServer,
                    }),
                    {
                      loader: "sass-loader",
                      options: options || {},
                    },
                  ],
                },
                {
                  use: [
                    ...getStyleLoaders(isServer),
                    {
                      loader: "sass-loader",
                      options: options || {},
                    },
                  ],
                },
              ],
            },
          ],
        },
      };
    },
  };
};
