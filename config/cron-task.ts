export default {
  deleteInactiveUser: {
    task: async ({ strapi }) => {
      // console.log("cron-task strapi: ", strapi);
      const currTime = new Date().getTime();
      console.log("cron-task currTime: ", currTime);

      const users = await strapi.entityService.findMany("plugin::users-permissions.user",
        // {
        //   populate: [
        //     "role"
        //   ],
        // }
      );
      console.log("cron-task users: ", users);
      
      const timeDeltas = users?.map((item) => {
        return currTime - parseInt(item.lastLogin);
      })
      console.log("cron-task timeDeltas: ", timeDeltas);
    },
    options: {
      // https://docs.strapi.io/dev-docs/configurations/cron#enabling-cron-jobs
      rule: "1 * * * * *",
    },
  },
};