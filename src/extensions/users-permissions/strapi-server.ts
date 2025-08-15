export default (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    const ctxStateUser = ctx.state.user;
    if (!ctxStateUser?.id) {
      return ctx.unauthorized();
    }

    const ctxReqBody = ctx.request.body
    const dataTmp = {
      ...ctxReqBody,
      lastLogin: ctxReqBody.lastLogin,
      authProvider: ctxStateUser.provider,
      provider: ctxStateUser.provider,
    };

    try {
      // await strapi
      //   .plugin('users-permissions')
      //   .service('user')
      //   .update({ ... });
      await strapi.query("plugin::users-permissions.user").update({
        where: { id: ctxStateUser.id },
        data: dataTmp,
      });
      ctx.status = 200;
      ctx.body = { success: true };
    } catch (error) {
      console.error('Error updating user:', error);
      strapi.log.error('Error updating user:', error);
      ctx.internalServerError('Internal server error');
    }
  };

  const contentApiFunc = plugin.routes['content-api'];

  plugin.routes['content-api'] = () => {
    const contentApi = contentApiFunc();
    const routesExt = contentApi.routes || [];

    routesExt.unshift({
      method: 'PUT',
      path: '/users/me',
      handler: "user.updateMe",
      config: {
        prefix: '',
        policies: [],
        // auth: {
        //   scope: ['plugin::users-permissions.user.updateMe'],
        // },
      },
    });

    return { ...contentApi, routes: routesExt };
  };

  return plugin;
};
