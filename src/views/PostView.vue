<template>
  <div v-if="post">
    <div class="flex justify-between">
      <div class="w-1/2 p-3 overflow-hidden">
        <img
          :src="post.url"
          alt="Cat"
          :width="post.width"
          :height="post.height"
          class="rounded"
        />
      </div>
      <div class="w-1/2 p-3">
        <h1 class="mb-4 text-3xl font-bold text-cyan-400">
          {{ getPostBody.name }}
        </h1>
        <p class="mb-4">{{ getPostBody.description }}</p>
        <a
          :href="getPostBody.wikipedia_url"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 bg-cyan-300 hover:bg-cyan-400 text-cyan-50 rounded"
          >Learn more</a
        >
      </div>
    </div>
    <template v-for="item in getCharacteristics" :key="item.label">
      <CharacteristicItem
        v-if="item.value"
        :label="item.label"
        :value="item.value"
      />
    </template>
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
import CharacteristicItem from '@/components/ui/CharacteristicItem';

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
      label: 'Cat friendly',
      value: getPostBody.value.cat_friendly,
    },
    {
      label: 'Dog friendly',
      value: getPostBody.value.dog_friendly,
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
      label: 'ID',
      value: getPostBody.value.id,
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
      label: 'Life span',
      value: getPostBody.value.life_span,
    },
    {
      label: 'Natural',
      value: getPostBody.value.natural,
    },
    {
      label: 'Origin',
      value: getPostBody.value.origin,
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
      label: 'Short_legs',
      value: getPostBody.value.short_legs,
    },
    {
      label: 'Social needs',
      value: getPostBody.value.social_needs,
    },
    {
      label: 'Stranger friendly',
      value: getPostBody.value.stranger_friendly,
    },
    {
      label: 'Suppressed tail',
      value: getPostBody.value.suppressed_tail,
    },
    {
      label: 'Temperament',
      value: getPostBody.value.temperament,
    },
    {
      label: 'Vocalisation',
      value: getPostBody.value.vocalisation,
    },
    {
      label: 'Weight',
      value: `imperial: ${getPostBody.value.weight.imperial} | metric: ${getPostBody.value.weight.metric}`,
    },
  ];
});
</script>
