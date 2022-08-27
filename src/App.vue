<template>
  <div class="relative flex flex-col h-full">
    <AppHeader class="shrink-0" :isDark="isDark" @toggleDark="toggleDark" />
    <div class="grow mt-[64px] container mx-auto py-12 md:py-16 px-5">
      <router-view />
    </div>
    <AppFooter class="shrink-0" />
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
