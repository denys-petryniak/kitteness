<template>
  <div class="max-w-xl px-2 border-l-4 border-indigo-500">
    <template
      v-for="(characteristic, index) in characteristics"
      :key="characteristic.label"
    >
      <CharacteristicItem
        :label="characteristic.label"
        :value="characteristic.value"
      />
      <Spacer v-if="!isLastElement(index)" class="h-3" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CharacteristicsSection',
};
</script>

<script setup>
import Spacer from '@/components/layout/Spacer';
import CharacteristicItem from '@/components/post/CharacteristicItem';

const props = defineProps({
  characteristics: {
    type: Array,
    required: true,
  },
});

function isLastElement(index) {
  return index === props.characteristics.length - 1;
}
</script>
