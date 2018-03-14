module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Strypes (Prototype)',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'theme-color',
        content: '#ff7700'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Strypes (Prototype)'
      }
    ],
    // link: [{
    //   rel: 'icon',
    //   type: 'image/x-icon',
    //   href: '/favicon.ico'
    // }]
  },



  // mode: 'spa',

  css: [
    '~assets/css/marginpaddinghelpers.css',
    '~assets/bulmaCustom/custom/custom.css',
    '~assets/fonts/vis/stylesheet.css',
    '~assets/fontello-104a8ccb/css/fontello.css',
    // '~assets/fontawesome-free-5.0.8/web-fonts-with-css/css/fontawesome-all.min.css',
    '~assets/scss/main.scss',
    //'~assets/main.css',
    //'~assets/font-awesome-4.7.0/css/font-awesome.min.css',
    // 'swiper/dist/css/swiper.css',
    //'~assets/swiper.css',

  ],


  router: {
    middleware: ['closeReadmore', 'closeMenu'],
    scrollBehavior: function(to, from, savedPosition) {
      if (to.path === '/about' && from.path === '/about') {

      } else {

        if (savedPosition) {
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 10)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 50)
          window.setTimeout(function() {
            window.scroll(0, savedPosition.y)
          }, 100)
          // return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      }
    }
  },

  modules: [
    //'@nuxtjs/bulma'
  ],

  plugins: [
    '~/plugins/lodash-plugin.js',
    //'~/plugins/maps.js',

    //GLOBAL MIXINS
    '~/mixins/computedresizerglobalmixin.js',
    {
      src: '~/plugins/animejs.js',
      ssr: false
    },
    {
      src: '~/plugins/resizer.js',
      ssr: false
    },
    {
      src: '~/plugins/vueawesomeswiper-plugin.js',
      ssr: false
    },
    {
      src: '~/plugins/documentoffset.js',
      ssr: false
    },
    {
      src: '~/plugins/smoothscroll.js',
      ssr: false
    },
    {
      src: '~/plugins/lazyload.js',
      ssr: false
    },
    // {
    //   src: '~/mixins/computedscrollbarwidth.js',
    //   ssr: false
    // },
  ],

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#091540'
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios', 'lodash', 'animejs'],


    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    styleResources: {
      scss: './assets/scss/variables.scss',
    }

    /*
     ** Run ESLint on save
     */
    // extend(config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  generate: {
    minify: {
      collapseWhitespace: false
    }
  }
}
