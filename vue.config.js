module.exports = {
  configureWebpack: config => {
    config.devtool = '#eval-source-map'
  },
  // devtool: 'inline=cheap-module-source-map'
}