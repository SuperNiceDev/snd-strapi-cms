# 🚀 Getting started

## SETUP

```
yarn
```

```
yarn patch-package
```

```
yarn dev
```

p.neumann@supernice-dev.com
123456Aa


## STRAPI REST API 

populate:
http://localhost:1337/api/categories?populate[products][populate][0]=image

---

## Google OAuth

https://strapi.io/blog/user-authentication-in-next-js-with-strapi


### Google Cloud Console Config

https://console.cloud.google.com/apis/credentials?project=strapi-auth-demo-417609

Credentials / OAuth 2.0 Client IDs -> Strapi OAuth Client

Authorized JavaScript origins:
http://localhost:1337

Authorized redirect URIs:
http://localhost:1337/api/connect/google/callback
http://localhost:1337/api/auth/google/callback
http://localhost:3000/api/auth/callback/google


### Strapi Users and Permissions Plugin Provider Google Config

http://localhost:1337/admin/settings/users-permissions/providers

Client ID:
551670901458-q7q1j4c7f1rs187o7hi8gcsei64be523.apps.googleusercontent.com

Client Secret:
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

The redirect URL to your front-end app:
http://localhost:1337/api/auth/google/callback
http://localhost:3000/api/auth/callback/google

The redirect URL to add in your google application configurations:
http://localhost:1337/api/connect/google/callback


### Test
http://localhost:1337/api/connect/google


---


## Zaikio OAuth


### Heidelberg Plus

https://home.plus.heidelberg.com/#/profile/overview


### Zaikio Docs

https://docs.zaikio.com/api/directory/oauth.html

https://docs.zaikio.com/guide/oauth/redirect-flow.html

https://docs.zaikio.com/integration/private-apps.html


### Zaikio Hub Config

https://hub.sandbox.zaikio.com/organizations/fp-interactive/apps/excite/oauth_credentials

Redirect URLs:
http://localhost:1337/api/connect/zaikio/callback
http://localhost:3000/api/auth/callback/zaikio


### Strapi Users and Permissions Plugin Provider Zaikio Config

https://strapi.io/blog/how-to-add-a-custom-o-auth2-open-id-connect-provider-to-strapi-v4

Client ID:
b4b45947-16c8-40bc-8106-35ff237496d1

Client Secret:
QD3dg5TaX2mxfhn7uMFdXC7N

The redirect URL to your front-end app:
http://localhost:1337/api/auth/zaikio/callback
http://localhost:3000/api/auth/callback/zaikio

The redirect URL to add in your google application configurations:
http://localhost:1337/api/connect/zaikio/callback



### patch-package:

When ```patches``` folder already excisits:
```
yarn patch-package
```


### patch node modules

When ```patches``` folder NOT already excisits,
make these changes:

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

### Test
http://localhost:1337/api/connect/zaikio/

---

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