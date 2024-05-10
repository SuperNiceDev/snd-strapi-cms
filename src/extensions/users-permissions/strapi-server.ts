export default (plugin) => {
  // console.clear();
  // console.log("src/extensions/users-permissions/strapi-server.js");
  // console.log("plugin: ", plugin);

  // plugin.contentTypes.user.lifecycles = {
  //   async beforeFindMany(event) {
  //     const ctx = strapi.requestContext.get();
  //     console.log("---------------------");
  //     console.log("---------------------");
  //     // console.log("src/extensions/users-permissions/strapi-server.js beforeFindMany(");
  //     console.log("src/extensions/users-permissions/strapi-server.js beforeFindMany() event", event, ctx);
  //     console.log("---------------------");
  //     console.log("---------------------");
  //   },
  // };

  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // https://www.youtube.com/watch?v=2ZwiiY6tnmw

  plugin.controllers.user.updateMe = async (ctx) => {
    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }

    const updatedUserData = {
      ...ctx.request.body,
      // username: ctx.state.user.username || ctx.request.body.username,
      // email: ctx.state.user.email || ctx.request.body.email,
      lastLogin: ctx.request.body.lastLogin,
      authProvider: ctx.state.user.provider,
    };

    // console.error("ctx.state.user:", ctx.state.user);

    try {
      await strapi.query("plugin::users-permissions.user").update({
        where: { id: ctx.state.user.id },
        data: updatedUserData,
      });
      ctx.response.status = 200;
    } catch (error) {
      console.error("Error updating user data:", error);
      ctx.response.status = 500;
    }
  };

  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });

  return plugin;
};
