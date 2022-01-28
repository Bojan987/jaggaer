import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { data } from "./src/resources/data/data.json";

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: { path: path.join(__dirname, "dist"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "src"),
    },

    onAfterSetupMiddleware: function (devServer) {
      devServer.app.get("/getData", function (req, res) {
        res.json(data);
      });
    },
  },
  module: {
    rules: [
      {
        // compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // exclude node modules compile
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          // creates style nodes from JS strings
          "css-loader",
          // translates CSS into CommonJS
          "sass-loader",
          // compiles Sass to CSS, using Node Sass by default
        ],
      },
      { test: /\.(jpg|jpeg|png|gif|mp3|svg|json)$/, use: ["file-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
