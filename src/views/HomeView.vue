<template>
  <HomeHeader @reload-cat-pictures="catPictures.retry" />
  <ErrorMessage v-if="catPictures.error" :message="catPictures.error.message" />
  <HomePhotoGallery
    v-else-if="catPictures.data?.length"
    :images="catPictures.data"
  />
  <Preloader v-else-if="catPictures.isFetching" />
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<script setup>
import { storeToRefs } from 'pinia';

import HomeHeader from '@/components/home/HomeHeader';
import HomePhotoGallery from '@/components/home/HomePhotoGallery';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import { useCatStore } from '@/stores/catStore';

const store = useCatStore();
const { fetchCatPictures } = store;

fetchCatPictures({ limit: 11 });

const { catPictures } = storeToRefs(store);
</script>
