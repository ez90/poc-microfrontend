const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3003/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-typescript"
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "main",
      library: { type: "var", name: "main" },
      remotes: {
        product: "product",
        account: "account",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
