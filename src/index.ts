"use strict";

import lifecycles from "./extensions/users-permissions/content-types/user/lifecycles";

export default {
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

  async bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["plugin::users-permissions.user"],
      ...lifecycles,
    });

    // // generic subscribe
    // strapi.db.lifecycles.subscribe((event) => {
    //   if (event.action === 'beforeFindMany') {
    //     console.log("beforeFindMany event: ", event);
    //   }
    // });
  },
};
