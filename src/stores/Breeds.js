import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedsStore = defineStore('Breeds', {
  state: () => ({
    breeds: { items: [], error: '' },
    breed: { body: {}, error: '' },
  }),

  actions: {
    getBreeds() {
      const url = getFetchUrl({ path: 'breeds' });
      const { data, error } = useFetch(url);

      this.breeds = { items: data, error };
    },

    getBreedById(id = 'beng') {
      const imagesLimit = 8;
      const params = { breed_ids: id, limit: imagesLimit };
      const url = getFetchUrl({ path: 'images/search', params });
      const { data, error } = useFetch(url);

      this.breed = { body: data, error };
    },
  },
});
