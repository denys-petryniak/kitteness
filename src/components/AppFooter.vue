<template>
  <footer class="p-4 text-center bg-cyan-200 dark:bg-cyan-600">
    <p>©{{ getCurrentYear() }}</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<script setup>
function getCurrentYear() {
  return new Date().getFullYear();
}
</script>
