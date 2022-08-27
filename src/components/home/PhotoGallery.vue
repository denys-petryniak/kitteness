<template>
  <div class="md:grid md:grid-cols-4 md:auto-rows-auto md:gap-2">
    <router-link
      v-for="(image, index) in images"
      :key="image.id"
      :to="{ name: 'post', params: { id: image.id } }"
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

function isEveryThirdElement(index) {
  return index % 3 === 2;
}
</script>
