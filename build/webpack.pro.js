/*
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-16 16:37:31
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-16 23:17:09
 * @FilePath: /webpack-demo01/build/webpack.pro.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
  merge
} = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
});
