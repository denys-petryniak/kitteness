import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedStore = defineStore('Breed', {
  state: () => ({
    breed: { data: [], isFetching: null, error: null },
  }),

  actions: {
    getBreedById({ id = 'beng', imagesLimit = 8 }) {
      const params = { breed_ids: id, limit: imagesLimit };
      const url = getFetchUrl({ path: 'images/search', params });
      const { data, isFetching, error } = useFetch(url);

      this.breed = { data, isFetching, error };
    },
  },

  getters: {
    getBreedBody: (state) => {
      const [body] = state.breed.data[0]?.breeds;
      return body;
    },
    getBreedOptions() {
      return [
        {
          label: 'Origin',
          value: this.getBreedBody.origin,
        },
        {
          label: 'Temperament',
          value: this.getBreedBody.temperament,
        },
        {
          label: 'Weight',
          value: `imperial: ${this.getBreedBody.weight.imperial} | metric: ${this.getBreedBody.weight.metric}`,
        },
        {
          label: 'Life span',
          value: this.getBreedBody.life_span,
        },
        {
          label: 'Adaptability',
          value: this.getBreedBody.adaptability,
        },
        {
          label: 'Affection level',
          value: this.getBreedBody.affection_level,
        },
        {
          label: 'Child friendly',
          value: this.getBreedBody.child_friendly,
        },
        {
          label: 'Dog friendly',
          value: this.getBreedBody.dog_friendly,
        },
        {
          label: 'Stranger friendly',
          value: this.getBreedBody.stranger_friendly,
        },
        {
          label: 'Energy level',
          value: this.getBreedBody.energy_level,
        },
        {
          label: 'Experimental',
          value: this.getBreedBody.experimental,
        },
        {
          label: 'Grooming',
          value: this.getBreedBody.grooming,
        },
        {
          label: 'Hairless',
          value: this.getBreedBody.hairless,
        },
        {
          label: 'Health issues',
          value: this.getBreedBody.health_issues,
        },
        {
          label: 'Hypoallergenic',
          value: this.getBreedBody.hypoallergenic,
        },

        {
          label: 'Indoor',
          value: this.getBreedBody.indoor,
        },
        {
          label: 'Intelligence',
          value: this.getBreedBody.intelligence,
        },

        {
          label: 'Natural',
          value: this.getBreedBody.natural,
        },

        {
          label: 'Rare',
          value: this.getBreedBody.rare,
        },
        {
          label: 'Rex',
          value: this.getBreedBody.rex,
        },
        {
          label: 'Shedding level',
          value: this.getBreedBody.shedding_level,
        },
        {
          label: 'Short legs',
          value: this.getBreedBody.short_legs,
        },
        {
          label: 'Social needs',
          value: this.getBreedBody.social_needs,
        },
        {
          label: 'Suppressed tail',
          value: this.getBreedBody.suppressed_tail,
        },

        {
          label: 'Vocalisation',
          value: this.getBreedBody.vocalisation,
        },
      ];
    },
  },
});
