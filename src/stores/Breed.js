import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedStore = defineStore('Breed', () => {
  const breed = ref({ data: [], isFetching: null, error: null });

  function getBreedById({ id = 'beng', limit = 8 }) {
    const params = { breed_ids: id, limit };
    const url = getFetchUrl({ path: 'images/search', params });
    const { data, isFetching, error } = useFetch(url);

    breed.value = { data, isFetching, error };
  }

  const getBreedBody = computed(() => {
    const [body] = breed.value.data[0]?.breeds;
    return body;
  });

  return { breed, getBreedById, getBreedBody };
});
