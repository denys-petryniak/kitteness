import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedsStore = defineStore('Breeds', {
  state: () => ({
    breeds: { data: [], isFetching: null, error: null },
  }),

  actions: {
    getBreeds() {
      const url = getFetchUrl({ path: 'breeds' });
      const { data, isFetching, error } = useFetch(url);

      this.breeds = { data, isFetching, error };
    },
  },
});
