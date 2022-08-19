import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

const params = { limit: 11 };
const url = getFetchUrl({ path: 'images/search', params });

export const useSearchImagesStore = defineStore('searchImages', {
  state: () => ({ images: [], error: '' }),

  actions: {
    fetchImages() {
      const { data, error } = useFetch(url);

      this.images = data;
      this.error = error;
    },
  },
});
