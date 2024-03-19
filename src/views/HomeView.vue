<template>
  <HomeHeader @reload-random-cat-pictures="randomCatPictures.retry" />
  <ErrorMessage
    v-if="randomCatPictures.error"
    :message="randomCatPictures.error.message"
  />
  <HomePhotoGallery
    v-else-if="randomCatPictures.data?.length"
    :images="randomCatPictures.data"
  />
  <Preloader v-else-if="randomCatPictures.isFetching" />
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import HomeHeader from '@/components/home/HomeHeader';
import HomePhotoGallery from '@/components/home/HomePhotoGallery';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import { useCatStore } from '@/stores/catStore';

const store = useCatStore();
const { fetchRandomCatPictures } = store;

const catPicturesLimit = ref(11);
fetchRandomCatPictures(catPicturesLimit.value);

const { randomCatPictures } = storeToRefs(store);
</script>
