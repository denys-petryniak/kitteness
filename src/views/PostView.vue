<template>
  <div>
    <h1>
      <pre>{{ post }}</pre>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PostView',
};
</script>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/Post';

const post = ref(null);
const error = ref(null);

const route = useRoute();
const id = route.params.id;

const postStore = usePostStore();
postStore.getPostById(id);

watchEffect(() => {
  post.value = postStore.post;
  error.value = postStore.error;
});
</script>
