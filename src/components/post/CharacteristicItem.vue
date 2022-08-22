<template>
  <template v-if="isNumber(value)">
    <CharacteristicMeter :label="label" :value="value" />
  </template>
  <template v-else>
    <p>
      <span
        class="inline-block w-1/3 py-1 px-2 mr-3 break-all bg-indigo-50 text-indigo-900 rounded-md"
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

function isNumber(value) {
  return typeof value == 'number';
}
</script>
