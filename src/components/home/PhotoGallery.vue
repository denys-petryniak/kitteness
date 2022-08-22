<template>
  <div class="md:grid md:grid-cols-4 md:auto-rows-auto md:gap-2">
    <router-link
      v-for="(image, index) in images"
      :key="image.id"
      :to="{ name: 'post', params: { id: image.id } }"
      :class="
        index % 3 === 2
          ? ['w-full col-span-2 row-span-2 rounded overflow-hidden']
          : ['w-full rounded overflow-hidden']
      "
    >
      <img
        :src="image.url"
        alt="Cat"
        :width="image.width"
        :height="image.height"
        class="mb-2 md:mb-0 w-full h-full object-cover border-2 border-indigo-200"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
};
</script>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>
