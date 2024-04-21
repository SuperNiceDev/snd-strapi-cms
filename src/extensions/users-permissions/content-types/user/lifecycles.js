// https://forum.strapi.io/t/adding-lifecycles-to-strapi-v4-user-permissions-plugin/35958

module.exports = {
  beforeFindMany(event) {
    const ctx = strapi.requestContext.get();
    console.log("---------------------");
    console.log('src/extensions/users-permissions/content-types/user/lifecycles.js lifecycles() beforeFindMany() event: ', event);
    // console.log('src/extensions/users-permissions/content-types/user/lifecycles.js lifecycles() beforeFindMany()');
    console.log("---------------------");
    console.log("---------------------");
  },
  
  afterFindMany(event) {
    // console.log("afterFindMany event: ", event);
  },
};
