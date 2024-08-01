export default {
  deleteInactiveUser: {
    task: async ({ strapi }) => {
      const currTime = new Date().getTime();
      const users = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
      );

      users?.forEach(async (item) => {
        const delta = currTime - parseInt(item.lastLogin) || 0;
        const deltaReadable = new Date(delta).toISOString().slice(11, 19);
        console.log("----------------");
        console.log("cron-task deltaReadable: ", deltaReadable);
        const yearInMilliSeconds = 1000 * 60 * 60 * 24 * 365;
        if (delta > yearInMilliSeconds) {
          // await strapi.entityService.delete(
          //   "plugin::users-permissions.user",
          //   item.id,
          // );
        }
        return;
      });
    },
    options: {
      // https://docs.strapi.io/dev-docs/configurations/cron
      rule: "0 0 1 * * 1", // run every monday at 1am
      // rule: "* * * * * *", // run every second

      // timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
      tz: "Europe/Berlin",
    },
  },
};
