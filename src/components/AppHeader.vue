<template>
  <header
    class="fixed top-0 left-0 right-0 p-5 text-center backdrop-blur-lg bg-cyan-300/30 z-10"
  >
    <nav>
      <router-link v-for="(link, index) in links" :key="link.name" :to="link.to"
        >{{ link.name }}
        <span
          v-if="!isLastElement(links, index)"
          class="px-2 text-cyan-500 dark:text-slate-100"
          >|</span
        >
      </router-link>
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
