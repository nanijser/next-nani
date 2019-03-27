const path = require('path')
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withPlugins([withCss, withLess({
  cssModules: true
})], {
  module:{
      rules:[
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
      ]
  },
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
});
