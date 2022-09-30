<template>
  <HomeHeader @fetchImages="fetchImages" />
  <PhotoGallery v-if="images && !images.isFetching" :images="images.data" />
  <Preloader v-else-if="images.isFetching" />
  <ErrorMessage v-else-if="images.error" :message="images.error.message" />
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<script setup>
import { storeToRefs } from 'pinia';
import { useSearchImagesStore } from '@/stores/SearchImages';

import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import HomeHeader from '@/components/home/HomeHeader';
import PhotoGallery from '@/components/home/PhotoGallery';

const store = useSearchImagesStore();
const { fetchImages } = store;
const { images } = storeToRefs(store);

fetchImages();
</script>
