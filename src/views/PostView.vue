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
    <div class="border-l-4 border-indigo-500">
      <p class="p-2">
        Adaptability:
        <span class="font-semibold">{{ getPostBody.adaptability }}</span>
      </p>
      <p class="p-2">
        affection_level:
        <span class="font-semibold">{{ getPostBody.affection_level }}</span>
      </p>
      <p class="p-2">
        child_friendly:
        <span class="font-semibold">{{ getPostBody.child_friendly }}</span>
      </p>
      <p class="p-2">
        dog_friendly:
        <span class="font-semibold">{{ getPostBody.dog_friendly }}</span>
      </p>
      <p class="p-2">
        energy_level:
        <span class="font-semibold">{{ getPostBody.energy_level }}</span>
      </p>
      <p class="p-2">
        experimental:
        <span class="font-semibold">{{ getPostBody.experimental }}</span>
      </p>
      <p class="p-2">
        grooming:
        <span class="font-semibold">{{ getPostBody.grooming }}</span>
      </p>
      <p class="p-2">
        hairless:
        <span class="font-semibold">{{ getPostBody.hairless }}</span>
      </p>
      <p class="p-2">
        health_issues:
        <span class="font-semibold">{{ getPostBody.health_issues }}</span>
      </p>
      <p class="p-2">
        hypoallergenic:
        <span class="font-semibold">{{ getPostBody.hypoallergenic }}</span>
      </p>
      <p class="p-2">
        id:
        <span class="font-semibold">{{ getPostBody.id }}</span>
      </p>
      <p class="p-2">
        indoor:
        <span class="font-semibold">{{ getPostBody.indoor }}</span>
      </p>
      <p class="p-2">
        intelligence:
        <span class="font-semibold">{{ getPostBody.intelligence }}</span>
      </p>
      <p class="p-2">
        life_span:
        <span class="font-semibold">{{ getPostBody.life_span }}</span>
      </p>
      <p class="p-2">
        natural:
        <span class="font-semibold">{{ getPostBody.natural }}</span>
      </p>
      <p class="p-2">
        origin:
        <span class="font-semibold">{{ getPostBody.origin }}</span>
      </p>
      <p class="p-2">
        rare:
        <span class="font-semibold">{{ getPostBody.rare }}</span>
      </p>
      <p class="p-2">
        rex:
        <span class="font-semibold">{{ getPostBody.rex }}</span>
      </p>
      <p class="p-2">
        shedding_level:
        <span class="font-semibold">{{ getPostBody.shedding_level }}</span>
      </p>
      <p class="p-2">
        short_legs:
        <span class="font-semibold">{{ getPostBody.short_legs }}</span>
      </p>
      <p class="p-2">
        social_needs:
        <span class="font-semibold">{{ getPostBody.social_needs }}</span>
      </p>
      <p class="p-2">
        stranger_friendly:
        <span class="font-semibold">{{ getPostBody.stranger_friendly }}</span>
      </p>
      <p class="p-2">
        suppressed_tail:
        <span class="font-semibold">{{ getPostBody.suppressed_tail }}</span>
      </p>
      <p class="p-2">
        temperament:
        <span class="font-semibold">{{ getPostBody.temperament }}</span>
      </p>
      <p class="p-2">
        vocalisation:
        <span class="font-semibold">{{ getPostBody.vocalisation }}</span>
      </p>
      <p class="p-2">
        weight:
        <span class="font-semibold"
          >imperial: {{ getPostBody.weight.imperial }}</span
        >
        <span class="font-semibold"
          >metric: {{ getPostBody.weight.metric }}</span
        >
      </p>
    </div>
  </div>
  <div
    v-else-if="error"
    class="p-5 text-2xl font-bold text-center text-cyan-300"
  >
    Oops! Error encountered: {{ error.message }}
  </div>
  <div v-else class="p-5 text-2xl font-bold text-center text-cyan-300">
    Loading...
  </div>
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

const post = ref(null);
const error = ref(null);
// const characteristics = ref([{
//   name:
//   value:
// }]);

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
</script>
