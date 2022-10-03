import { defineStore } from 'pinia';
import { useFetch } from '@/composables/fetch';
import { getFetchUrl } from '@/utils';

export const useBreedPostStore = defineStore('BreedPost', {
  state: () => ({
    breedPost: { data: [], isFetching: null, error: null },
  }),

  actions: {
    getBreedPostById({ id, limit = 1 }) {
      const params = { breed_ids: id, limit };
      const url = getFetchUrl({ path: 'images/search', params });
      const { data, isFetching, error } = useFetch(url);

      this.breedPost = { data, isFetching, error };
    },
  },

  getters: {
    getBreedPostBody: (state) => {
      const [body] = state.breedPost.data[0]?.breeds;
      return body;
    },
    getBreedPostOptions() {
      return [
        {
          label: 'Origin',
          value: this.getBreedPostBody.origin,
        },
        {
          label: 'Temperament',
          value: this.getBreedPostBody.temperament,
        },
        {
          label: 'Weight',
          value: `imperial: ${this.getBreedPostBody.weight.imperial} | metric: ${this.getBreedPostBody.weight.metric}`,
        },
        {
          label: 'Life span',
          value: this.getBreedPostBody.life_span,
        },
        {
          label: 'Adaptability',
          value: this.getBreedPostBody.adaptability,
        },
        {
          label: 'Affection level',
          value: this.getBreedPostBody.affection_level,
        },
        {
          label: 'Child friendly',
          value: this.getBreedPostBody.child_friendly,
        },
        {
          label: 'Dog friendly',
          value: this.getBreedPostBody.dog_friendly,
        },
        {
          label: 'Stranger friendly',
          value: this.getBreedPostBody.stranger_friendly,
        },
        {
          label: 'Energy level',
          value: this.getBreedPostBody.energy_level,
        },
        {
          label: 'Experimental',
          value: this.getBreedPostBody.experimental,
        },
        {
          label: 'Grooming',
          value: this.getBreedPostBody.grooming,
        },
        {
          label: 'Hairless',
          value: this.getBreedPostBody.hairless,
        },
        {
          label: 'Health issues',
          value: this.getBreedPostBody.health_issues,
        },
        {
          label: 'Hypoallergenic',
          value: this.getBreedPostBody.hypoallergenic,
        },

        {
          label: 'Indoor',
          value: this.getBreedPostBody.indoor,
        },
        {
          label: 'Intelligence',
          value: this.getBreedPostBody.intelligence,
        },

        {
          label: 'Natural',
          value: this.getBreedPostBody.natural,
        },

        {
          label: 'Rare',
          value: this.getBreedPostBody.rare,
        },
        {
          label: 'Rex',
          value: this.getBreedPostBody.rex,
        },
        {
          label: 'Shedding level',
          value: this.getBreedPostBody.shedding_level,
        },
        {
          label: 'Short legs',
          value: this.getBreedPostBody.short_legs,
        },
        {
          label: 'Social needs',
          value: this.getBreedPostBody.social_needs,
        },
        {
          label: 'Suppressed tail',
          value: this.getBreedPostBody.suppressed_tail,
        },

        {
          label: 'Vocalisation',
          value: this.getBreedPostBody.vocalisation,
        },
      ];
    },
  },
});
