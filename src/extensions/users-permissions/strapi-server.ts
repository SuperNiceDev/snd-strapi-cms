export default (plugin) => {

  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // plugin.contentTypes.user.lifecycles = {
  //   async beforeFindMany(event) {
  //     console.log("---------------------");
  //     console.log("src/extensions/users-permissions/strapi-server.js beforeFindMany(");
  //     console.log("event: ", event);
  //     const ctx = strapi.requestContext.get();
  //     console.log("ctx: ", ctx);
  //     console.log("---------------------");
  //   },
  // };

  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::

  // https://www.youtube.com/watch?v=2ZwiiY6tnmw

  plugin.controllers.user.updateMe = async (ctx) => {
    console.log("---------------------");
    console.log("---------------------");
    console.log("---------------------");
    console.log("plugin.controllers.user: ", plugin.controllers.user);

    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }

    const updatedUserData = {
      ...ctx.request.body,
      username: "Philipp Neumann",
      // username: ctx.state.user.username || ctx.request.body.username,
      // email: ctx.state.user.email || ctx.request.body.email,
      // firstname: ctx.state.user.firstname || ctx.request.body.firstname,
      // lastname: ctx.state.user.lastname || ctx.request.body.lastname,
      lastLogin: ctx.request.body.lastLogin,
      authProvider: ctx.state.user.provider,
    };
    
    // console.log("ctx.state.user: ", ctx.state.user);

    try {
      await strapi.query("plugin::users-permissions.user").update({
        where: { id: ctx.state.user.id },
        data: updatedUserData,
      });
      ctx.response.status = 200;
    } catch (error) {
      console.error("Error updating user data: ", error);
      ctx.response.status = 500;
    }
  };

  // plugin.routes["content-api"].routes.push({
  //   method: "PUT",
  //   path: "/user/me",
  //   handler: "user.updateMe",
  //   config: {
  //     prefix: "",
  //     policies: [],
  //   },
  // });
  plugin.routes["content-api"].routes.unshift({
    method: "PUT",
    path: "/users/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });

  return plugin;
};
