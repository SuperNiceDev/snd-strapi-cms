import imageOptimizerService from "strapi-plugin-image-optimizer/dist/server/services/image-optimizer-service";

export default (plugin) => {
  // console.log("strapi-server.ts plugin: ", plugin);
  plugin.services["image-manipulation"] = imageOptimizerService;
  return plugin;
};
