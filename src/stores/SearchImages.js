import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

const imagesLimit = 11;

const params = { has_breeds: true, limit: imagesLimit };
const url = getFetchUrl({ path: 'images/search', params });

export const useSearchImagesStore = defineStore('searchImages', {
  state: () => ({ images: { data: [], isFetching: null, error: null } }),

  actions: {
    fetchImages() {
      const { data, isFetching, error } = useFetch(url);
      this.images = { data, isFetching, error };
    },
  },
});
