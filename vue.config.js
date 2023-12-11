module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '北京中电兴发科技有限公司'
      return args
    })
  },
  // css相关配置
  css: {
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 192
          })
        ]
      }
    }
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8005,
    https: false,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/': {
        target: 'https://www.ichinae.com', // 正式环境  修改环境时同步修改base的地址   否则视频无法播放
        // target: 'http://192.168.10.57:9872',
        ws: true,
        changeOrigin: true // 设置同源
      }
    }
  }
}
