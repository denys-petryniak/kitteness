<template>
  <div class="mb-6">
    <h1 class="mb-5 text-2xl md:text-3xl font-bold text-center">
      Funny Cats Gallery
    </h1>
    <BaseButton right text="Update Photos" @click="updateImages" />
  </div>
  <PhotoGallery v-if="images" :images="images" />
  <ErrorMessage v-else-if="error" :message="error.message" />
  <Preloader v-else />
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<script setup>
import { ref, watchEffect } from 'vue';
import { useSearchImagesStore } from '@/stores/SearchImages';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import BaseButton from '@/components/ui/BaseButton';
import PhotoGallery from '@/components/home/PhotoGallery';

const images = ref(null);
const error = ref(null);

const searchImagesStore = useSearchImagesStore();
if (!searchImagesStore.images.length) searchImagesStore.fetchImages();

function updateImages() {
  searchImagesStore.fetchImages();

  // TODO: needs improvement here
  watchEffect(() => {
    images.value = searchImagesStore.images;
    error.value = searchImagesStore.error;
  });
}

watchEffect(() => {
  images.value = searchImagesStore.images;
  error.value = searchImagesStore.error;
});
</script>
