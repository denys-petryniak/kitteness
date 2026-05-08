# Kitteness

A Vue 3 cat gallery powered by [TheCatAPI](https://thecatapi.com/) — browse random cat photos, explore breeds, and dive into each one's traits.

<p align="center">
  <img width="420" alt="Dark mode" src="https://github.com/user-attachments/assets/bffe8189-2847-475b-bf0b-9a57d208a801" />
  <img width="420" alt="Light mode" src="https://github.com/user-attachments/assets/e6e7e904-a262-4cf4-9f28-9c815626caed" />
</p>

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
