import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.VUE_APP_API_KEY,
  },
};

export function fetchCatPictures({ hasBreeds = true, breedIds, limit = 10 }) {
  const params = {
    has_breeds: hasBreeds,
    breed_ids: breedIds,
    limit,
  };

  const url = getFetchUrl('/v1/images/search', params);

  return useFetch(url, fetchOptions);
}

export function fetchCatPostById(id, limit = 1) {
  const params = {
    breed_ids: id,
    limit,
  };

  const url = getFetchUrl('/v1/images/search', params);

  return useFetch(url, fetchOptions);
}

export function fetchCatBreeds() {
  const url = getFetchUrl('/v1/breeds');

  return useFetch(url, fetchOptions);
}
