<template>
  <template v-if="Number(value)">
    <CharacteristicMeter :label="label" :value="value" />
  </template>
  <template v-else>
    <p class="p-2">
      <span
        class="inline-block w-36 py-1 px-2 mr-2 bg-indigo-50 text-indigo-900 rounded-md"
        >{{ label }}:</span
      >
      <span class="font-semibold">{{ value }}</span>
    </p>
  </template>
</template>

<script>
export default {
  name: 'CharacteristicItem',
};
</script>

<script setup>
import CharacteristicMeter from '@/components/post/CharacteristicMeter';

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
