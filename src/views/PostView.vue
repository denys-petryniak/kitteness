<template>
  <div v-if="post">
    <PostMain
      :imgUrl="post.url"
      :imgWidth="post.width"
      :imgHeight="post.height"
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
  <ErrorMessage v-else-if="error" :message="error.message" />
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

const post = ref(null);
const error = ref(null);

const route = useRoute();
const id = route.params.id;

const postStore = usePostStore();
postStore.getPostById(id);

watchEffect(() => {
  post.value = postStore.post;
  error.value = postStore.error;
});

const getPostBody = computed(() => {
  const [body] = post.value.breeds.length > 0 ? post.value.breeds : [];
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
