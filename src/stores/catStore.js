import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import {
  fetchCatBreeds,
  fetchCatPictures,
  fetchCatPostById,
} from '@/services/theCatApi';

export const useCatStore = defineStore('catStore', () => {
  const catPictures = ref({
    data: null,
    isFetching: true,
    error: null,
    retry: null,
  });

  async function fetchCatPicturesAction({ hasBreeds, breedIds, limit }) {
    const { data, isFetching, error, retry } = await fetchCatPictures({
      hasBreeds,
      breedIds,
      limit,
    });
    catPictures.value = { data, isFetching, error, retry };
  }

  const carouselCatPictures = ref({
    data: null,
    isFetching: true,
    error: null,
  });

  async function fetchCarouselCatPicturesAction({
    hasBreeds,
    breedIds,
    limit,
  }) {
    const { data, isFetching, error } = await fetchCatPictures({
      hasBreeds,
      breedIds,
      limit,
    });
    carouselCatPictures.value = { data, isFetching, error };
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

  const getBreedById = computed(() => {
    return (id) => catBreeds.value.data?.find((breed) => breed.id === id);
  });

  return {
    catPictures,
    carouselCatPictures,
    catPost,
    getCatPostBreed,
    getCatPostBreedOptions,
    catBreeds,
    getBreedById,
    fetchCatPictures: fetchCatPicturesAction,
    fetchCarouselCatPictures: fetchCarouselCatPicturesAction,
    fetchCatPostById: fetchCatPostByIdAction,
    fetchCatBreeds: fetchCatBreedsAction,
  };
});
