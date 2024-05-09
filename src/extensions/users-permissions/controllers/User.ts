module.exports = {
  async updateMe(ctx) {
    const { id } = ctx.state.user;
    const { email, username, password } = ctx.request.body;

    // Validate input if needed

    // Update user
    const updatedUser = await strapi.plugins['users-permissions'].services.user.edit({ id }, { email, username, password });

    ctx.send(updatedUser);
  },
};
