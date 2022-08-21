<template>
  <div class="p-5 text-2xl font-bold text-center text-cyan-300">
    Oops! Error encountered: {{ message }}
  </div>
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
