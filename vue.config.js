module.exports = {
  configureWebpack: {
    resolve: {
      //   extensions: [],
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        assets: "@/assets",
        views: "@/views"
      }
    }
  },
  // devServer: {
  //   host: "127.0.0.1",
  //   port: 8084,
  //   https: false,
  //   proxy: {
  //     "/api": {
  //       target: "http://127.0.0.1:8085",
  //       changeOrigin: true,
  //       ws: false, // 是否代理websocket
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   }
  // }
};
