const path = require("path");

module.exports = {
  mode: "development", // or 'production'
  entry: "./src/app.ts",
  devServer: {
    // watch: true, // Додайте це

    hot: false,
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
  },
  // devtool: "inline-source-map",
  devtool: "eval-source-map",
  // devtool: "cheap-module-eval-source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  watchOptions: {
    // poll: true,
    ignored: /node_modules/,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
