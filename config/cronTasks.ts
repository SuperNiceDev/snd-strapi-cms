export default {
  deleteInactiveUser: {
    task: async ({ strapi }) => {
      const users = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
      );

      const currTime = new Date().getTime();
      const yearInMilliSeconds = 1000 * 60 * 60 * 24 * 365;

      users?.forEach(async (item) => {
        const lastLogin = parseInt(item.lastLogin) || currTime;
        const delta = currTime - lastLogin;
        const isOneYearOver = delta > yearInMilliSeconds;
        
        // const lastLoginReadable = new Date(lastLogin).toISOString();
        // console.log(":::::::::::::::::::::::::::");
        // console.log("cronTasks deleteInactiveUser() item.email:         ", item.email);
        // console.log("cronTasks deleteInactiveUser() yearInMilliSeconds: ", yearInMilliSeconds);
        // console.log("cronTasks deleteInactiveUser() lastLogin:          ", lastLogin);
        // console.log("cronTasks deleteInactiveUser() lastLoginReadable:  ", lastLoginReadable);
        // console.log("cronTasks deleteInactiveUser() delta:              ", delta);
        // console.log(":::::::::::::::::::::::::::");
        
        if (isOneYearOver) {
          await strapi.entityService.delete(
            "plugin::users-permissions.user",
            item.id,
          );
        }
      });
    },
    options: {
      // https://docs.strapi.io/dev-docs/configurations/cron
      // rule: "* * * * * *", // for testing run every second 
      rule: "0 0 1 * * 1", // run every monday at 1am

      // timezones: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
      tz: "Europe/Berlin",
    },
  },
};
