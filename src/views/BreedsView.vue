<template>
  <div class="m-auto max-w-4xl">
    <h1 class="mb-8 text-center text-2xl font-bold md:text-3xl">Breeds</h1>
    <ErrorMessage
      v-if="catBreeds.error || carouselCatPictures.error"
      :message="
        catBreeds.error
          ? catBreeds.error.message
          : carouselCatPictures.error.message
      "
    />
    <template
      v-else-if="catBreeds.data?.length && carouselCatPictures.data?.length"
    >
      <CustomSelect
        v-model="selectedBreedId"
        searchable
        label="name"
        :options="catBreeds.data"
      />
      <ImageCarousel :slides="carouselCatPictures.data" />
      <BreedsBody
        :temperament="getBreedById(selectedBreedId).temperament"
        :description="getBreedById(selectedBreedId).description"
        :wikipedia-url="getBreedById(selectedBreedId).wikipedia_url"
      />
    </template>
    <Preloader
      v-else-if="carouselCatPictures.isFetching || catBreeds.isFetching"
    />
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
const { fetchCatBreeds, fetchCarouselCatPictures } = store;

fetchCatBreeds();

const selectedBreedId = ref('beng');

watchEffect(async () => {
  await fetchCarouselCatPictures({ breedIds: selectedBreedId.value, limit: 8 });
});

const { catBreeds, getBreedById, carouselCatPictures } = storeToRefs(store);
</script>
