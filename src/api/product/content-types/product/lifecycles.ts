// https://docs.strapi.io/dev-docs/backend-customization/models#available-lifecycle-events

export default {
  async beforeFindMany(event) {
    // async afterFindMany(event) {
    // async beforeOne(event) {
    console.log("---------------------");
    console.log(
      "src/api/product/content-types/product/lifecycles.ts lifecycles() beforeFindMany()",
    );
    // console.log('src/extensions/users-permissions/content-types/user/lifecycles.js lifecycles() beforeFindMany()');
    console.log("event: ", event);
    const ctx = strapi.requestContext.get();
    console.log("ctx: ", ctx);
    console.log("---------------------");
  },
};
