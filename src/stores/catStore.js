import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import {
  fetchCatBreeds,
  fetchCatPostById,
  fetchRandomCatPictures,
} from '@/services/theCatApi';

export const useCatStore = defineStore('catStore', () => {
  const randomCatPictures = ref({
    data: null,
    isFetching: true,
    error: null,
    retry: null,
  });

  async function fetchRandomCatPicturesAction(limit) {
    const { data, isFetching, error, retry } =
      await fetchRandomCatPictures(limit);
    randomCatPictures.value = { data, isFetching, error, retry };
  }

  const catPost = ref({ data: null, isFetching: true, error: null });

  async function fetchCatPostByIdAction(id, limit) {
    const { data, isFetching, error } = await fetchCatPostById(id, limit);
    catPost.value = { data, isFetching, error };
  }

  const getCatPostBreed = computed(() => {
    const { breeds } = catPost.value.data?.[0] || {};
    const [body] = breeds || {};

    return body;
  });

  const getCatPostBreedOptions = computed(() => {
    return [
      {
        label: 'Origin',
        value: getCatPostBreed.value.origin,
      },
      {
        label: 'Temperament',
        value: getCatPostBreed.value.temperament,
      },
      {
        label: 'Weight',
        value: `imperial: ${getCatPostBreed.value.weight.imperial} | metric: ${getCatPostBreed.value.weight.metric}`,
      },
      {
        label: 'Life span',
        value: getCatPostBreed.value.life_span,
      },
      {
        label: 'Adaptability',
        value: getCatPostBreed.value.adaptability,
      },
      {
        label: 'Affection level',
        value: getCatPostBreed.value.affection_level,
      },
      {
        label: 'Child friendly',
        value: getCatPostBreed.value.child_friendly,
      },
      {
        label: 'Dog friendly',
        value: getCatPostBreed.value.dog_friendly,
      },
      {
        label: 'Stranger friendly',
        value: getCatPostBreed.value.stranger_friendly,
      },
      {
        label: 'Energy level',
        value: getCatPostBreed.value.energy_level,
      },
      {
        label: 'Experimental',
        value: getCatPostBreed.value.experimental,
      },
      {
        label: 'Grooming',
        value: getCatPostBreed.value.grooming,
      },
      {
        label: 'Hairless',
        value: getCatPostBreed.value.hairless,
      },
      {
        label: 'Health issues',
        value: getCatPostBreed.value.health_issues,
      },
      {
        label: 'Hypoallergenic',
        value: getCatPostBreed.value.hypoallergenic,
      },

      {
        label: 'Indoor',
        value: getCatPostBreed.value.indoor,
      },
      {
        label: 'Intelligence',
        value: getCatPostBreed.value.intelligence,
      },

      {
        label: 'Natural',
        value: getCatPostBreed.value.natural,
      },

      {
        label: 'Rare',
        value: getCatPostBreed.value.rare,
      },
      {
        label: 'Rex',
        value: getCatPostBreed.value.rex,
      },
      {
        label: 'Shedding level',
        value: getCatPostBreed.value.shedding_level,
      },
      {
        label: 'Short legs',
        value: getCatPostBreed.value.short_legs,
      },
      {
        label: 'Social needs',
        value: getCatPostBreed.value.social_needs,
      },
      {
        label: 'Suppressed tail',
        value: getCatPostBreed.value.suppressed_tail,
      },

      {
        label: 'Vocalisation',
        value: getCatPostBreed.value.vocalisation,
      },
    ];
  });

  const catBreeds = ref({ data: null, isFetching: true, error: null });

  async function fetchCatBreedsAction() {
    const { data, isFetching, error } = await fetchCatBreeds();
    catBreeds.value = { data, isFetching, error };
  }

  return {
    randomCatPictures,
    catPost,
    getCatPostBreed,
    getCatPostBreedOptions,
    catBreeds,
    fetchRandomCatPictures: fetchRandomCatPicturesAction,
    fetchCatPostById: fetchCatPostByIdAction,
    fetchCatBreeds: fetchCatBreedsAction,
  };
});
