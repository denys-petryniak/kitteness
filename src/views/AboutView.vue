<template>
  <div class="relative">
    <div class="m-auto max-w-2xl">
      <h1 class="mb-8 text-center text-2xl font-bold md:text-3xl">
        The galaxy's cutest quokka rules this kitty realm 👑
      </h1>
      <img
        src="@/assets/images/quoka.jpeg"
        width="909"
        height="1101"
        alt="Quokka"
        class="rounded-xl border-2 border-stone-200 object-cover dark:border-stone-700"
        :class="
          isFallingActive
            ? 'pointer-events-none cursor-default'
            : 'cursor-paw pointer-events-auto'
        "
        title="Click me, don't be shy 😘"
        @click="initFallingObjects"
      />
    </div>
    <div
      v-for="object in fallingObjects"
      :key="object.id"
      :style="object.style"
      :class="[
        'select-none leading-none',
        { 'falling-object': isFallingActive },
      ]"
      aria-hidden="true"
    >
      {{ object.emoji }}
    </div>
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

const FALLING_OBJECTS_COUNT = 10;
const OBJECT_SIZE_MOBILE = 64;
const OBJECT_SIZE_DESKTOP = 120;
const MOBILE_BREAKPOINT = 640;
const ANIMATION_MIN_DURATION = 2;
const ANIMATION_MAX_DURATION = 6;
const CAT_EMOJIS = [
  '🐱',
  '🐈',
  '🐈‍⬛',
  '😸',
  '😺',
  '😻',
  '😼',
  '😽',
  '🙀',
  '😿',
  '😾',
  '🐾',
];

const isFallingActive = ref(false);
const fallingObjects = ref([]);
const isShowHeart = ref(false);

function getRandomLeftObjectGap(size) {
  return `calc(${Math.random() * 100}% - ${size / 3}px)`;
}

function initFallingObjects() {
  isFallingActive.value = true;
  isShowHeart.value = true;

  const objectSize =
    window.innerWidth < MOBILE_BREAKPOINT
      ? OBJECT_SIZE_MOBILE
      : OBJECT_SIZE_DESKTOP;

  fallingObjects.value = Array.from(
    { length: FALLING_OBJECTS_COUNT },
    (_, index) => ({
      id: index,
      emoji: CAT_EMOJIS[Math.floor(Math.random() * CAT_EMOJIS.length)],
      style: {
        position: 'absolute',
        top: 0,
        left: getRandomLeftObjectGap(objectSize),
        fontSize: `${objectSize}px`,
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
</script>

<style scoped>
.cursor-paw {
  cursor:
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><text x='0' y='26' font-size='26'>🐾</text></svg>")
      8 24,
    pointer;
}

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
