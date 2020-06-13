# Braid Lookup

This repo builds and deploys a simple chrome and firefox extension for searching braid components. 

![screenshot of chrome extension](./public/screenshot_real.png)


This project is powered by [sku](https://github.com/seek-oss/sku), [braid](https://github.com/seek-oss/braid-design-system) and built with [React](https://facebook.github.io/react).

## Links

[Chrome Web Store](https://chrome.google.com/webstore/detail/braid-lookup-extension/djejlpbhhhhidocammjkigbcpdcggmgj)

[Firefox Addon](https://addons.mozilla.org/en-US/firefox/addon/braid-lookup-extension)


## Getting Started

First of all, make sure you&#39;ve installed [Yarn](https://yarnpkg.com).

Then, install dependencies:

```bash
$ yarn
```

## Workflow

Start a local development server:

```bash
$ yarn start
```

Run unit tests:

```bash
$ yarn test
```

Lint and format code:

```bash
$ yarn lint
$ yarn format
```

Build assets for production:

```bash
$ yarn build
```

Zip folders to be uploaded to chrome and firefox:
```bash
$ yarn build-zip
```

## Releasing updates
The code is automatically released using github Actions. 
Raise a PR from master to release branch to create a new release

# INSTRUCTIONS FOR FIREFOX

1. Requires node and yarn
1. Run

```
yarn
yarn build
```

1. zip contents of dist folder. I do this by highlighting all the files in dist and compressing.
1. resulting zip file contains the extension
