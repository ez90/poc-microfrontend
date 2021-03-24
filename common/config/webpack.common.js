const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

module.exports = {
    entry: "./src/index",
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/preset-react",
                    ],
                },
            },
        ],
    },
    plugins: [
        new ESLintPlugin({
            extensions: ["js", "jsx"],
        }),
        new ModuleFederationPlugin({
            shared: [
                {
                    react: {
                        singleton: true,
                    },
                    "react-dom": {
                        singleton: true,
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
