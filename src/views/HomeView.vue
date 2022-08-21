<template>
  <div>
    <h1 class="mb-6 text-3xl font-bold text-center text-cyan-400">
      Funny Cats Gallery
    </h1>
    <button
      @click="updateImages"
      class="block mb-4 p-2 ml-auto text-cyan-100 bg-cyan-400 hover:bg-cyan-300 rounded"
    >
      Update Photos
    </button>
  </div>

  <div v-if="images" class="grid grid-cols-4 auto-rows-auto gap-2">
    <router-link
      v-for="(image, index) in images"
      :key="image.id"
      :to="{ name: 'post', params: { id: image.id } }"
      :class="
        index % 3 === 2
          ? ['w-full col-span-2 row-span-2 rounded overflow-hidden']
          : ['w-full rounded overflow-hidden']
      "
    >
      <img
        :src="image.url"
        alt="Cat"
        :width="image.width"
        :height="image.height"
        class="w-full h-full object-cover"
      />
    </router-link>
  </div>
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
