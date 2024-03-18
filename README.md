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





## ngrok

https://dashboard.ngrok.com/get-started/setup/macos

- register
- download ngrok to /Applications
- open Terminal

```sh
# go to ngrok folder
cd /Applications
# connect http to local strapi port
./ngrok http 1337
```


## Google Auth

https://strapi.io/blog/user-authentication-in-next-js-with-strapi

Credentials / OAuth 2.0 Client IDs 

Strapi Auth

Authorized JavaScript origins:
https://340b-2a01-599-911-565b-a4c9-e843-19be-a549.ngrok-free.app

Authorized redirect URIs:
https://340b-2a01-599-911-565b-a4c9-e843-19be-a549.ngrok-free.app/api/auth/callback/google
https://340b-2a01-599-911-565b-a4c9-e843-19be-a549.ngrok-free.app/api/connect/google/callback

Creds:
551670901458-q7q1j4c7f1rs187o7hi8gcsei64be523.apps.googleusercontent.com
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


api/auth/google/callback/
api/connect/google/callback/


/api/connect/google
https://340b-2a01-599-911-565b-a4c9-e843-19be-a549.ngrok-free.app/api/connect/google/


