const path = require("path");
const webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodemonPlugin = require('nodemon-webpack-plugin');

var browserConfig = {
  entry: ["babel-regenerator-runtime", "./dist/browser/index.js"],
  //watch: true,
  watchOptions: {
      aggregateTimeout: 3000,
      poll: 5000,
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundles/bundle.js",
    publicPath: "/",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    //new NodemonPlugin(),
  ],
};

var serverConfig = {
  entry: ["babel-regenerator-runtime", "./dist/server/index.js"],
  //watch: true,
  watchOptions: {
      aggregateTimeout: 3000,
      poll: 5000,
  },
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "serverDirection/server.js",
    publicPath: "/",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    //new NodemonPlugin(),
  ],
};

module.exports = [browserConfig, serverConfig];
