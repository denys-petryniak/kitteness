import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';

const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = '2f9e54af-48c3-4ca1-a834-3fc3a169486c';
const url = `${API_URL}images/search?api_key=${API_KEY}&limit=11`;

export const useSearchImagesStore = defineStore('searchImages', {
  state: () => ({ images: [], error: '' }),

  actions: {
    fetchImages() {
      const { data, error } = useFetch(url);

      this.images = data;
      this.error = error;
    },
  },
});
