// const path = require("path");
const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const withTypescript = require("@zeit/next-typescript");

module.exports = withPlugins(
    [
        withCss,
        withLess({
            cssModules: true,
            cssLoaderOptions: {
                importLoaders: 1,
                localIdentName: "[local]___[hash:base64:5]"
            }
        }),
        withTypescript
    ],
    {
        assetPrefix: "",
        webpack: config => {
            const _config = config;
            const originalEntry = _config.entry;
            _config.entry = async () => {
                const entries = await originalEntry();

                if (
                    entries["main.js"] &&
                    !entries["main.js"].includes("./client/polyfills.js")
                ) {
                    entries["main.js"].unshift("./client/polyfills.js");
                }
                return entries;
            };
            return _config;
        },
        webpackDevMiddleware: config => {
            // Perform customizations to webpack dev middleware config

            // Important: return the modified config
            return config;
        }
    }
);
