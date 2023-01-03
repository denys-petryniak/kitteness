<template>
  <div class="relative flex h-full flex-col">
    <AppHeader class="shrink-0" />
    <div class="container mx-auto mt-[64px] grow py-12 px-5 md:py-16">
      <router-view v-slot="{ Component }">
        <KeepAlive :max="maxCachedInstances" :exclude="excludeComponentCaching">
          <component :is="Component" :key="getComponentId" />
        </KeepAlive>
      </router-view>
    </div>
    <AppFooter class="shrink-0" />
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { computed, provide, ref } from 'vue';
import { useRoute } from 'vue-router';

import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';
import { isDarkKey } from '@/utils/keys';

const route = useRoute();
const getComponentId = computed(() => `${route.fullPath}`);

const maxCachedInstances = ref(10);
const excludeComponentCaching = ref(['BreedView']);

const isDark = useDark();
const toggleDark = useToggle(isDark);

provide(isDarkKey, { isDark, toggleDark });
</script>
