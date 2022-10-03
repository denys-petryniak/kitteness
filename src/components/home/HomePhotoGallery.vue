<template>
  <div class="gallery md:grid md:grid-cols-4 md:auto-rows-auto md:gap-2">
    <router-link
      v-for="(image, index) in images"
      :key="image.id"
      :to="{ name: 'breed', params: { id: image.breeds[0].id } }"
      :class="
        isEveryThirdElement(index)
          ? ['w-full col-span-2 row-span-2']
          : ['w-full']
      "
    >
      <img
        :src="image.url"
        :width="image.width"
        :height="image.height"
        alt="Cat"
        class="mb-2 md:mb-0 w-full h-full object-cover border-2 border-gray-200 rounded-xl"
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
  @apply lg:transition lg:filter lg:ease-in lg:duration-150;
}
.gallery:hover > :not(:hover) {
  @apply lg:brightness-75;
}
</style>
