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

- duplicate and rename .env.example file to .env and update if needed

- register admin account

- set roles:
  http://localhost:1337/admin/settings/users-permissions/roles/2
  - Global -> find 
  - Page -> find
         -> findOne

- set providers:
  http://localhost:1337/admin/settings/users-permissions/providers
  - google
  - linkedin

- add pages:
  - http://localhost:1337/admin/content-manager/collection-types/api::page.page

- add navigation:
  - http://localhost:1337/admin/content-manager/single-types/api::global.global

Run dev
```sh
yarn dev
```