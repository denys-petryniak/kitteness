<template>
  <div
    class="grid gap-y-4 border-l-4 border-indigo-500 px-2 md:grid-cols-2 md:gap-x-8 lg:gap-x-9 xl:gap-x-10"
  >
    <template v-for="characteristic in options" :key="characteristic.label">
      <BreedOptionItem
        :label="characteristic.label"
        :value="characteristic.value"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'BreedOptionsSection',
};
</script>

<script setup>
import BreedOptionItem from '@/components/breed/BreedOptionItem';

defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>
