import { storeToRefs } from 'pinia';

import { useBreedStore } from '@/stores/Breed';

export default function useBreed(id) {
  const breedStore = useBreedStore();
  const { getBreedById } = breedStore;
  const { breed, getBreedBody } = storeToRefs(breedStore);

  function getBreedByIdHandler() {
    return getBreedById({ id: id.value });
  }

  return {
    breed,
    getBreedBody,
    getBreedByIdHandler,
  };
}
