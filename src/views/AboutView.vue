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
          isFallingActive
            ? 'pointer-events-none cursor-default'
            : 'pointer-events-auto cursor-pointer'
        "
        title="Click me, don't be shy 😘"
        @click="initFallingObjects"
      />
    </div>
    <div
      v-for="object in fallingObjects"
      :key="object.id"
      :style="object.style"
      :class="{ 'falling-object': isFallingActive }"
    >
      <img
        :src="object.image.src"
        :width="object.image.width"
        :height="object.image.height"
        :alt="object.image.alt"
        class="rounded-2xl"
      />
    </div>
    <BaseButton
      class="absolute bottom-0 left-0 opacity-0 hover:opacity-100"
      :text="isShowHeart ? 'Pause Magic 😁' : '🩷 Magic Button 💚'"
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
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import BaseButton from '@/components/ui/BaseButton';

const FALLING_OBJECTS_COUNT = 10;
const OBJECT_SIZE = 120;
const ANIMATION_MIN_DURATION = 2;
const ANIMATION_MAX_DURATION = 6;

const isFallingActive = ref(false);
const fallingObjects = ref([]);

function getRandomLeftObjectGap() {
  return `calc(${Math.random() * 100}% - ${OBJECT_SIZE / 3}px)`;
}

function initFallingObjects() {
  isFallingActive.value = true;

  fallingObjects.value = Array.from(
    { length: FALLING_OBJECTS_COUNT },
    (_, index) => ({
      id: index,
      image: {
        src: `https://placekitten.com/${OBJECT_SIZE}/${OBJECT_SIZE}?image=${
          index + 1
        }`,
        width: OBJECT_SIZE,
        height: OBJECT_SIZE,
        alt: 'Kitten',
      },
      style: {
        position: 'absolute',
        top: 0,
        left: getRandomLeftObjectGap(),
        width: `${OBJECT_SIZE}px`,
        height: `${OBJECT_SIZE}px`,
        animationDuration: `${
          ANIMATION_MIN_DURATION + Math.random() * ANIMATION_MAX_DURATION
        }s`,
      },
    }),
  );
}

function resetAnimations() {
  isShowHeart.value = false;
  isFallingActive.value = false;
  fallingObjects.value = [];
}

const route = useRoute();

watch(
  () => route.path,
  () => {
    resetAnimations();
  },
);

const isShowHeart = ref(false);

function toggleHeartVisibility() {
  isShowHeart.value = !isShowHeart.value;
}
</script>

<style scoped>
.falling-object {
  animation: falling linear forwards;
}

@keyframes falling {
  0% {
    opacity: 0;
    transform: translate3d(0, -300px, 0);
  }

  30% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
    transform: translate3d(0, calc(100vh - 300px), 0);
  }
}
</style>
