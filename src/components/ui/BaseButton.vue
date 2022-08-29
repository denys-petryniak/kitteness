<template>
  <button
    class="block py-2 px-3 md:py-3 md:px-4 text-cyan-50 bg-cyan-400 hover:bg-cyan-500 shadow-lg shadow-cyan-400/50 rounded-full"
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
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
