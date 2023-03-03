<template>
  <div class="m-auto max-w-4xl">
    <h1 class="mb-8 text-center text-2xl font-bold md:text-3xl">Breeds</h1>
    <template v-if="breeds.data && !breed.isFetching">
      <CustomSelect
        v-model="selectedBreed"
        searchable
        label="name"
        :options="breeds.data"
        @update:model-value="onSelectedBreed"
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

import BreedsBody from '@/components/breeds/BreedsBody';
import CustomSelect from '@/components/ui/CustomSelect';
import ErrorMessage from '@/components/ui/ErrorMessage';
import ImageCarousel from '@/components/ui/ImageCarousel';
import Preloader from '@/components/ui/Preloader';
import useBreed from '@/composables/breeds/useBreed';
import useBreeds from '@/composables/breeds/useBreeds';

const selectedBreed = ref('beng');

const { breeds, getBreeds } = useBreeds();
const { breed, getBreedBody, getBreedByIdHandler } = useBreed(selectedBreed);

getBreeds();
getBreedByIdHandler();

const onSelectedBreed = () => {
  getBreedByIdHandler();
};
</script>
