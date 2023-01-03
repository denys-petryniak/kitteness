<template>
  <div class="relative flex flex-col h-full">
    <AppHeader class="shrink-0" />
    <div class="grow mt-[64px] container mx-auto py-12 md:py-16 px-5">
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
