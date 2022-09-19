<template>
  <div class="max-w-4xl m-auto">
    <h1 class="mb-8 text-2xl md:text-3xl font-bold text-center">Breeds</h1>
    <template v-if="state.breeds && state.breed">
      <vSelect
        v-model="state.selectedBreedId"
        :options="mappedBreeds"
        :reduce="(breed) => breed.id"
        label="name"
        :searchable="false"
        :clearable="false"
        @option:selected="onSelectedBreed"
        class="select"
      />
      <ImageCarousel :settings="carouselSettings" :slides="state.breed" />
      <BreedsBody
        :temperament="getBreedBody.temperament"
        :description="getBreedBody.description"
        :breedId="state.breed[0].id"
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

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import ImageCarousel from '@/components/ui/ImageCarousel';
import BreedsBody from '@/components/breeds/BreedsBody';
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

function onSelectedBreed() {
  store.getBreedById(state.value.selectedBreedId);
}
</script>

<style scoped>
.select {
  @apply max-w-4xl mx-auto mb-6 text-lg md:text-xl text-cyan-900 dark:text-slate-100;
}

.select ::v-deep .vs__search::placeholder,
.select ::v-deep .vs__dropdown-toggle,
.select ::v-deep .vs__dropdown-menu {
  @apply bg-cyan-100 dark:bg-cyan-800 border-2 border-gray-200;
}
.select ::v-deep .vs__open-indicator {
  @apply fill-gray-200;
}

.select ::v-deep .vs__selected {
  @apply text-inherit;
}

.select ::v-deep .vs__dropdown-option {
  @apply hover:bg-cyan-200 dark:hover:bg-cyan-900;
}

.select ::v-deep .vs__dropdown-option--highlight {
  @apply bg-cyan-200 dark:bg-cyan-900;
}
</style>
