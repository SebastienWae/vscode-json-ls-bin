/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/

"use strict";

const webpack = require("webpack");
const path = require("path");

/** @type WebpackConfig */
module.exports = {
  mode: "production",
  target: "node", // extensions run in a node context
  node: {
    __dirname: false, // leave the __dirname-behaviour intact
  },
  resolve: {
    mainFields: ["module", "main"],
    extensions: [".ts", ".js"], // support ts-files and js-files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            // vscode-nls-dev loader:
            // * rewrite nls-calls
            loader: "vscode-nls-dev/lib/webpack-loader",
            options: {
              base: "./vscode/extensions/json-language-features/server/src",
            },
          },
          {
            // configure TypeScript loader:
            // * enable sources maps for end-to-end source maps
            loader: "ts-loader",
            options: {
              compilerOptions: {
                sourceMap: true,
              },
            },
          },
        ],
      },
    ],
  },
  context: path.join(__dirname),
  entry: {
    extension:
      "./vscode/extensions/json-language-features/server/src/node/jsonServerMain.ts",
  },
  externals: {
    vscode: "commonjs vscode",
    typescript: "commonjs typescript",
  },
  output: {
    libraryTarget: "commonjs",
    filename: "jsonServerMain.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ],
  devtool: "source-map",
};
