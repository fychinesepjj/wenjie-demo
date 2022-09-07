const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 8082
  }
})