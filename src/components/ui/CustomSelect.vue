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

<style scoped>
.select {
  @apply mx-auto mb-6 w-[calc(100%_-_1rem)] max-w-4xl text-lg text-cyan-900 dark:text-slate-100 md:text-xl;
}

.select :deep(.vs__search::placeholder),
.select :deep(.vs__dropdown-toggle),
.select :deep(.vs__dropdown-menu) {
  @apply border-2 border-gray-200 bg-cyan-100 dark:bg-cyan-800;
}
.select :deep(.vs__open-indicator) {
  @apply fill-gray-200;
}

.select :deep(.vs__selected) {
  @apply text-inherit;
}

.select :deep(.vs__dropdown-option) {
  @apply hover:bg-cyan-200 dark:hover:bg-cyan-900;
}

.select :deep(.vs__dropdown-option--highlight) {
  @apply bg-cyan-200 dark:bg-cyan-900;
}
</style>
