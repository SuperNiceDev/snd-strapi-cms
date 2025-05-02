export default (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }

    const updatedUserData = {
      ...ctx.request.body,
      lastLogin: ctx.request.body.lastLogin,
      authProvider: ctx.state.user.provider,
    };
    
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
