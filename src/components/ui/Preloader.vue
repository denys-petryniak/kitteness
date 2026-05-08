<template>
  <div
    role="status"
    aria-live="polite"
    aria-label="Loading"
    class="preloader fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
  >
    <img
      :src="catIcon"
      alt=""
      aria-hidden="true"
      class="preloader__kitten w-20 md:w-24"
    />
    <div class="preloader__paws mt-3 flex gap-2" aria-hidden="true">
      <span class="preloader__paw"></span>
      <span class="preloader__paw"></span>
      <span class="preloader__paw"></span>
    </div>
    <span class="sr-only">Loading…</span>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Preloader',
};
</script>

<script setup>
import catIcon from '@/assets/images/icons/cat.png';
</script>

<style scoped>
.preloader__kitten {
  animation: preloader-bounce 0.9s ease-in-out infinite;
  transform-origin: bottom center;
}

@keyframes preloader-bounce {
  0%,
  100% {
    transform: translateY(0) scale(1, 1);
  }
  40% {
    transform: translateY(-14px) scale(1.02, 0.98);
  }
  60% {
    transform: translateY(-14px) scale(1.02, 0.98);
  }
  80% {
    transform: translateY(0) scale(1.04, 0.96);
  }
}

.preloader__paw {
  @apply h-2.5 w-2.5 rounded-full bg-amber-500 dark:bg-amber-400;
  animation: preloader-paw 1.2s ease-in-out infinite;
}

.preloader__paw:nth-child(2) {
  animation-delay: 0.15s;
}

.preloader__paw:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes preloader-paw {
  0%,
  80%,
  100% {
    opacity: 0.25;
    transform: scale(0.7);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
