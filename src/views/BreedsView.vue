<template>
  <div class="max-w-4xl m-auto">
    <h1 class="mb-8 text-2xl md:text-3xl font-bold text-center">Breeds</h1>
    <template v-if="state.breeds && state.breed">
      <CustomSelect
        label="name"
        :options="mappedBreeds"
        v-model="state.selectedBreedId"
        @update:modelValue="onSelectedBreed"
      />
      <ImageCarousel :settings="carouselSettings" :slides="state.breed" />
      <BreedsBody
        :temperament="getBreedBody.temperament"
        :description="getBreedBody.description"
        :breedId="getBreedId"
      />
    </template>
    <ErrorMessage
      v-else-if="state.breedsError || state.breedError"
      :message="state[state.breedsError ? breedsError : breedError].message"
    />
    <Preloader v-else />
  </div>
</template>

<script>
export default {
  name: 'BreedsView',
};
</script>

<script setup>
import { ref, watchEffect, computed } from 'vue';
import { useBreedsStore } from '@/stores/Breeds';

import CustomSelect from '@/components/ui/CustomSelect';
import ImageCarousel from '@/components/ui/ImageCarousel';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import BreedsBody from '@/components/breeds/BreedsBody';

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

const getBreedId = computed(() => state.value.breed[0].id);

function onSelectedBreed() {
  store.getBreedById(state.value.selectedBreedId);
}
</script>
