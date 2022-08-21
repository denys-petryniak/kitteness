<template>
  <button
    class="block p-3 text-cyan-50 bg-cyan-400 hover:bg-cyan-500 rounded-full"
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
