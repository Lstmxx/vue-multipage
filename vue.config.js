const path = require('path')
const pageMethod = require('./utils/getPages')
const pages = pageMethod.pages()
const resolve = dir => {
  return path.join(__dirname, dir)
}
console.log(resolve)

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  pages,
  publicPath: BASE_URL,
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('b@', resolve('../base/src'))
      .set('_c', resolve('src/components'))
      .set('_b_c', resolve('../base/src/components'))
      .set('_v_c', resolve('src/view/components'))
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      .exclude.add(resolve('src/assets/icon'))
      .end()
      .use('file-loader')
      .loader('file-loader')
  },
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/less/base.less')]
    }
  }
}
