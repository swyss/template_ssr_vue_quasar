# QUASAR PROJECT INFO
## create a Quasar app

```bash
yarn create quasar

√ What would you like to build? » App with Quasar CLI, let's go!
√ Project folder: ... quasar-project
√ Pick Quasar version: » Quasar v2 (Vue 3 | latest and greatest)
√ Pick script type: » Typescript
√ Pick Quasar App CLI variant: » Quasar App CLI with Vite 2 (stable | v1)
√ Package name: ... quasar-project
√ Project product name: (must start with letter if building mobile apps) ... Quasar App
√ Project description: ... A Quasar Project
√ Author: ... s.wyss <stefan.arnold.wyss@gmail.com>
√ Pick a Vue component style: » Composition API with <script setup>
√ Pick your CSS preprocessor: » Sass with SCSS syntax
√ Check the features needed for your project: » Linting (vite-plugin-checker + ESLint + vue-tsc), State Management (Pinia), axios, vue-i18n
√ Pick an ESLint preset: » Prettier
```

## add modes
### SSR
> https://quasar.dev/quasar-cli-vite/developing-ssr/preparation
```bash
quasar mode add ssr
```
### PWA
> https://quasar.dev/quasar-cli-vite/developing-pwa/preparation
```bash
quasar mode add pwa
```
