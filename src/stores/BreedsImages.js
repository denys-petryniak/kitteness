import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedsImagesStore = defineStore('breedsImages', () => {
  const images = ref({ data: [], isFetching: null, error: null });

  function fetchBreedsImages({ limit }) {
    const params = { has_breeds: true, limit };
    const url = getFetchUrl({ path: 'images/search', params });
    const { data, isFetching, error } = useFetch(url);

    images.value = { data, isFetching, error };
  }

  return { images, fetchBreedsImages };
});
