<!--
 * @Author: bill Lin_k_Bill@163.com
 * @Date: 2022-12-16 15:57:15
 * @LastEditors: bill Lin_k_Bill@163.com
 * @LastEditTime: 2022-12-16 22:42:12
 * @FilePath: /webpack-note/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 手动通过webpack搭建项目

[参考链接](https://juejin.cn/post/6982361231071903781)

注意：
- babel插件的引入只需要引入运行时编译部分就够用了，其他按需
- webpack-dev-server的部分配置移到devtool配置项里了,如stats详细看[文档](https://github.com/webpack/webpack-dev-server/blob/master/migration-v4.md)
- css修改变量命名冲突部分配置有改变，看[官方文档](https://www.npmjs.com/package/css-loader)按需配置
- 配置postcss-loader还需要下载postcss-import和postcss-url两个依赖
