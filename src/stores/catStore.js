import { defineStore } from 'pinia';
import { ref } from 'vue';

import { fetchCatPostById, fetchRandomCatPictures } from '@/services/theCatApi';

export const useCatStore = defineStore('catStore', () => {
  const randomCatPictures = ref({ data: null, isFetching: true, error: null });

  async function fetchRandomCatPicturesAction(limit) {
    const { data, isFetching, error } = await fetchRandomCatPictures(limit);
    randomCatPictures.value = { data, isFetching, error };
  }

  const selectedCatPost = ref({ data: null, isFetching: true, error: null });

  async function fetchCatPostByIdAction(id) {
    const { data, isFetching, error } = await fetchCatPostById(id);
    selectedCatPost.value = { data, isFetching, error };
  }

  return {
    randomCatPictures,
    selectedCatPost,
    fetchRandomCatPictures: fetchRandomCatPicturesAction,
    fetchCatPostById: fetchCatPostByIdAction,
  };
});
