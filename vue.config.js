module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // devServer: {
  //   host: '192.168.0.101', //host改成自己的IP
  //   port: 8080,
  //   proxy: null, // string | Object
  //   before: app => {}
  // }
}
