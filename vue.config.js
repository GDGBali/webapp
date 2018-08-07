const path = require('path');
const appConfig = require('./src/app.config');
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = {
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    devtool: 'source-map',
    plugins: [],
  },
  productionSourceMap: false,
  // Configure Webpack's dev server.
  // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
        { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
        { before: require('./tests/mock-api') }),
  },
  css: {
    sourceMap: true,
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'dev/service-worker.js',
    },
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.configureWebpack.plugins.push(
    new HtmlCriticalWebpackPlugin({
      base: path.join(path.resolve(__dirname), 'dist'),
      css: path.join(path.resolve(__dirname), 'dev', 'critical.css'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 375,
      height: 565,
      penthouse: {
        blockJSRequests: false,
      },
    })
  );
}
