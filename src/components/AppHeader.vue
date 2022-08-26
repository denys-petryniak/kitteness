<template>
  <header
    class="fixed top-0 left-0 right-0 p-5 text-center backdrop-blur-lg bg-cyan-300/30 z-10"
  >
    <nav>
      <router-link to="/">Home</router-link>
      <span class="px-2 text-cyan-500 dark:text-slate-100">|</span>
      <router-link to="/about">About</router-link>
    </nav>
    <ThemeToggle :isDark="isDark" @toggleDark="toggleDark" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<script setup>
import ThemeToggle from '@/components/ui/ThemeToggle';

const emit = defineEmits(['toggleDark']);
defineProps({
  isDark: {
    type: Boolean,
    required: false,
  },
});

function toggleDark() {
  emit('toggleDark');
}
</script>
