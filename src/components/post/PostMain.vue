<template>
  <div class="flex justify-between">
    <div class="w-1/2 p-3 overflow-hidden">
      <img
        :src="imgUrl"
        alt="Cat"
        :width="imgWidth"
        :height="imgHeight"
        class="rounded"
      />
    </div>
    <div class="w-1/2 p-3">
      <h1 class="mb-4 text-3xl font-bold">
        {{ postTitle }}
      </h1>
      <p class="mb-4">{{ postDescription }}</p>
      <a
        :href="postWikipediaUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-800 hover:text-cyan-900 visited:text-indigo-900 font-semibold underline"
        >Read more</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostMain',
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
  postTitle: {
    type: String,
    required: true,
  },
  postDescription: {
    type: String,
    required: true,
  },
  postWikipediaUrl: {
    type: String,
    required: true,
  },
});
</script>
