<template>
  <div v-if="breed.data && !breed.isFetching">
    <BreedMain
      :imgUrl="breed.data[0].url"
      :imgWidth="breed.data[0].width"
      :imgHeight="breed.data[0].height"
      :title="getBreedBody.name"
      :description="getBreedBody.description"
      :wikipediaUrl="getBreedBody.wikipedia_url"
    />
    <Spacer class="h-10 md:h-11 lg:h-12" />
    <BreedOptionsSection
      v-if="getBreedOptions.length"
      :options="getBreedOptions"
    />
  </div>
  <Preloader v-else-if="breed.isFetching" />
  <ErrorMessage v-else-if="breed.error" :message="breed.error.message" />
</template>

<script>
export default {
  name: 'BreedView',
};
</script>

<script setup>
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useBreedStore } from '@/stores/Breed';

import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import Spacer from '@/components/layout/Spacer';
import BreedMain from '@/components/breed/BreedMain';
import BreedOptionsSection from '@/components/breed/BreedOptionsSection';

const route = useRoute();
const routeId = route.params.id;

const store = useBreedStore();
const { getBreedById } = store;
const { breed, getBreedBody, getBreedOptions } = storeToRefs(store);

getBreedById({ id: routeId, imagesLimit: 1 });
</script>
