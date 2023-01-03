<template>
  <header
    class="fixed top-0 left-0 right-0 p-5 text-center backdrop-blur-lg bg-cyan-300/30 z-10"
  >
    <nav>
      <template v-for="(link, index) in links" :key="link.name">
        <router-link :to="link.to" class="font-semibold">{{
          link.name
        }}</router-link>
        <span
          v-if="!isLastElement(links, index)"
          class="px-2 text-cyan-500 dark:text-slate-100 font-semibold"
          >|</span
        >
      </template>
    </nav>
    <ThemeToggle />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<script setup>
import { ref } from 'vue';

import ThemeToggle from '@/components/ui/ThemeToggle';

const links = ref([
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Breeds',
    to: '/breeds',
  },
  {
    name: 'About',
    to: '/about',
  },
]);

function isLastElement(elements, index) {
  return index === elements.length - 1;
}
</script>
