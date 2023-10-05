<template>
  <Carousel ref="carousel" wrapAround class="carousel">
    <Slide v-for="slide in slides" :key="slide.id">
      <img
        :src="slide.url"
        :width="slide.width"
        :height="slide.height"
        alt="Cat"
        class="h-full w-full rounded-xl border-2 border-gray-200 bg-cyan-100 object-contain dark:bg-cyan-800"
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

<style>
.carousel {
  @apply mx-auto mb-8 max-h-[500px];
}

.carousel .carousel__viewport,
.carousel .carousel__track,
.carousel .carousel__slide {
  @apply h-[300px] md:h-[500px];
}

.carousel .carousel__slide {
  @apply px-2;
}

.carousel .carousel__slide--visible {
  transform: rotateY(0);
}

.carousel .carousel__prev,
.carousel .carousel__next {
  @apply box-content rounded-full border-2 border-solid border-gray-200 bg-cyan-300 dark:bg-cyan-600;
}

.carousel .carousel__prev {
  @apply left-2;
}

.carousel .carousel__next {
  @apply right-2;
}
</style>
