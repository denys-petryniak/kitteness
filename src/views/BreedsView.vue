<template>
  <div class="max-w-2xl m-auto">
    <h1 class="mb-8 text-2xl md:text-3xl font-bold text-center">Breeds</h1>
  </div>
  <template v-if="state.breeds && state.breed">
    <select
      v-model="state.selectedBreedId"
      @change="onChangeBreed"
      class="block w-full max-w-xl mx-auto mb-6 pb-2 bg-transparent border-b-2 border-cyan-500"
    >
      <option
        v-for="option in mappedBreeds"
        :key="option.id"
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
    <carousel
      :settings="carouselSettings"
      class="max-w-4xl max-h-[500px] mx-auto mb-8"
    >
      <slide v-for="slide in state.breed" :key="slide.id">
        <img
          :src="slide.url"
          :width="slide.width"
          :height="slide.height"
          alt="Cat"
          class="w-full h-full object-contain bg-cyan-100 border-2 border-gray-200 rounded-xl"
        />
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div class="max-w-4xl mx-auto text-center">
      <p class="mb-5 font-bold italic">
        {{ getBreedBody.temperament }}
      </p>
      <p class="mb-5">{{ getBreedBody.description }}</p>
      <router-link
        :key="state.breed[0].id"
        :to="{ name: 'post', params: { id: state.breed[0].id } }"
      >
        Read more
      </router-link>
    </div>
  </template>
  <ErrorMessage
    v-else-if="state.breedsError || state.breedError"
    :message="state[state.breedsError ? breedsError : breedError].message"
  />
  <Preloader v-else />
</template>

<script>
export default {
  name: 'BreedsView',
};
</script>

<script setup>
import { ref, watchEffect, computed } from 'vue';
import { useBreedsStore } from '@/stores/Breeds';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';

const state = ref({
  breeds: null,
  breedsError: null,
  breed: null,
  breedError: null,
  selectedBreedId: 'beng',
});

const carouselSettings = ref({
  wrapAround: true,
  'items-to-show': 2,
});

const store = useBreedsStore();

if (!store.breeds.items.length) store.getBreeds();
if (state.value.selectedBreedId)
  store.getBreedById(state.value.selectedBreedId);

watchEffect(() => {
  state.value = {
    breeds: store.breeds.items,
    breedsError: store.breeds.error,
    breed: store.breed.body,
    breedError: store.breed.error,
    selectedBreedId: state.value.selectedBreedId,
  };
});

const mappedBreeds = computed(() =>
  state.value.breeds?.map(({ id, name }) => ({ id, name }))
);

const getBreedBody = computed(() => {
  const [body] =
    state.value.breed[0].breeds.length > 0 ? state.value.breed[0].breeds : [];
  return body;
});

function onChangeBreed() {
  store.getBreedById(state.value.selectedBreedId);
}
</script>

<style scoped>
.carousel__viewport,
.carousel__track,
.carousel__slide {
  height: 500px !important;
}

::v-deep .carousel__prev,
::v-deep .carousel__next {
  @apply bg-cyan-500;
}
</style>
