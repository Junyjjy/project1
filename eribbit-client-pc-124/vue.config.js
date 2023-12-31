const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动引入，使用绝对路径
      // 需要是path.join来拼接完整路径
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  }
  // 这个是给webpack-dev-server开启可IP和域名访问权限。
  // chainWebpack: config => {
  //   config.devServer.disableHostCheck(true)
  // }
}
