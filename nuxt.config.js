export default {
  css: ["~/assets/styles/main.scss"],
  buildModules: ["@nuxtjs/style-resources, @nuxtjs/dotenv"],
  styleResources: {
    scss: ["~/assets/styles/variables.scss"],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        redirect: '/home'
      });
    }
    
  }
};
