const proxyTarget = "http://localhost:3000"
module.exports = {
    devServer: {
        port: 5000,
        changeOrigin: true,
        '/api': proxyTarget,
    }
}