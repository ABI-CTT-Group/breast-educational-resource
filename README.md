# Breast APP

[![Read the Docs][readthedocs]][readthedocs-url]

## Setup Project

### Install with PWA

### Setup App

- Setup frontend
  - Environment: node 16.14.0/16.16.0, yarn 1.22.19
  - Download node via [nvm node manager](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# install nodejs
nvm install 16.16.0
nvm alias default 16.16.0
nvm use
# check node version
node -v
# install yarn globally
cd frontend
npm install -g yarn

# install frontend dependencies
yarn
# run frontend
yarn dev
```

[readthedocs]: https://img.shields.io/readthedocs/web-app-template
[readthedocs-url]: https://web-app-template.readthedocs.io/en/latest/

### Work with docs

You can write the docs with `reStructuredText` in .rst or `markdown`in .md format.

```sh
cd docs
# After you edit the docs, you want view it locally
# windows
./make html
# mac or linux
# make html

# install this package if you haven't installed it before
# npm i live-server -g

cd build/html

live-server
```

## Important documentation

- [Nuxt 2](https://v2.nuxt.com/docs/get-started/routing)
- [Vuetift 2](https://v2.vuetifyjs.com/en/getting-started/installation/)
- [Fastapi](https://fastapi.tiangolo.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Threejs](https://threejs.org/docs/)
- [Copper3d](https://github.com/LinkunGao/copper3d_visualisation)
