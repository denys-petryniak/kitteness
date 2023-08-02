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
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<script setup>
import { ref } from 'vue';

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
</script>

<style scoped>
.dropping-object {
  top: 0;
  animation: dropAnimation linear forwards;
}

@keyframes dropAnimation {
  0% {
    top: 0;
  }

  100% {
    top: 100%;
  }
}
</style>
