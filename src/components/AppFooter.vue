<template>
  <footer class="bg-rose-100 p-4 text-center dark:bg-stone-900">
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
