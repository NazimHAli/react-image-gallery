# Imgur Explorer

ReactJS + [Imgur API](https://imgur.com/) + [vitejs bundler](https://github.com/vitejs/vite) in TypeScript.

## Features

- ReactJS in TypeScript
- ViteJS
- Lazy loading & code splitting
- Image modal
- [imgur API features](https://api.imgur.com/)
  - Search
  - Sort results
  - Explore tags

##### Mocked Data From API

If you don't want to register and use the free Imgur API, it will use mocked data/saved responses from the API. It's also useful for faster local development so you don't have to make new requests with every HMR update.

[![DeepSource](https://deepsource.io/gh/NazimHAli/imgur-explorer.svg/?label=active+issues&show_trend=true&token=aO_Hx9m4iDxMopueaxAigoGd)](https://deepsource.io/gh/NazimHAli/imgur-explorer)
[![DeepSource](https://deepsource.io/gh/NazimHAli/imgur-explorer.svg/?label=resolved+issues&show_trend=true&token=aO_Hx9m4iDxMopueaxAigoGd)](https://deepsource.io/gh/NazimHAli/imgur-explorer)
[![CodeQL](https://github.com/NazimHAli/imgur-explorer/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/NazimHAli/imgur-explorer/actions/workflows/codeql-analysis.yml)
[![Unit Tests](https://github.com/NazimHAli/imgur-explorer/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/NazimHAli/imgur-explorer/actions/workflows/unit-tests.yml)

##### Google PageSpeed Scores (need to automate to add a badege for live scores)

- Mobile [93/100](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fimgur-explorer.vercel.app%2F&tab=mobile)
- Desktop [99/100](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fimgur-explorer.vercel.app%2F&tab=desktop)

### [Live Demo](https://imgur-explorer.vercel.app/)

![image](https://user-images.githubusercontent.com/26750288/137959059-cdb00104-2c32-4a7e-bc42-d0f680561f4d.png)

## Quick start

```bash
yarn
yarn dev
```

## Build

```bash
yarn build
yarn serve
```

## Imgur API

1. [Free registration](https://api.imgur.com/oauth2/addclient)
2. Pass the client ID as an environemnt variable (can be in .env or through CLI)
   - `PUBLIC_IMGUR_CLIENT_ID=xxxxx yarn dev`

## TODO

### Features

- [ ] Explore by categories
- [ ] Profile login
- [ ] Upload images

### Tests

- [ ] ~70% unit test coverage
- [ ] Cypress performance & integration tests
- [ ] Accessibility tests
