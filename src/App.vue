<template>
  <div class="relative mt-[56px] container mx-auto py-12 md:py-16 px-5">
    <header
      class="fixed top-0 left-0 right-0 p-4 text-center backdrop-blur-lg bg-cyan-300/30"
    >
      <nav>
        <router-link to="/">Home</router-link>
        <span class="px-2 text-cyan-500">|</span>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>
