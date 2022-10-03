import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedsStore = defineStore('Breeds', () => {
  const breeds = ref({ data: [], isFetching: null, error: null });

  function getBreeds() {
    const url = getFetchUrl({ path: 'breeds' });
    const { data, isFetching, error } = useFetch(url);

    breeds.value = { data, isFetching, error };
  }

  return { breeds, getBreeds };
});
