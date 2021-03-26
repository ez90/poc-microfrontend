const { merge } = require('webpack-merge');
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const common = require('../common/config/webpack.common.js');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3002,
        historyApiFallback: true,
    },
    output: {
        publicPath: "http://localhost:3002/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "settings",
            library: {type: "var", name: "settings"},
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
            },
        }),
    ]
  });
