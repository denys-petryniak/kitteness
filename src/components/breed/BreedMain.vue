<template>
  <div class="md:grid md:grid-cols-2 md:gap-5">
    <div class="mb-5 md:mb-0 overflow-hidden">
      <img
        :src="imgUrl"
        alt="Cat"
        :width="imgWidth"
        :height="imgHeight"
        class="border-2 border-gray-200 rounded-xl"
      />
    </div>
    <div class="">
      <h1 class="mb-4 text-3xl font-bold">
        {{ title }}
      </h1>
      <p class="mb-5">{{ description }}</p>
      <a
        :href="wikipediaUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="font-semibold underline"
        >Wiki</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreedMain',
};
</script>

<script setup>
defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  imgWidth: {
    type: Number,
    required: true,
  },
  imgHeight: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  wikipediaUrl: {
    type: String,
    required: true,
  },
});
</script>
