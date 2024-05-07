export default {
  deleteUser: {
    task: async ({ strapi }) => {
      // console.log("cron-task strapi: ", strapi);
      
      const users = await strapi.entityService.findMany("plugin::users-permissions.user",
        // {
        //   populate: [
        //     "role"
        //   ],
        // }
      );
      console.log("cron-task users: ", users);

      const user = await strapi.entityService.findOne("plugin::users-permissions.user",
        45
      );
      console.log("cron-task user: ", user);
    },
    options: {
      // https://docs.strapi.io/dev-docs/configurations/cron#enabling-cron-jobs
      rule: "1 * * * * *",
    },
  },
};