import { storeToRefs } from 'pinia';
import { useBreedPostStore } from '@/stores/BreedPost';

export default function useBreedPost(id) {
  const store = useBreedPostStore();
  const { getBreedPostById } = store;
  const { breedPost, getBreedPostBody, getBreedPostOptions } =
    storeToRefs(store);

  function getBreedPostByIdHandler() {
    return getBreedPostById({ id });
  }

  return {
    breedPost,
    getBreedPostBody,
    getBreedPostOptions,
    getBreedPostByIdHandler,
  };
}
