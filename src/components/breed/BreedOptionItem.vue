<template>
  <div class="flex" :class="{ 'items-center': isNumber(value) }">
    <div
      class="mr-3 w-40 break-all rounded-md border-2 border-amber-100 bg-amber-50 px-2 py-1 text-amber-900 dark:border-amber-400 dark:bg-amber-300 dark:text-amber-950"
    >
      {{ label }}:
    </div>
    <div
      v-if="isNumber(value)"
      class="h-5 w-[calc(100%_-_10.75rem)] overflow-hidden rounded-xl border-2 border-rose-400 bg-rose-50 dark:border-rose-700 dark:bg-rose-100"
    >
      <div
        v-for="(item, index) in max"
        :key="index"
        :style="{ width: getScaleDivisionWidth }"
        class="relative inline-block h-5 text-[0] after:absolute after:right-0 after:top-0 after:h-full after:w-1 after:bg-rose-400 after:content-[''] last:after:content-none dark:after:bg-rose-700"
        :class="{ ['bg-rose-400 dark:bg-rose-500']: index < value }"
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
