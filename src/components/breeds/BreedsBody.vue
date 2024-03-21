<template>
  <div class="text-center">
    <p class="mb-4 text-lg font-bold italic">
      {{ temperament }}
    </p>
    <p class="mb-5">{{ description }}</p>
    <a
      :href="wikipediaUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold underline"
      >Wiki</a
    >
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
  wikipediaUrl: {
    type: String,
    default: '',
  },
});
</script>
