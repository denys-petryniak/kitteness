<template>
  <div class="relative flex h-full flex-col">
    <AppHeader class="shrink-0" />
    <div class="container mx-auto mt-[64px] grow px-5 py-12 md:py-16">
      <RouterView v-slot="{ Component }">
        <KeepAlive :max="maxCachedInstances" :exclude="excludeComponentCaching">
          <component :is="Component" :key="$route.fullPath" />
        </KeepAlive>
      </RouterView>
    </div>
    <AppFooter class="shrink-0" />
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { provide, ref } from 'vue';

import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import { isDarkKey } from '@/utils/keys';

const isDark = useDark();
const toggleDark = useToggle(isDark);

provide(isDarkKey, { isDark, toggleDark });

const maxCachedInstances = ref(10);
const excludeComponentCaching = ref(['BreedView']);
</script>
