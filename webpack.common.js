const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },

  plugins: [new HtmlWebpackPlugin(
    {
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['main','vendor']
      
    }
   )],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(svg|png|jpg|gif|webp)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
