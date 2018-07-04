const nodeExternals = require('webpack-node-externals');
// const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
  head: {
    title: 'GDG Bali',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GDG Bali' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Product+Sans:400'
      }
    ]
  },
  plugins: [
    '~/plugins/vuetify.js',
    {
      src: '~/plugins/vue-lazy-load.js',
      ssr: false
    }
  ],
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Indonesia',
            code: 'id',
            iso: 'id',
            file: 'id.js'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en.js'
          }
        ],
        langDir: 'lang/',
        lazy: true,
        defaultLocale: 'id',
        vueI18n: {
          fallbackLocale: 'id'
        }
      }
    ]
  ],
  css: ['~/assets/style/app.styl'],
  loading: { color: '#3B8070' },
  build: {
    babel: {
      plugins: [
        [
          'transform-imports',
          {
            vuetify: {
              transform: 'vuetify/es5/components/${member}',
              preventFullImport: true
            }
          }
        ]
      ]
    },
    vendor: [
      '~/plugins/vuetify.js',
      '~/plugins/vue-lazy-load.js',
      'axios',
      'babel-polyfill'
    ],
    extractCSS: true,
    cssSourceMap: false,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(webp)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=[name].[hash].[ext]']
      });

      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
