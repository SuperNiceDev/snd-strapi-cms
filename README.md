# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>


---

## Google Users & Permissions Provider

https://strapi.io/blog/user-authentication-in-next-js-with-strapi


### Google Config

https://console.cloud.google.com/apis/credentials?project=strapi-auth-demo-417609

Credentials / OAuth 2.0 Client IDs -> Strapi OAuth Client

Authorized JavaScript origins:
http://localhost:1337

Authorized redirect URIs:
http://localhost:1337/api/auth/google/callback
http://localhost:1337/api/connect/google/callback


### Strapi Config

http://localhost:1337/admin/settings/users-permissions/providers

Client ID:
551670901458-q7q1j4c7f1rs187o7hi8gcsei64be523.apps.googleusercontent.com

Client Secret:
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

The redirect URL to your front-end app:
http://localhost:1337/api/auth/google/callback

The redirect URL to add in your google application configurations:
http://localhost:1337/api/connect/google/callback


### Test
http://localhost:1337/api/connect/google


---


## Zaikio Custom Users & Permissions Provider


### Heidelberg Plus

https://home.plus.heidelberg.com/#/profile/overview


### Zaikio Docs

https://docs.zaikio.com/api/directory/oauth.html

https://docs.zaikio.com/guide/oauth/redirect-flow.html

https://docs.zaikio.com/integration/private-apps.html


### Zaikio Config

https://hub.sandbox.zaikio.com/organizations/fp-interactive/apps/excite


### Strapi Config

https://strapi.io/blog/how-to-add-a-custom-o-auth2-open-id-connect-provider-to-strapi-v4

#### patch node modules

node_modules/grant/config/oauth.json
```
"zaikio": {
  "authorize_url": "https://hub.sandbox.zaikio.com/oauth/authorize",
  "access_url": "https://hub.sandbox.zaikio.com/oauth/access_token",
  "oauth": 2
}
```

node_modules/grant/config/profile.json
```
"zaikio": {
  "profile_url": "https://hub.sandbox.zaikio.com/oauth/userinfo"
}
```

node_modules/purest/config/providers.json
```
"zaikio": {
  "default": {
    "origin": "https://hub.sandbox.zaikio.com",
    "path": "{path}",
    "headers": {
      "authorization": "Bearer {auth}"
    }
  },
  "oauth": {
    "origin": "https://hub.sandbox.zaikio.com",
    "path": "oauth/{path}"
  }
}
```

node_modules/@strapi/plugin-users-permissions/server/bootstrap/grant-config.js
```
zaikio: {
  enabled: true,
  icon: 'zaikio',
  key: '',
  secret: '',
  callback: `${baseURL}/callback`,
  scope:["zaikio.person.r"]
}
```

node_modules/@strapi/plugin-users-permissions/server/services/providers-registry.js
```
async zaikio({ accessToken }) {
  const zaikio = purest({ provider: 'zaikio' });
  const { body } = await zaikio.get('oauth/userinfo').auth(accessToken).request();
  
  return {
    username: body.name,
    email: body.email
  }
},
```

patch changed node modules
```
yarn patch-package grant purest @strapi/plugin-users-permissions
```

#### config provider in CMS

http://localhost:1337/admin/settings/users-permissions/providers

Client ID:
2fd2b6db-571c-43bf-8b95-179075c6b484

Client Secret:
9TgCWmR7tygcpyAtsBynfpDq

The redirect URL to your front-end app:
http://localhost:1337/api/auth/zaikio/callback

The redirect URL to add in your zaikio application configurations:
http://localhost:1337/api/connect/zaikio/callback


### Test
http://localhost:1337/api/connect/zaikio/




## ngrok

https://dashboard.ngrok.com/get-started/setup/macos

ngrok.yml:
/Users/philipp_neumann/Library/Application Support/ngrok/ngrok.yml

- register
- download ngrok to /Applications
- open Terminal

```sh
# go to ngrok folder
cd /Applications
# connect http to local strapi port
./ngrok http 1337
```