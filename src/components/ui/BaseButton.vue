<template>
  <button
    class="block rounded-full bg-cyan-400 px-3 py-2 text-cyan-50 hover:bg-cyan-500 md:px-4 md:py-3"
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
