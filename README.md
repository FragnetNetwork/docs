# Fragnet's Knowledgebase (Beta)

Note that this is currently in a Beta state and therefore it is missing a lot of content.

Feel free to contribute if you feel like something is off. Any contribution will be rewarded for its effort (just make sure you reach out to us).

### Prerequisites
You need to have [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started/install) installed on your machine.

### Installation
Install all packages used by the project using:
```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Any changes pushed to the `main` branch will be automatically deployed to [https://docs.fragnet.net](https://docs.fragnet.net) via github actions.