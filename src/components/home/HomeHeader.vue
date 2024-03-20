<template>
  <div class="mb-6">
    <h1 class="mb-8 text-center text-2xl font-bold leading-10 md:text-3xl">
      Because everyday is a
      <span
        class="mr-3 underline decoration-amber-500 decoration-wavy decoration-2"
        >Caturday</span
      ><img
        src="@/assets/images/icons/cat.png"
        alt="Cat"
        class="mt-[-12px] inline-block w-14"
      />
    </h1>
    <BaseButton right text="Catify Again" @click="emit('reloadCatPictures')" />
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
};
</script>

<script setup>
import BaseButton from '@/components/ui/BaseButton';

const emit = defineEmits(['reloadCatPictures']);
</script>
