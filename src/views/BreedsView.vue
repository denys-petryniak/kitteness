<template>
  <div class="max-w-4xl m-auto">
    <h1 class="mb-8 text-2xl md:text-3xl font-bold text-center">Breeds</h1>
    <template v-if="breeds.data && !breed.isFetching">
      <CustomSelect
        v-model="selectedBreed"
        searchable
        label="name"
        :options="breeds.data"
        @update:modelValue="onSelectedBreed"
      />
      <ImageCarousel :slides="breed.data" />
      <BreedsBody
        :temperament="getBreedBody.temperament"
        :description="getBreedBody.description"
        :breed-id="getBreedBody.id"
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

import useBreeds from '@/composables/breeds/useBreeds';
import useBreed from '@/composables/breeds/useBreed';

import CustomSelect from '@/components/ui/CustomSelect';
import ImageCarousel from '@/components/ui/ImageCarousel';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import BreedsBody from '@/components/breeds/BreedsBody';

const selectedBreed = ref('beng');

const { breeds, getBreeds } = useBreeds();
const { breed, getBreedBody, getBreedByIdHandler } = useBreed(selectedBreed);

getBreeds();
getBreedByIdHandler();

const onSelectedBreed = () => {
  getBreedByIdHandler();
};
</script>
