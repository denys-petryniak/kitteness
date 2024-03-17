import { storeToRefs } from 'pinia';

import { useBreedPostStore } from '@/stores/BreedPost';

export default function useBreedPost(id) {
  const store = useBreedPostStore();
  const { getBreedPostById } = store;

  getBreedPostById({ id });

  const { breedPost, getBreedPostBody, getBreedPostOptions } =
    storeToRefs(store);

  return {
    breedPost,
    getBreedPostBody,
    getBreedPostOptions,
  };
}
