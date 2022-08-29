<template>
  <div class="mb-6">
    <h1 class="mb-8 text-2xl md:text-3xl font-bold text-center">
      Welcome to the world of
      <span
        class="mr-3 underline decoration-pink-500 decoration-wavy decoration-2"
        >CATS</span
      ><img
        src="@/assets/images/icons/cat.png"
        alt="Cat"
        class="inline-block w-14 mt-[-12px]"
      />
    </h1>
    <BaseButton right text="Update Photos" @click="updateImages" />
  </div>
  <PhotoGallery v-if="state.images" :images="state.images" />
  <ErrorMessage v-else-if="state.error" :message="state.error.message" />
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

const state = ref({ images: null, error: null });

const store = useSearchImagesStore();
if (!store.images.items.length) store.fetchImages();

watchEffect(() => {
  state.value = {
    images: store.images.items,
    error: store.images.error,
  };
});

function updateImages() {
  store.fetchImages();
}
</script>
