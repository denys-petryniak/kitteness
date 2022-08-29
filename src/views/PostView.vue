<template>
  <div v-if="state.body">
    <PostMain
      :imgUrl="state.body.url"
      :imgWidth="state.body.width"
      :imgHeight="state.body.height"
      :postTitle="getPostBody.name"
      :postDescription="getPostBody.description"
      :postWikipediaUrl="getPostBody.wikipedia_url"
    />
    <Spacer class="h-10 md:h-11 lg:h-12" />
    <CharacteristicsSection
      v-if="getCharacteristics.length"
      :characteristics="getCharacteristics"
    />
  </div>
  <ErrorMessage v-else-if="state.error" :message="state.error.message" />
  <Preloader v-else />
</template>

<script>
export default {
  name: 'PostView',
};
</script>

<script setup>
import { ref, watchEffect, computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/Post';
import ErrorMessage from '@/components/ui/ErrorMessage';
import Preloader from '@/components/ui/Preloader';
import Spacer from '@/components/layout/Spacer';
import PostMain from '@/components/post/PostMain';
import CharacteristicsSection from '@/components/post/CharacteristicsSection';

const state = ref({ body: null, error: null });

const route = useRoute();
const routeId = route.params.id;

const store = usePostStore();
const storePostId = store.post.body.id;
if (storePostId !== routeId) store.getPostById(routeId);

watchEffect(() => {
  state.value = { body: store.post.body, error: store.post.error };
});

const getPostBody = computed(() => {
  const [body] =
    state.value.body.breeds.length > 0 ? state.value.body.breeds : [];
  return body;
});

const getCharacteristics = computed(() => {
  return [
    {
      label: 'Origin',
      value: getPostBody.value.origin,
    },
    {
      label: 'Temperament',
      value: getPostBody.value.temperament,
    },
    {
      label: 'Weight',
      value: `imperial: ${getPostBody.value.weight.imperial} | metric: ${getPostBody.value.weight.metric}`,
    },
    {
      label: 'Life span',
      value: getPostBody.value.life_span,
    },
    {
      label: 'Adaptability',
      value: getPostBody.value.adaptability,
    },
    {
      label: 'Affection level',
      value: getPostBody.value.affection_level,
    },
    {
      label: 'Child friendly',
      value: getPostBody.value.child_friendly,
    },
    {
      label: 'Dog friendly',
      value: getPostBody.value.dog_friendly,
    },
    {
      label: 'Stranger friendly',
      value: getPostBody.value.stranger_friendly,
    },
    {
      label: 'Energy level',
      value: getPostBody.value.energy_level,
    },
    {
      label: 'Experimental',
      value: getPostBody.value.experimental,
    },
    {
      label: 'Grooming',
      value: getPostBody.value.grooming,
    },
    {
      label: 'Hairless',
      value: getPostBody.value.hairless,
    },
    {
      label: 'Health issues',
      value: getPostBody.value.health_issues,
    },
    {
      label: 'Hypoallergenic',
      value: getPostBody.value.hypoallergenic,
    },

    {
      label: 'Indoor',
      value: getPostBody.value.indoor,
    },
    {
      label: 'Intelligence',
      value: getPostBody.value.intelligence,
    },

    {
      label: 'Natural',
      value: getPostBody.value.natural,
    },

    {
      label: 'Rare',
      value: getPostBody.value.rare,
    },
    {
      label: 'Rex',
      value: getPostBody.value.rex,
    },
    {
      label: 'Shedding level',
      value: getPostBody.value.shedding_level,
    },
    {
      label: 'Short legs',
      value: getPostBody.value.short_legs,
    },
    {
      label: 'Social needs',
      value: getPostBody.value.social_needs,
    },
    {
      label: 'Suppressed tail',
      value: getPostBody.value.suppressed_tail,
    },

    {
      label: 'Vocalisation',
      value: getPostBody.value.vocalisation,
    },
  ];
});
</script>
