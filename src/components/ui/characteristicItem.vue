<template>
  <p class="p-2 border-l-4 border-indigo-500">
    {{ label }}:
    <span class="font-semibold">{{ value }}</span>
  </p>
</template>

<script>
export default {
  name: 'CharacteristicItem',
};
</script>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>
