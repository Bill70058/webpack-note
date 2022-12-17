<!--
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-16 15:57:15
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-17 20:51:49
 * @FilePath: /webpack-note/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 手动通过webpack搭建项目

[参考链接](https://juejin.cn/post/6982361231071903781)

### 遇到的问题
- babel插件的引入只需要引入运行时编译部分就够用了，其他按需
- webpack-dev-server的部分配置移到devtool配置项里了,如stats详细看[文档](https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md)
- css修改变量命名冲突部分配置有改变，看[官方文档](https://www.npmjs.com/package/css-loader)按需配置
- 配置postcss-loader还需要下载postcss-import和postcss-url两个依赖
- 配置打包后抽离css文件，使用了mini-css-extract-plugin就不用使用style-loader插件，两个有冲突，把style-loader移除
- 打包后压缩css文件的插件optimize-css-assets-webpack-plugin需要webpack4.x，当前项目5.x版本太高安装不了，通过[插件文档](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)可以看到它推荐我们安装另一个插件``css-minimizer-webpack-plugin``
- copy-webpack-plugin插件，将放在public里的js文件不混入打包，直接塞进dist文件


### V2分支
> 从v2开始就是对大项目打包时会用到的打包配置

- 使用缓存``cache``与代码拆分``splitChunks``提升打包速度，详情配置项及作用可以看[官网](https://webpack.docschina.org/configuration/cache/#root)这部分文档
- 该demo中使用happypack会有个babel报错，没找到原因，有兴趣需要使用到该插件的可以自行配置试试，顺便提个pr
- 多线程打包还可以使用``thread-loader``插件