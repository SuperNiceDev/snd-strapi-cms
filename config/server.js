module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // url: "http://localhost:1337"
  // url: "https://340b-2a01-599-911-565b-a4c9-e843-19be-a549.ngrok-free.app"
});
