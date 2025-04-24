# 🚀 Getting started

## SETUP

```sh
yarn
yarn patch-package
yarn dev
```

Login
```
http://localhost:1337/admin
p.neumann@supernice-dev.com
123456Aa
```

---

## REST API

is-owner policy:
https://docs.strapi.io/dev-docs/backend-customization/middlewares#restricting-content-access-with-an-is-owner-policy

Filtering:
https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering


#### Website REST API config

https://strapi.io/blog/how-to-create-pages-on-the-fly-with-dynamic-zone

Foodadvisor content-types examples:
https://github.com/strapi/foodadvisor/blob/master/api/src/api/page/content-types/page/schema.json


#### Populate REST API
https://docs.strapi.io/dev-docs/api/rest/populate-select#population

http://localhost:1337/api/products/1?populate=*
http://localhost:1337/api/products/1?populate[0]=images&populate[1]=images.front
http://localhost:1337/api/categories?populate[products][populate][0]=image

Interactive query builder:
https://docs-v4.strapi.io/dev-docs/api/rest/interactive-query-builder
https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder

Populate pages:

```js
{
  fields: "*",
  populate: {
    seo: "*",
    sections: {
      fields: "*",
      populate: {
        rows: "*",
      },
    },
  },
}
```
http://localhost:1337/api/pages?fields=*&populate[seo]=*&populate[sections][fields]=*&populate[sections][populate][rows]=*


Populate Singeltypes Global components:

```js
{
  populate: [
    'navigation',
    'navigation.items',
    'navigation.items.page',
    'footer',
  ],
}
```
http://localhost:1337/api/global?populate[0]=navigation&populate[1]=navigation.items&populate[2]=footer

---

## Authenticated Requests

https://strapi.io/video-library/making-authenticated-requests


##### Get bearer token:

```js
import axios from "axios";

const res = await axios({
  method: "POST",
  url: "http://localhost:1337/api/auth/local",
  headers: { "content-type": "application/json" },
  data: {
    identifier: "p.neumann@supernice-dev.com",
    password: "123456Aa",
  },
});

// console.log("/api/auth/local res: ", res);
console.log("/api/auth/local data: ", res.data);
```

##### Use bearer token:

```js
import axios from "axios";

const res2 = await axios({
  method: "GET",
  url: "http://localhost:1337/api/users/me",
  headers: {
    Authorization: `Bearer ${res.data?.jwt}`,
  },
});

// console.log("/api/users/me res2: ", res2);
console.log("/api/users/me data: ", res2.data);
```

---

## Google OAuth

https://strapi.io/blog/user-authentication-in-next-js-with-strapi


#### Google Cloud Console Config

https://console.cloud.google.com/apis/credentials?project=strapi-auth-demo-417609

Credentials / OAuth 2.0 Client IDs -> Strapi OAuth Client

Authorized redirect URIs:
http://localhost:1337/api/connect/google/callback  (for Strapi)
http://localhost:3000/api/auth/callback/google     (for NextAuth)


#### Strapi Users and Permissions Plugin Provider Google Config

http://localhost:1337/admin/settings/users-permissions/providers

Client ID:
551670901458-q7q1j4c7f1rs187o7hi8gcsei64be523.apps.googleusercontent.com

Client Secret:
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

The redirect URL to your front-end app:
http://localhost:1337/api/auth/google/callback  (for Strapi)
http://localhost:3000/api/auth/callback/google  (for NextAuth)


#### Login
http://localhost:1337/api/connect/google


---


## Zaikio OAuth


#### Heidelberg Plus User Account

https://home.plus.heidelberg.com/#/profile/overview


#### Zaikio Docs

https://docs.zaikio.com/api/directory/oauth.html

https://docs.zaikio.com/guide/oauth/redirect-flow.html

https://docs.zaikio.com/integration/private-apps.html


#### Zaikio Hub Config

https://hub.sandbox.zaikio.com/organizations/fp-interactive/apps/excite/oauth_credentials

Redirect URLs:
http://localhost:1337/api/connect/zaikio/callback  (for Strapi)
http://localhost:3000/api/auth/callback/zaikio     (for NextAuth)


#### Strapi Users and Permissions Plugin Provider Zaikio Config

https://strapi.io/blog/how-to-add-a-custom-o-auth2-open-id-connect-provider-to-strapi-v4

Client ID:
b4b45947-16c8-40bc-8106-35ff237496d1

Client Secret:
QD3dg5TaX2mxfhn7uMFdXC7N

The redirect URL to your front-end app:
http://localhost:1337/api/auth/zaikio/callback  (for Strapi)
http://localhost:3000/api/auth/callback/zaikio  (for NextAuth)


#### Login
http://localhost:1337/api/connect/zaikio

---

## patch node modules:

When ```patches``` folder already excisits:
```sh
yarn patch-package
```


When ```patches``` folder NOT already excisits,
make these changes:

```js
// node_modules/grant/config/oauth.json
"zaikio": {
  "authorize_url": "https://hub.sandbox.zaikio.com/oauth/authorize",
  "access_url": "https://hub.sandbox.zaikio.com/oauth/access_token",
  "oauth": 2
}
```

```js
// node_modules/grant/config/profile.json
"zaikio": {
  "profile_url": "https://hub.sandbox.zaikio.com/oauth/userinfo"
}
```

```js
// node_modules/purest/config/providers.json
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

```js
// node_modules/@strapi/plugin-users-permissions/server/bootstrap/grant-config.js
zaikio: {
  enabled: true,
  icon: 'zaikio',
  key: '',
  secret: '',
  callback: `${baseURL}/callback`,
  scope:["zaikio.person.r"]
}
```

```js
// node_modules/@strapi/plugin-users-permissions/server/services/providers-registry.js
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
```sh
yarn patch-package grant purest @strapi/plugin-users-permissions
```

### Test
http://localhost:1337/api/connect/zaikio

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
