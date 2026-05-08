<template>
  <button
    class="block rounded-full bg-rose-500 px-3 py-2 text-rose-50 hover:bg-rose-600 md:px-4 md:py-3"
    :class="{ 'ml-auto': right }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<script setup>
defineProps({
  right: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
