<template>
  <div class="flex items-center">
    <label
      :for="label"
      class="w-1/3 mr-3 py-1 px-2 break-all bg-indigo-50 text-indigo-900 rounded-md"
      >{{ label }}:</label
    >
    <meter
      :id="label"
      :min="meterOptions.min"
      :max="meterOptions.max"
      :low="meterOptions.low"
      :high="meterOptions.high"
      :optimum="meterOptions.optimum"
      :value="value"
      class="w-2/3 h-5"
    ></meter>
  </div>
</template>

<script>
export default {
  name: 'CharacteristicMeter',
};
</script>

<script setup>
import { ref } from 'vue';

const meterOptions = ref({
  min: 0,
  max: 5,
  low: 2,
  high: 4,
  optimum: 5,
});

defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});
</script>
