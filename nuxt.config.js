export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bCarte',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css', '@/assets/css/menu.css', '@/assets/css/bootstrap.min.css',
    '@/assets/css/flaticon.css', '@/assets/css/dropdown-effects/fade-down.css',
    '@/assets/css/magnific-popup.css', '@/assets/css/owl.carousel.min.css',
    '@/assets/css/owl.theme.default.min.css', '@/assets/css/responsive.css',
    '@/assets/css/animate.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/assets/js/bootstrap.min.js', '@/assets/js/custom.js', '@/assets/js/quick-form.js',
    '@/assets/js/jquery.magnific-popup.min.js', '@/assets/js/request-form.js', '@/assets/js/jquery.validate.min.js',
    '@/assets/js/jquery.ajaxchimp.min.js', '@/assets/js/wow.js' , '@/assets/js/owl.carousel.min.js', 
    '@/assets/js/menu.js', '@/assets/js/jquery-3.6.0.min.js' , '@/assets/js/modernizr.custom.js',
    '@/assets/js/jquery.easing.js', '@/assets/js/jquery.appear.js', '@/assets/js/jquery.scrollto.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
