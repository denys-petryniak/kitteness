import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export function fetchRandomCatPictures(limit = 10) {
  const url = getFetchUrl('/v1/images/search', { has_breeds: true, limit });

  return useFetch(url);
}

export function fetchCatPostById(id, limit = 1) {
  const url = getFetchUrl('/v1/images/search', { breed_ids: id, limit });

  return useFetch(url);
}

export function fetchCatBreeds() {
  const url = getFetchUrl('/v1/breeds', {});

  return useFetch(url);
}
