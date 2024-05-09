const { prefix } = require("../../api/category/routes/category");

module.exports = (plugin) => {
  plugin.contentTypes.user.lifecycles = {
    async beforeFindMany(event) {
      const ctx = strapi.requestContext.get();
      console.log("---------------------");
      console.log("---------------------");
      console.log('src/extensions/users-permissions/strapi-server.js beforeFindMany()');
      console.log('src/extensions/users-permissions/strapi-server.js beforeFindMany() event', event, ctx);
      console.log("---------------------");
      console.log("---------------------");
    },
  };


  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


  // plugin.controllers.user.updateMe = (ctx) => {
  //   ctx.params.id = ctx.state.user.id;
  //   return plugin.controllers.user.update(ctx);
  // }

  // plugin.routes['content-api'].routes.push({
  //   method: 'PUT',
  //   path: "users/update-me",
  //   handler: 'users.updateMe',
  //   config: {
  //     prefix: "",
  //     policies: [],
  //   }
  // });


  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


  // plugin.controllers.user.updateMe = async (ctx) => {
  //   const user = ctx.state.user;

  //   if (!user) {
  //     return ctx.unauthorized();
  //   };

  //   await strapi.query("plugin::users-permissions.user").update({
  //       where : {id: ctx.state.user.id},
  //       data: ctx.request.body,
  //     }).then(() => {
  //       ctx.response.status = 200;
  //     });
  // };

  // // Add the custom route
  // plugin.routes['content-api'].routes.unshift({
  //   method: 'PUT',
  //   path:  "user/me",
  //   handler: 'user.updateMe',
  //   config: {
  //     prefix: ''
  //   }
  // });


  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


  plugin.controllers.user.updateMe = async (ctx) => {
    if (!ctx.state.user || !ctx.state.user.id) {
      return ctx.response.status = 401;
    }

    await strapi.query("plugin::users-permissions.user").update({
        where : {id: ctx.state.user.id},
        data: ctx.request.body,
      }).then(() => {
        ctx.response.status = 200;
      });
  };

  plugin.routes["content-api"].routes.push(
    {
      method: "PUT",
      path: "user/me",
      handler: "user.updateMe",
      // config: {
      //   prefix: "",
      //   policies: ['global::isAuthenticated'],
      // }
    }
  );


  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


  return plugin;
};