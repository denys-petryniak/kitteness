import { useFetch } from '@/composables/fetch';
import { getTrueFetchUrl } from '@/utils';

export function fetchRandomCatPictures(limit = 10) {
  const url = getTrueFetchUrl('/v1/images/search', { limit });

  return useFetch(url);
}

export function fetchCatPostById(id) {
  const limit = 1;
  const url = getTrueFetchUrl('/v1/images/search', { breed_ids: id, limit });

  return useFetch(url);
}
