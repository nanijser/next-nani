// const path = require("path");
const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");

module.exports = withPlugins(
    [
        withCss,
        withLess({
            cssModules: true,
            cssLoaderOptions: {
                importLoaders: 1,
                localIdentName: "[local]___[hash:base64:5]"
            }
        })
    ],
    {
        assetPrefix: "",
        webpack: config => {
            // Perform customizations to webpack config

            // Important: return the modified config
            // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
            console.log("config...", config);
            return config;
        },
        webpackDevMiddleware: config => {
            // Perform customizations to webpack dev middleware config

            // Important: return the modified config
            return config;
        }
    }
);
