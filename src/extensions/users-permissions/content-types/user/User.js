module.exports = {
  lifecycles:{
    async beforeFindMany(event) {
      console.log("---------------------",);
      console.log("---------------------",);
      console.log("---------------------",);
      console.log('src/extensions/users-permissions/content-types/user/User.js lifecycles() beforeFindMany() event: ', event);
    },
  }
}; 