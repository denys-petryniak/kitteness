<template>
  <div v-if="breedPost.data && !breedPost.isFetching">
    <BreedMain
      :imgUrl="breedPost.data[0].url"
      :imgWidth="breedPost.data[0].width"
      :imgHeight="breedPost.data[0].height"
      :title="getBreedPostBody.name"
      :description="getBreedPostBody.description"
      :wikipediaUrl="getBreedPostBody.wikipedia_url"
    />
    <Spacer class="h-10 md:h-11 lg:h-12" />
    <BreedOptionsSection
      v-if="getBreedPostOptions.length"
      :options="getBreedPostOptions"
    />
  </div>
  <Preloader v-else-if="breedPost.isFetching" />
  <ErrorMessage
    v-else-if="breedPost.error"
    :message="breedPost.error.message"
  />
</template>

<script>
export default {
  name: 'BreedView',
};
</script>

<script setup>
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useBreedPostStore } from '@/stores/BreedPost';

import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import Spacer from '@/components/layout/Spacer';
import BreedMain from '@/components/breed/BreedMain';
import BreedOptionsSection from '@/components/breed/BreedOptionsSection';

const route = useRoute();
const routeId = route.params.id;

const store = useBreedPostStore();
const { getBreedPostById } = store;
const { breedPost, getBreedPostBody, getBreedPostOptions } = storeToRefs(store);

getBreedPostById({ id: routeId });
</script>
