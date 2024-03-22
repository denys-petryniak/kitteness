<template>
  <ErrorMessage v-if="catPost.error" :message="catPost.error.message" />
  <template v-else-if="catPost.data?.length">
    <BreedMain
      :img-url="catPost.data[0].url"
      :img-width="catPost.data[0].width"
      :img-height="catPost.data[0].height"
      :title="getCatPostBreed.name"
      :description="getCatPostBreed.description"
      :wikipedia-url="getCatPostBreed.wikipedia_url"
    />
    <SpacerBlock class="h-10 md:h-11 lg:h-12" />
    <BreedOptionsSection
      v-if="getCatPostBreedOptions.length"
      :options="getCatPostBreedOptions"
    />
  </template>
  <Preloader v-else-if="catPost.isFetching" />
  <NotFound v-else />
</template>

<script>
export default {
  name: 'BreedView',
};
</script>

<script setup>
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import BreedMain from '@/components/breed/BreedMain';
import BreedOptionsSection from '@/components/breed/BreedOptionsSection';
import SpacerBlock from '@/components/layout/SpacerBlock';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import { useCatStore } from '@/stores/catStore';
import NotFound from '@/views/NotFound';

const route = useRoute();
const routeId = route.params.id;

const store = useCatStore();
const { fetchCatPostById } = store;

watchEffect(async () => {
  await fetchCatPostById(routeId);
});

const { catPost, getCatPostBreed, getCatPostBreedOptions } = storeToRefs(store);
</script>
