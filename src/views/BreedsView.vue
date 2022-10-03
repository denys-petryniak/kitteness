<template>
  <div class="max-w-4xl m-auto">
    <h1 class="mb-8 text-2xl md:text-3xl font-bold text-center">Breeds</h1>
    <template v-if="breeds.data && !breed.isFetching">
      <CustomSelect
        label="name"
        :options="breeds.data"
        v-model="selectedBreed"
        @update:modelValue="onSelectedBreed"
      />
      <ImageCarousel :slides="breed.data" />
      <BreedsBody
        :temperament="getBreedBody.temperament"
        :description="getBreedBody.description"
        :breedId="getBreedBody.id"
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
import { useBreedStore } from '@/stores/Breed';

import CustomSelect from '@/components/ui/CustomSelect';
import ImageCarousel from '@/components/ui/ImageCarousel';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import BreedsBody from '@/components/breeds/BreedsBody';

const selectedBreed = ref('beng');

const breedsStore = useBreedsStore();
const { getBreeds } = breedsStore;
const { breeds } = storeToRefs(breedsStore);

getBreeds();

const breedStore = useBreedStore();
const { getBreedById } = breedStore;
const { breed, getBreedBody } = storeToRefs(breedStore);

function getBreedByIdHandler() {
  return getBreedById({ id: selectedBreed.value });
}

getBreedByIdHandler();

const onSelectedBreed = () => {
  getBreedByIdHandler();
};
</script>
