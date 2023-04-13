const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    port: 8080,
    proxy: {
      '/api': {
        target: ' http://192.168.0.3:8080/',
        changeOrigin: true, //是否跨域
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
