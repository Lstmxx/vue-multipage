const glob = require('glob')
let pages = {}
module.exports.pages = function () {
  glob.sync('./src/pages/*').forEach(filePath => {
    const fileList = filePath.split('/')
    const fileName = fileList[fileList.length - 1]
    pages[fileName] = {
      entry: `src/pages/${fileName}/${fileName}.js`,
      // 模板来源
      template: `src/pages/${fileName}/${fileName}.html`,
      // 在 dist/index.html 的输出
      filename: process.env.NODE_ENV === 'development' ? `${fileName}.html` : `${fileName}.html`,
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', fileName]
    }
  })
  console.log(pages)
  return pages
}
