import { storeToRefs } from 'pinia';
import { useBreedsStore } from '@/stores/Breeds';

export default function useBreeds() {
  const breedsStore = useBreedsStore();
  const { getBreeds } = breedsStore;
  const { breeds } = storeToRefs(breedsStore);

  return {
    breeds,
    getBreeds,
  };
}
