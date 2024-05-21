# template_ssr_vue_quasar

## install process

### Quasar CLI

```bash
yarn global add @quasar/cli
yarn create quasar
```

### create-quasar

```bash
√ What would you like to build? » App with Quasar CLI, let's go!
√ Project folder: ... quasar-project
√ Pick Quasar version: » Quasar v2 (Vue 3 | latest and greatest)
√ Pick script type: » Javascript
√ Pick Quasar App CLI variant: » Quasar App CLI with Vite 2 (stable | v1)
√ Package name: ... quasar-project
√ Project product name: (must start with letter if building mobile apps) ... Quasar App
√ Project description: ... A Quasar Project
√ Author: ... s.wyss <stefan.arnold.wyss@gmail.com>
√ Pick a Vue component style: » Composition API with <script setup>
√ Pick your CSS preprocessor: » Sass with SCSS syntax
√ Check the features needed for your project: » Linting (vite-plugin-checker + ESLint), State Management (Pinia), axios, vue-i18n
√ Pick an ESLint preset: » Prettier
```

---

### integrations

#### SSR (Mode)

ServerSideRendering

SSR -> safer/more performant/SEO (Search-Engine Optimized)

```bash
quasar mode add ssr
```

#### PWA (Mode)

```bash
quasar mode add pwa
```

> https://quasar.dev/quasar-cli-vite/developing-ssr/introduction

> https://quasar.dev/quasar-cli-vite/developing-pwa/introduction

---

### tooling

> https://quasar.dev/app-extensions/discover#tooling
>

#### testing

> https://github.com/quasarframework/quasar-testing

#### apollo (GraphQL)

> https://github.com/quasarframework/app-extension-apollo/tree/dev

#### pinia plugins

##### Pinia Plugin Persist

By enabling the persist plugin on your store, the whole state will be stored in the sessionStorage by default.

> https://seb-l.github.io/pinia-plugin-persist/

```bash
yarn add pinia-plugin-persist
```

---

### components

> https://quasar.dev/app-extensions/discover#components

---

## config the app

### Icon Genie CLI

> https://quasar.dev/icongenie/installation

```bash
# Node.js >=18 is required.
yarn global add @quasar/icongenie
```

#### Icons

> https://quasar.dev/vue-components/icon
> https://iconexplorer.app/?selected
>
> https://icons.getbootstrap.com/
---

### Layout

> https://quasar.dev/layout-builder

#### MainLayout

Separate Layout Components

---

### Theme Builder
> https://quasar.dev/style/theme-builder

#### DarkTheme
> https://quasar.dev/quasar-plugins/dark#dark-api

---

## Install packages

### lodash

Lodash modular utilities.
> https://lodash.com/

```bash
yarn add lodash
```

✅⭕

### dotenv

Loads environment variables from .env file
> https://github.com/motdotla/dotenv#readme

```bash
yarn add dotenv
```

✅⭕

### APEXCHARTS.JS

Modern & Interactive Open-source Charts
> https://apexcharts.com/
>

```bash
yarn add apexcharts
```

✅⭕

### Chart.js

Easy and beautiful charts with Chart.js and Vue.js
> https://vue-chartjs.org/
>

```bash
yarn add vue-chartjs chart.js
yarn add vue3-apexcharts

```

✅⭕
