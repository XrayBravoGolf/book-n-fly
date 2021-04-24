const proxyTarget = 'http://localhost:3000'
module.exports = {
  lintOnSave: true,
  devServer: {
    port: 5000,
    proxy: {
      '^/api': {
        target: proxyTarget,
        ws: true,
        changeOrigin: true
      },
    },
    useLocalIp: false,
  }
}
