export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss"],

  // Add buildModules and dotenv to handle environment variables
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/dotenv","@nuxtjs/composition-api/module"],

  // Add styleResources for SCSS variables
  styleResources: {
    scss: ["~/assets/styles/variables.scss"],
  },

  // Configure dotenv module to load environment variables
  dotenv: {
    // Specify the path to your .env file
    path: '.env',
  },

  // Configure router with extendRoutes for custom route handling
  router: {
    routes: [
      { path: '/', redirect: '/home' }, // Redirect / to /home
      { path: '/home', component: '@/pages/home.vue' },
      { path: '/performer', component: '@/pages/performer.vue' },
      { path: '/research', component: '@/pages/research.vue' },
      { path: '/teacher', component: '@/pages/teacher.vue' },

    ],
  },

  // Configure meta tags using vue-meta
  head: {
    titleTemplate: '%s - Janell Yeo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Janell Yeo is a musician available for hire, Phd researcher and violin teacher based in London, UK. ' },
      // Add Open Graph (OG) meta tags for social media sharing
      { hid: 'og:title', property: 'og:title', content: 'Janell Yeo' },
      { hid: 'og:description', property: 'og:description', content: 'Janell Yeo is a musician available for hire, Phd researcher and violin teacher based in London, UK.' },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dpcy1ezvt/image/upload/v1721136001/pexels-charles-parker-6647625_jv8gka.jpg' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      // Add Twitter meta tags for Twitter cards
      { name: 'twitter:title', content: 'Janell Yeo' },
      { name: 'twitter:description', content: 'Janell Yeo is a musician available for hire, Phd researcher and violin teacher based in London, UK.' },
      { name: 'twitter:image', content: 'https://res.cloudinary.com/dpcy1ezvt/image/upload/v1721136001/pexels-charles-parker-6647625_jv8gka.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      // Add link tags as needed (e.g., for favicons, canonical URLs)
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  
    ],
  },

  // Configure sitemap generation
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    routes: [
      '/home',
      '/performer',
      '/research',
      '/teacher',
    ],
  },

  // Configure robots.txt
  robots: {
    UserAgent: '*',
    Disallow: '',
    Allow: '/',
  },

  compatibilityDate: "2024-07-16",
});