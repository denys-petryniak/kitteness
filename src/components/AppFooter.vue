<template>
  <footer class="bg-cyan-200 p-4 text-center dark:bg-cyan-600">
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
