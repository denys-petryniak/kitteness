import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedsImagesStore = defineStore('breedsImages', {
  state: () => ({ images: { data: [], isFetching: null, error: null } }),

  actions: {
    fetchBreedsImages({ limit }) {
      const params = { has_breeds: true, limit };
      const url = getFetchUrl({ path: 'images/search', params });
      const { data, isFetching, error } = useFetch(url);

      this.images = { data, isFetching, error };
    },
  },
});
