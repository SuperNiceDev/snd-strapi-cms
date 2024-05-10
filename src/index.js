"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */

  // async bootstrap({ strapi }) {
  //   strapi.db.lifecycles.subscribe({
  //     models: ["plugin::users-permissions.user"],

  //     beforeFindMany(event) {
  //       console.log("---------------------");
  //       console.log("---------------------");
  //       // console.log("src/index.js bootstrap() beforeFindMany event: ", event);
  //       console.log("src/index.js bootstrap() beforeFindMany");
  //       console.log("---------------------");
  //       console.log("---------------------");
  //     },
  //   });

  //   // // generic subscribe
  //   // strapi.db.lifecycles.subscribe((event) => {
  //   //   if (event.action === 'beforeFindMany') {
  //   //     console.log("beforeFindMany event: ", event);
  //   //   }
  //   // });
  // }
};
