module.exports = (plugin) => {
  plugin.contentTypes.user.lifecycles = {
    async beforeFindMany(event) {
      const ctx = strapi.requestContext.get();
      console.log("---------------------");
      console.log("---------------------");
      console.log("---------------------");
      console.log('strapi-server.js beforeFindMany() event', event, ctx);
    },
  };

  return plugin;
};