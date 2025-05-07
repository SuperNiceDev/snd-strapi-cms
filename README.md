# snd-strapi-cms

Welcome to [SuperNice Dev](https://www.supernice-dev.com/en) Strapi cms project.

This is a boilerplate for examples and best practices.


## Main Technologies

- [Node.js 20](https://nodejs.org/docs/latest-v20.x/api/index.html)
- [React 19](https://react.dev/)
- [Strapi 5](https://docs.strapi.io/cms/intro)


## Setup

- install Node.js:
https://nodejs.org/en/download

- install yarn:
https://yarnpkg.com/getting-started/install
https://classic.yarnpkg.com/en/docs/install#mac-stable

- install node modules:
```sh
yarn
```

- duplicate [.env.example](./.env.example) file, rename to .env and add credentials.

- register admin account:
  http://localhost:1337/admin/

- set roles:
  http://localhost:1337/admin/settings/users-permissions/roles/1
  - Users-permissions -> updateMe

  http://localhost:1337/admin/settings/users-permissions/roles/2
  - Global -> find 
  - Page -> find & findOne

- set auth providers:
  http://localhost:1337/admin/settings/users-permissions/providers
  - google:  front-end app redirect URL: http://localhost:3000/api/auth/callback/google
  - linkedin front-end app redirect URL: http://localhost:3000/api/auth/callback/linkedin

- add navigation:
  - http://localhost:1337/admin/content-manager/single-types/api::global.global

- add pages:
  - http://localhost:1337/admin/content-manager/collection-types/api::page.page

Run dev
```sh
yarn dev
```