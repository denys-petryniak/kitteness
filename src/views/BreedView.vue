<template>
  <template v-if="breedPost.error">
    <ErrorMessage
      :message="breedPost.error?.message || 'Error retrieving data'"
    />
  </template>
  <template v-else-if="breedPost.data && breedPost.data.length === 0">
    <NotFound />
  </template>
  <template v-else-if="breedPost.data && breedPost.data.length > 0">
    <BreedMain
      :img-url="breedPost.data[0].url"
      :img-width="breedPost.data[0].width"
      :img-height="breedPost.data[0].height"
      :title="getBreedPostBody.name"
      :description="getBreedPostBody.description"
      :wikipedia-url="getBreedPostBody.wikipedia_url"
    />
    <SpacerBlock class="h-10 md:h-11 lg:h-12" />
    <BreedOptionsSection
      v-if="getBreedPostOptions.length"
      :options="getBreedPostOptions"
    />
  </template>
  <template v-else>
    <Preloader />
  </template>
</template>

<script>
export default {
  name: 'BreedView',
};
</script>

<script setup>
import { useRoute } from 'vue-router';

import BreedMain from '@/components/breed/BreedMain';
import BreedOptionsSection from '@/components/breed/BreedOptionsSection';
import SpacerBlock from '@/components/layout/SpacerBlock';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import useBreedPost from '@/composables/breeds/useBreedPost';
import NotFound from '@/views/NotFound';

const route = useRoute();
const routeId = route.params.id;

const { breedPost, getBreedPostBody, getBreedPostOptions } =
  useBreedPost(routeId);
</script>
