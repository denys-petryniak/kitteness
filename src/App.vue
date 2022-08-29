<template>
  <div class="relative flex flex-col h-full">
    <AppHeader class="shrink-0" :isDark="isDark" @toggleDark="toggleDark" />
    <div class="grow mt-[64px] container mx-auto py-12 md:py-16 px-5">
      <router-view v-slot="{ Component }">
        <KeepAlive :max="maxCachedInstances" :exclude="excludeComponentCaching">
          <component :is="Component" :key="$route.fullPath"></component>
        </KeepAlive>
      </router-view>
    </div>
    <AppFooter class="shrink-0" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

const maxCachedInstances = ref(10);
const excludeComponentCaching = ref(['PostView']);

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
