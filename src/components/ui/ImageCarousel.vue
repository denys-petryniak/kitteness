<template>
  <Carousel ref="carousel" :settings="settings" class="carousel">
    <Slide v-for="slide in slides" :key="slide.id">
      <img
        :src="slide.url"
        :width="slide.width"
        :height="slide.height"
        alt="Cat"
        class="w-full h-full object-contain bg-cyan-100 dark:bg-cyan-800 border-2 border-gray-200 rounded-xl"
      />
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
export default {
  name: 'ImageCarousel',
};
</script>

<script setup>
import 'vue3-carousel/dist/carousel.css';

import { onMounted, ref } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

defineProps({
  settings: {
    type: Object,
    default: () => ({
      wrapAround: true,
      'items-to-show': 2,
    }),
  },
  slides: {
    type: Array,
    default: () => [],
  },
});

const carousel = ref(null);

onMounted(() => {
  setTimeout(() => {
    carousel.value.updateSlideWidth();
  }, 500);
});
</script>

<style scoped>
.carousel {
  @apply max-h-[500px] mx-auto mb-8;
}

.carousel :deep(.carousel__viewport),
.carousel :deep(.carousel__track),
.carousel :deep(.carousel__slide) {
  @apply h-[300px] md:h-[500px];
}

.carousel :deep(.carousel__slide) {
  @apply px-2;
}

.carousel :deep(.carousel__slide--visible) {
  transform: rotateY(0);
}

.carousel :deep(.carousel__prev),
.carousel :deep(.carousel__next) {
  @apply box-content bg-cyan-300 dark:bg-cyan-900 border-2 border-solid border-gray-200;
}

.carousel :deep(.carousel__prev) {
  @apply left-2;
}
.carousel :deep(.carousel__next) {
  @apply right-2;
}
</style>
