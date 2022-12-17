/*
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-16 15:56:31
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-17 20:52:19
 * @FilePath: /webpack-demo01/build/webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootDir = process.cwd()
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  mode: "none",
  entry: path.resolve(rootDir, "src/index.js"),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: "bundle.[contenthash:8].js"
  },
  devServer: {
    port: '3001', // 默认是 8080
    hot: true,
    compress: true, // 是否启用 gzip 压缩
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:80',
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: '*.js',
        context: path.resolve(rootDir, "public/js"),
        to: path.resolve(rootDir, 'dist/js'),
      }, ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CssMinimizerWebpackPlugin()
  ],
  module: {
    rules: [{
        test: /\.(jsx|js)$/,
        use: ['thread-loader', 'babel-loader'],
        exclude: /node_modules/,
      }, {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        include: path.resolve(rootDir, 'src'),
        exclude: /node_modules/,
      }, {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                exportGlobals: true,
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer"],
                ],
              },
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        type: 'asset',
      },
    ]
  }
}
