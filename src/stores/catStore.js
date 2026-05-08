import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import {
  fetchCatBreeds,
  fetchCatPictures,
  fetchCatPostById,
} from '@/services/theCatApi';

const formatBoolean = (value) => (value ? 'Yes' : 'No');
const formatWeight = (weight) =>
  `imperial: ${weight.imperial} | metric: ${weight.metric}`;

// Rating fields stay numeric so BreedOptionItem renders them as a 5-segment bar.
// Boolean fields are formatted to Yes/No strings so they render as text.
const BREED_OPTION_FIELDS = [
  { key: 'origin', label: 'Origin' },
  { key: 'temperament', label: 'Temperament' },
  { key: 'weight', label: 'Weight', format: formatWeight },
  { key: 'life_span', label: 'Life span' },
  { key: 'adaptability', label: 'Adaptability' },
  { key: 'affection_level', label: 'Affection level' },
  { key: 'child_friendly', label: 'Child friendly' },
  { key: 'dog_friendly', label: 'Dog friendly' },
  { key: 'stranger_friendly', label: 'Stranger friendly' },
  { key: 'energy_level', label: 'Energy level' },
  { key: 'grooming', label: 'Grooming' },
  { key: 'health_issues', label: 'Health issues' },
  { key: 'intelligence', label: 'Intelligence' },
  { key: 'shedding_level', label: 'Shedding level' },
  { key: 'social_needs', label: 'Social needs' },
  { key: 'vocalisation', label: 'Vocalisation' },
  { key: 'experimental', label: 'Experimental', format: formatBoolean },
  { key: 'hairless', label: 'Hairless', format: formatBoolean },
  { key: 'hypoallergenic', label: 'Hypoallergenic', format: formatBoolean },
  { key: 'indoor', label: 'Indoor', format: formatBoolean },
  { key: 'natural', label: 'Natural', format: formatBoolean },
  { key: 'rare', label: 'Rare', format: formatBoolean },
  { key: 'rex', label: 'Rex', format: formatBoolean },
  { key: 'short_legs', label: 'Short legs', format: formatBoolean },
  { key: 'suppressed_tail', label: 'Suppressed tail', format: formatBoolean },
];

export const useCatStore = defineStore('catStore', () => {
  const catPictures = ref({
    data: null,
    isFetching: true,
    error: null,
    retry: null,
  });

  function fetchCatPicturesAction({ hasBreeds, breedIds, limit }) {
    const { data, isFetching, error, retry } = fetchCatPictures({
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

  function fetchCarouselCatPicturesAction({ hasBreeds, breedIds, limit }) {
    const { data, isFetching, error } = fetchCatPictures({
      hasBreeds,
      breedIds,
      limit,
    });
    carouselCatPictures.value = { data, isFetching, error };
  }

  const catPost = ref({ data: null, isFetching: true, error: null });

  function fetchCatPostByIdAction(id, limit) {
    const { data, isFetching, error } = fetchCatPostById(id, limit);
    catPost.value = { data, isFetching, error };
  }

  const getCatPostBreed = computed(() => {
    const [breed] = catPost.value.data?.[0]?.breeds ?? [];
    return breed;
  });

  const getCatPostBreedOptions = computed(() => {
    const breed = getCatPostBreed.value;
    if (!breed) return [];

    return BREED_OPTION_FIELDS.flatMap(({ key, label, format }) => {
      const raw = breed[key];
      if (raw === null || raw === undefined) return [];
      return [{ label, value: format ? format(raw) : raw }];
    });
  });

  const catBreeds = ref({ data: null, isFetching: true, error: null });

  function fetchCatBreedsAction() {
    const { data, isFetching, error } = fetchCatBreeds();
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
