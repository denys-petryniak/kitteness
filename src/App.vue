<template>
  <div class="container mx-auto p-5">
    <nav class="p-4 mb-10 text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
