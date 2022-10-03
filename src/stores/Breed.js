import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedStore = defineStore('Breed', {
  state: () => ({
    breed: { data: [], isFetching: null, error: null },
  }),

  actions: {
    getBreedById({ id = 'beng', limit = 8 }) {
      const params = { breed_ids: id, limit };
      const url = getFetchUrl({ path: 'images/search', params });
      const { data, isFetching, error } = useFetch(url);

      this.breed = { data, isFetching, error };
    },
  },

  getters: {
    getBreedBody: (state) => {
      const [body] = state.breed.data[0]?.breeds;
      return body;
    },
  },
});
