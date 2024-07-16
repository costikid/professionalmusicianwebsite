
export default defineNuxtConfig({
  css: ["~/assets/styles/main.scss"],

  // Add buildModules and dotenv to handle environment variables
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/dotenv"],

  

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
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/",
        redirect: "/home",
      });
    },
  },
})
