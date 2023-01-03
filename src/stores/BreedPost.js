import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedPostStore = defineStore('BreedPost', () => {
  const breedPost = ref({ data: [], isFetching: null, error: null });

  function getBreedPostById({ id, limit = 1 }) {
    const params = { breed_ids: id, limit };
    const url = getFetchUrl({ path: 'images/search', params });
    const { data, isFetching, error } = useFetch(url);

    breedPost.value = { data, isFetching, error };
  }

  const getBreedPostBody = computed(() => {
    const [body] = breedPost.value.data[0]?.breeds;
    return body;
  });

  const getBreedPostOptions = computed(() => {
    return [
      {
        label: 'Origin',
        value: getBreedPostBody.value.origin,
      },
      {
        label: 'Temperament',
        value: getBreedPostBody.value.temperament,
      },
      {
        label: 'Weight',
        value: `imperial: ${getBreedPostBody.value.weight.imperial} | metric: ${getBreedPostBody.value.weight.metric}`,
      },
      {
        label: 'Life span',
        value: getBreedPostBody.value.life_span,
      },
      {
        label: 'Adaptability',
        value: getBreedPostBody.value.adaptability,
      },
      {
        label: 'Affection level',
        value: getBreedPostBody.value.affection_level,
      },
      {
        label: 'Child friendly',
        value: getBreedPostBody.value.child_friendly,
      },
      {
        label: 'Dog friendly',
        value: getBreedPostBody.value.dog_friendly,
      },
      {
        label: 'Stranger friendly',
        value: getBreedPostBody.value.stranger_friendly,
      },
      {
        label: 'Energy level',
        value: getBreedPostBody.value.energy_level,
      },
      {
        label: 'Experimental',
        value: getBreedPostBody.value.experimental,
      },
      {
        label: 'Grooming',
        value: getBreedPostBody.value.grooming,
      },
      {
        label: 'Hairless',
        value: getBreedPostBody.value.hairless,
      },
      {
        label: 'Health issues',
        value: getBreedPostBody.value.health_issues,
      },
      {
        label: 'Hypoallergenic',
        value: getBreedPostBody.value.hypoallergenic,
      },

      {
        label: 'Indoor',
        value: getBreedPostBody.value.indoor,
      },
      {
        label: 'Intelligence',
        value: getBreedPostBody.value.intelligence,
      },

      {
        label: 'Natural',
        value: getBreedPostBody.value.natural,
      },

      {
        label: 'Rare',
        value: getBreedPostBody.value.rare,
      },
      {
        label: 'Rex',
        value: getBreedPostBody.value.rex,
      },
      {
        label: 'Shedding level',
        value: getBreedPostBody.value.shedding_level,
      },
      {
        label: 'Short legs',
        value: getBreedPostBody.value.short_legs,
      },
      {
        label: 'Social needs',
        value: getBreedPostBody.value.social_needs,
      },
      {
        label: 'Suppressed tail',
        value: getBreedPostBody.value.suppressed_tail,
      },

      {
        label: 'Vocalisation',
        value: getBreedPostBody.value.vocalisation,
      },
    ];
  });

  return { breedPost, getBreedPostById, getBreedPostBody, getBreedPostOptions };
});
