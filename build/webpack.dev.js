/*
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-16 16:33:33
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-16 16:34:01
 * @FilePath: /webpack-demo01/build/webpack.dev.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
  merge
} = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: '3001', // 默认是 8080
    hot: true,
    compress: true, // 是否启用 gzip 压缩
    devMiddleware: {
      stats: 'errors-only'
      // devtool: 'eval-cheap-module-source-map',
    },
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:80',
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
});
