module.exports = {
  beforeFindMany(event) {
    const ctx = strapi.requestContext.get();
    console.log("---------------------");
    console.log("---------------------");
    console.log("src/api/product/content-types/product/lifecycles.js beforeFindMany ctx: ", ctx);
    console.log("---------------------");
    console.log("---------------------");
  },
  
  afterFindMany(event) {
    // console.log("afterFindMany event: ", event);
  },
};
