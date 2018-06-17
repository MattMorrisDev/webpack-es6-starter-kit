# Webpack ES6 starter kit

A simple starter project for bootstrapping ES6+ projects.
This is just a basic setup with only essential functionality.

- Webpack 4
- babel support
- sass support
- asset minification + inlining of smaller assets
- [Prettier](https://github.com/prettier/prettier) formatting with lint-staged
- live reload for development with webpack-dev-server

## Running / building

- `yarn start` - Start the live reload dev server on port 8080
- `yarn start:prod` - Same as yarn start, but with the 'prod' webpack env
- `yarn build:dev` - Builds with the 'dev' webpack env (output is in dist/)
- `yarn build:prod` - Builds with the 'prod' webpack env (output is in dist/)
- `yarn build:prod:bundle-analyzer` - See the breakdown/composition of your output bundles using [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- `yarn build:prod:bundle-buddy` - Identifies and displays duplicate code in your bundles using [bundle-buddy](https://github.com/samccone/bundle-buddy)

## Prerequisites

- Node 8+
- yarn

## Things to consider adding

- @babel/preset-env browser targets
- Add express or nginx for serving production builds
- Proxy server for use with a backend on a different port
