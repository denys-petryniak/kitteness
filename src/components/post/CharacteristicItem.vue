<template>
  <template v-if="isNumber(value)">
    <CharacteristicMeter :label="label" :value="value" />
  </template>
  <template v-else>
    <p class="flex">
      <span
        class="w-36 py-1 px-2 mr-3 break-all bg-indigo-50 text-indigo-900 rounded-md"
        >{{ label }}:</span
      >
      <span class="w-[calc(100%_-_9.75rem)] py-1 font-semibold">{{
        value
      }}</span>
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
