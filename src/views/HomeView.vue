<template>
  <HomeHeader @fetchBreedsImages="fetchBreedsImagesHandler" />
  <HomePhotoGallery v-if="images && !images.isFetching" :images="images.data" />
  <Preloader v-else-if="images.isFetching" />
  <ErrorMessage v-else-if="images.error" :message="images.error.message" />
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<script setup>
import { ref } from 'vue';

import HomeHeader from '@/components/home/HomeHeader';
import HomePhotoGallery from '@/components/home/HomePhotoGallery';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import useBreedsImages from '@/composables/breeds/useBreedsImages';

const imagesLimit = ref(11);

const { images, fetchBreedsImagesHandler } = useBreedsImages(imagesLimit);

fetchBreedsImagesHandler();
</script>
