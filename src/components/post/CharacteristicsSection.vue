<template>
  <div
    class="grid gap-y-4 md:grid-cols-2 md:gap-x-8 lg:gap-x-9 xl:gap-x-10 px-2 border-l-4 border-indigo-500"
  >
    <template
      v-for="characteristic in characteristics"
      :key="characteristic.label"
    >
      <CharacteristicItem
        :label="characteristic.label"
        :value="characteristic.value"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CharacteristicsSection',
};
</script>

<script setup>
import CharacteristicItem from '@/components/post/CharacteristicItem';

defineProps({
  characteristics: {
    type: Array,
    required: true,
  },
});
</script>
