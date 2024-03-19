<template>
  <div class="m-auto max-w-4xl">
    <h1 class="mb-8 text-center text-2xl font-bold md:text-3xl">Breeds</h1>
    <ErrorMessage v-if="catPost.error" :message="catPost.error.message" />
    <template v-else-if="catBreeds.data?.length && catPost.data?.length">
      <CustomSelect
        v-model="selectedBreed"
        searchable
        label="name"
        :options="catBreeds.data"
      />
      <ImageCarousel :slides="catPost.data" />
      <BreedsBody
        :temperament="getCatPostBreed.temperament"
        :description="getCatPostBreed.description"
        :breed-id="getCatPostBreed.id"
      />
    </template>
    <Preloader v-else-if="catPost.isFetching" />
  </div>
</template>

<script>
export default {
  name: 'BreedsView',
};
</script>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from 'vue';

import BreedsBody from '@/components/breeds/BreedsBody';
import CustomSelect from '@/components/ui/CustomSelect';
import ErrorMessage from '@/components/ui/ErrorMessage';
import ImageCarousel from '@/components/ui/ImageCarousel';
import Preloader from '@/components/ui/Preloader';
import { useCatStore } from '@/stores/catStore';

const store = useCatStore();
const { fetchCatBreeds, fetchCatPostById } = store;

fetchCatBreeds();

const selectedBreed = ref('beng');
const catPicturesLimit = ref(8);

watchEffect(async () => {
  await fetchCatPostById(selectedBreed.value, catPicturesLimit.value);
});

const { catPost, getCatPostBreed, catBreeds } = storeToRefs(store);
</script>
