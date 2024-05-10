export default {
  deleteInactiveUser: {
    task: async ({ strapi }) => {
      // console.log("cron-task strapi: ", strapi);
      const currTime = new Date().getTime();
      // console.log("cron-task currTime: ", currTime);

      const users = await strapi.entityService.findMany(
        "plugin::users-permissions.user",
        // {
        //   populate: [
        //     "role"
        //   ],
        // }
      );
      // console.log("cron-task users: ", users);

      users?.forEach(async (item) => {
        const delta = currTime - parseInt(item.lastLogin);
        if (delta > 31536000000) {
          console.log("one year inactive!");
          await strapi.entityService.delete(
            "plugin::users-permissions.user",
            item.id,
          );
        }
        console.log("cron-task delta: ", delta);
        const deltaPr = new Date(delta).toISOString().slice(11, 19);
        console.log("cron-task deltaPr: ", deltaPr);
        return;
      });
    },
    options: {
      // https://docs.strapi.io/dev-docs/configurations/cron#enabling-cron-jobs
      rule: "1 * * * * *",
    },
  },
};
