const { merge } = require('webpack-merge');
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");
const common = require('../common/config/webpack.common.js');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3003,
        historyApiFallback: true,
    },
    output: {
        publicPath: "http://localhost:3003/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "main",
            library: {type: "var", name: "main"},
            remotes: {
                product: "product",
                account: "account",
                blog: "blog",
            },
        }),
    ]
});
