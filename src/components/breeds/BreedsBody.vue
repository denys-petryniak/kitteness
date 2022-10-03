<template>
  <div class="text-center">
    <p class="mb-4 font-bold text-lg italic">
      {{ temperament }}
    </p>
    <p class="mb-5">{{ description }}</p>
    <router-link
      :key="breedId"
      :to="{ name: 'breed', params: { id: breedId } }"
      class="font-semibold underline"
    >
      Read more
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BreedsBody',
};
</script>

<script setup>
defineProps({
  temperament: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  breedId: {
    type: String,
    default: '',
  },
});
</script>
