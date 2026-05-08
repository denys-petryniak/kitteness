<template>
  <vSelect
    v-model="value"
    :label="label"
    :searchable="searchable"
    :clearable="clearable"
    :options="options"
    :reduce="(option) => option.id"
    class="select"
  />
</template>

<script>
export default {
  name: 'CustomSelect',
};
</script>

<script setup>
import 'vue-select/dist/vue-select.css';

import { computed } from 'vue';
import vSelect from 'vue-select';

const props = defineProps({
  searchable: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style>
.select {
  @apply mx-auto mb-6 w-[calc(100%_-_1rem)] max-w-4xl text-lg text-rose-900 dark:text-stone-100 md:text-xl;
}

.select .vs__dropdown-menu,
.select .vs__dropdown-toggle,
.select .vs__search::placeholder {
  @apply border-2 border-stone-200 bg-rose-50 dark:border-stone-700 dark:bg-stone-700;
}

.select .vs__open-indicator {
  @apply fill-stone-400;
}

.select .vs__selected {
  @apply text-inherit;
}

.select .vs__dropdown-option {
  @apply hover:bg-rose-100 dark:hover:bg-stone-800;
}

.select .vs__dropdown-option--highlight {
  @apply bg-rose-100 dark:bg-stone-800;
}
</style>
