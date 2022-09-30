<template>
  <div class="max-w-4xl m-auto">
    <h1 class="mb-8 text-2xl md:text-3xl font-bold text-center">Breeds</h1>
    <template v-if="breeds.items && !breed.isFetching">
      <CustomSelect
        label="name"
        :options="breeds.items"
        v-model="selectedBreedId"
        @update:modelValue="onSelectedBreed"
      />
      <ImageCarousel :slides="breed.items" />
      <BreedsBody
        :temperament="breed.items[0].breeds[0].temperament"
        :description="breed.items[0].breeds[0].description"
        :breedId="breed.items[0].id"
      />
    </template>
    <Preloader v-else-if="breed.isFetching" />
    <ErrorMessage v-else-if="breed.error" :message="breed.error.message" />
  </div>
</template>

<script>
export default {
  name: 'BreedsView',
};
</script>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useBreedsStore } from '@/stores/Breeds';

import CustomSelect from '@/components/ui/CustomSelect';
import ImageCarousel from '@/components/ui/ImageCarousel';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import BreedsBody from '@/components/breeds/BreedsBody';

const selectedBreedId = ref('beng');

const store = useBreedsStore();
const { getBreeds, getBreedById } = store;
const { breeds, breed } = storeToRefs(store);

getBreeds();
getBreedById(selectedBreedId.value);

const onSelectedBreed = () => {
  getBreedById(selectedBreedId.value);
};
</script>
