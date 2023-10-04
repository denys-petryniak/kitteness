<template>
  <div class="flex" :class="{ 'items-center': isNumber(value) }">
    <div
      class="mr-3 w-40 break-all rounded-md border-2 border-indigo-100 bg-indigo-50 px-2 py-1 text-indigo-900 dark:border-indigo-400 dark:bg-indigo-300 dark:text-indigo-50"
    >
      {{ label }}:
    </div>
    <div
      v-if="isNumber(value)"
      class="h-5 w-[calc(100%_-_10.75rem)] overflow-hidden rounded-xl border-2 border-cyan-400 bg-cyan-100 dark:border-cyan-700 dark:bg-cyan-200"
    >
      <div
        v-for="(item, index) in max"
        :key="index"
        :style="{ width: getScaleDivisionWidth }"
        class="relative inline-block h-5 text-[0] after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-cyan-400 after:content-[''] last:after:content-none dark:after:bg-cyan-700"
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
  name: 'BreedOptionItem',
};
</script>

<script setup>
import { computed, ref } from 'vue';

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

const max = ref(5);

const getScaleDivisionWidth = computed(() => `${100 / max.value}%`);

function isNumber(value) {
  return typeof value == 'number';
}
</script>
