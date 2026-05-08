# Kitteness

A Vue 3 cat gallery powered by [TheCatAPI](https://thecatapi.com/) — browse random cat photos, explore breeds, and dive into each one's traits.

<img width="650" alt="image" src="https://github.com/denys-petryniak/kitteness/assets/16530588/2f9f5395-949c-4fe2-a65c-2c8ca36d4545">

## Features

- **Gallery** — a fresh batch of random cat photos on demand
- **Breeds** — searchable selector with an image carousel for each breed
- **Breed details** — image, description, characteristics, and a Wikipedia link
- **Dark mode** — toggle with persisted preference

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Pinia](https://pinia.vuejs.org/) for state
- [Vue Router](https://router.vuejs.org/) for navigation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [@vueuse/core](https://vueuse.org/), [vue-select](https://vue-select.org/), [vue3-carousel](https://github.com/ismail9k/vue3-carousel)

## Explore in StackBlitz

Click the button below to open the project in StackBlitz for preview and experimentation:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/denys-petryniak/kitteness)

Feel free to explore the code, make changes, and see the results in real-time!

## Project setup

Copy the example env file and fill in your [TheCatAPI](https://thecatapi.com/) credentials:

```
cp .env.example .env
```

Install dependencies:

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
