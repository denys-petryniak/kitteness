<template>
  <div v-if="randomCatPictures.isFetching">Loading...</div>
  <div v-else-if="randomCatPictures.error">
    {{ randomCatPictures.error.message }}
  </div>
  <div v-else>
    <div v-for="cat in randomCatPictures.data" :key="cat.id">
      <img :src="cat.url" alt="Cat" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useCatStore } from '@/stores/catStore';

const store = useCatStore();
const { fetchRandomCatPictures } = store;

fetchRandomCatPictures();

const { randomCatPictures } = storeToRefs(store);
</script>
