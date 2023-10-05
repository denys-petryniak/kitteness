<template>
  <div class="relative">
    <div class="m-auto max-w-2xl">
      <h1 class="mb-8 text-center text-2xl font-bold md:text-3xl">
        This enchanting feline realm is ruled by the most adorable quokka in the
        galaxy :)
      </h1>
      <img
        src="@/assets/images/quoka.jpeg"
        width="909"
        height="1101"
        alt="Quokka"
        class="rounded-xl border-2 border-gray-200 object-cover"
        :class="
          isDroppingObjectsCompleted
            ? 'pointer-events-none cursor-default'
            : 'pointer-events-auto cursor-pointer'
        "
        title="Click me, don't be shy 😘"
        @click="dropObjects"
      />
    </div>
    <div
      v-for="object in droppingObjects"
      :key="object.id"
      :style="object.style"
      class="dropping-object absolute"
    >
      <img :src="object.image" alt="Kitten" class="rounded-2xl" />
    </div>
    <BaseButton
      class="absolute bottom-0 left-0 opacity-0 hover:opacity-100"
      :text="isShowHeart ? '🩷 Pause Magic 💚' : '🩷 Magic Button 💚'"
      @click="toggleHeartVisibility"
    />
    <div
      class="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center"
    >
      <svg
        class="h-1/2 w-1/2 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] fill-red-600"
        :class="
          isShowHeart
            ? 'animation-play-running opacity-100'
            : 'animation-play-paused opacity-0'
        "
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0"
        y="0"
        width="510"
        height="510"
        viewBox="0 0 510 510"
        xml:space="preserve"
      >
        <path
          d="M255 489.6l-35.7-35.7C86.7 336.6 0 257.6 0 160.7 0 81.6 61.2 20.4 140.3 20.4c43.4 0 86.7 20.4 114.8 53.6C283.1 40.8 326.4 20.4 369.8 20.4 448.8 20.4 510 81.6 510 160.7c0 96.9-86.7 176-219.3 293.3L255 489.6z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<script setup>
import { ref } from 'vue';

import BaseButton from '@/components/ui/BaseButton';

const droppingObjects = ref([]);
const isDroppingObjectsCompleted = ref(false);

function dropObjects() {
  const objectsCount = 10;

  droppingObjects.value = Array.from({ length: objectsCount }, (_, index) => ({
    id: index,
    image: `https://placekitten.com/100/100?image=${index + 1}`,
    style: {
      top: '0',
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 4 + 2}s`,
    },
  }));

  isDroppingObjectsCompleted.value = true;
}

const isShowHeart = ref(false);

function toggleHeartVisibility() {
  isShowHeart.value = !isShowHeart.value;
}
</script>

<style scoped>
.dropping-object {
  top: 0;
  animation: drop linear forwards;
}

@keyframes drop {
  0% {
    top: 0;
  }

  100% {
    top: 100%;
  }
}
</style>
