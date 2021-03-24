const { merge } = require('webpack-merge');
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const common = require('../webpack.common.js');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3001,
        historyApiFallback: true,
    },
    output: {
        publicPath: "http://localhost:3001/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "product",
            library: {type: "var", name: "product"},
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
            },
        }),
    ]
  });
