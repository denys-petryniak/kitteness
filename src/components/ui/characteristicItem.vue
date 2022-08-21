<template>
  <template v-if="Number(value)">
    <div class="p-2 border-l-4 border-indigo-500">
      <label :for="label" class="mr-2">{{ label }}:</label>
      <meter
        :id="label"
        min="0"
        max="5"
        low="2"
        high="4"
        optimum="5"
        :value="value"
      >
        at 50/100
      </meter>
    </div>
  </template>
  <template v-else>
    <p class="p-2 border-l-4 border-indigo-500">
      {{ label }}:
      <span class="font-semibold">{{ value }}</span>
    </p>
  </template>
</template>

<script>
export default {
  name: 'CharacteristicItem',
};
</script>

<script setup>
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
</script>
