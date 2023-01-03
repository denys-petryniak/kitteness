<template>
  <button
    class="block rounded-full bg-cyan-400 py-2 px-3 text-cyan-50 hover:bg-cyan-500 md:py-3 md:px-4"
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
