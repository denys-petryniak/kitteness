<template>
  <p class="p-5 text-center text-2xl font-bold">
    Oops! Error encountered: {{ message }}
  </p>
</template>

<script>
export default {
  name: 'ErrorMessage',
};
</script>

<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
