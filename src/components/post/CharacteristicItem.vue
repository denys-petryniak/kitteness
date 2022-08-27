<template>
  <div class="flex" :class="{ 'items-center': isNumber(value) }">
    <div
      class="w-40 mr-3 py-1 px-2 break-all bg-indigo-50 dark:bg-indigo-300 border-2 border-indigo-100 dark:border-indigo-400 text-indigo-900 dark:text-indigo-50 rounded-md"
    >
      {{ label }}:
    </div>
    <div
      v-if="isNumber(value)"
      class="w-[calc(100%_-_10.75rem)] h-5 bg-cyan-100 dark:bg-cyan-200 border-2 border-cyan-400 dark:border-cyan-700 rounded-xl overflow-hidden"
    >
      <div
        v-for="(item, index) in options.max"
        :key="index"
        :style="{ width: `${100 / options.max}%` }"
        class="relative inline-block text-[0] h-5 after:content-[''] after:absolute after:top-0 after:right-0 after:w-1 after:h-full after:bg-cyan-400 dark:after:bg-cyan-700 last:after:content-none"
        :class="{ ['bg-cyan-300 dark:bg-cyan-600']: index < value }"
      ></div>
    </div>
    <p v-else class="w-[calc(100%_-_10.75rem)] py-1 font-semibold">
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CharacteristicItem',
};
</script>

<script setup>
import { ref } from 'vue';

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

const options = ref({
  max: 5,
});

function isNumber(value) {
  return typeof value == 'number';
}
</script>
