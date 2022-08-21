import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const usePostStore = defineStore('Post', {
  state: () => ({ post: {}, error: '' }),

  actions: {
    getPostById(id) {
      const url = getFetchUrl({ path: `images/${id}` });
      const { data, error } = useFetch(url);

      this.post = data;
      this.error = error;
    },
  },
});