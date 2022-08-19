<template>
  <p class="p-2">
    {{ label }}:
    <span class="font-semibold">{{ value }}</span>
  </p>
</template>

<script>
export default {
  name: 'characteristicItem',
};
</script>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
</script>
