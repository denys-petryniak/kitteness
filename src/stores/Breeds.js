import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedsStore = defineStore('Breeds', {
  state: () => ({
    breeds: { data: [], isFetching: null, error: null },
    breed: { data: [], isFetching: null, error: null },
  }),

  actions: {
    getBreeds() {
      const url = getFetchUrl({ path: 'breeds' });
      const { data, isFetching, error } = useFetch(url);

      this.breeds = { data, isFetching, error };
    },

    getBreedById(id = 'beng') {
      const imagesLimit = 8;
      const params = { breed_ids: id, limit: imagesLimit };
      const url = getFetchUrl({ path: 'images/search', params });
      const { data, isFetching, error } = useFetch(url);

      this.breed = { data, isFetching, error };
    },
  },
});
