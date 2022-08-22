<template>
  <div class="border-l-4 border-indigo-500">
    <template
      v-for="characteristic in characteristics"
      :key="characteristic.label"
    >
      <CharacteristicItem
        v-if="characteristic.value"
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
