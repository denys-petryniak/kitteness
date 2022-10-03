import { storeToRefs } from 'pinia';
import { useBreedsImagesStore } from '@/stores/BreedsImages';

export default function useBreedsImages(limit) {
  const store = useBreedsImagesStore();
  const { fetchBreedsImages } = store;
  const { images } = storeToRefs(store);

  function fetchBreedsImagesHandler() {
    fetchBreedsImages({ limit: limit.value });
  }

  return {
    images,
    fetchBreedsImagesHandler,
  };
}
