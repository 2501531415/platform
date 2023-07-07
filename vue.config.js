const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path')
module.exports = defineConfig({
  configureWebpack:{
    plugins:[new NodePolyfillPlugin()]
  },
  transpileDependencies: true,
  devServer:{
    host:'127.0.0.1',
    open:true,
    port:8888
  },
  css: {
    loaderOptions: {
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        /*sass-loader 9.0写法*/
        additionalData(content, loaderContext) {
          const { resourcePath, rootContext } = loaderContext
          const relativePath = path.relative(rootContext, resourcePath)
          if (
            relativePath.replace(/\\/g, '/') !== 'src/assets/styles/variables.module.scss'
          ) {
            return '@import "~@/assets/styles/variables.module.scss";' + content
          }
          return content
        },
      },
    },
  },
})
