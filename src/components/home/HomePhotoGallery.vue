<template>
  <div class="gallery md:grid md:auto-rows-auto md:grid-cols-4 md:gap-2">
    <router-link
      v-for="(image, index) in images"
      :key="image.id"
      :to="{ name: 'breed', params: { id: image.breeds[0].id } }"
      :class="
        isEveryThirdElement(index)
          ? ['col-span-2 row-span-2 w-full']
          : ['w-full']
      "
    >
      <img
        :src="image.url"
        :width="image.width"
        :height="image.height"
        alt="Cat"
        class="mb-2 h-full w-full rounded-xl border-2 border-gray-200 object-cover md:mb-0"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePhotoGallery',
};
</script>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
});

function isEveryThirdElement(index) {
  return index % 3 === 2;
}
</script>

<style scoped>
.gallery > * {
  @apply lg:filter lg:transition lg:duration-150 lg:ease-in;
}
.gallery:hover > :not(:hover) {
  @apply lg:brightness-75;
}
</style>
