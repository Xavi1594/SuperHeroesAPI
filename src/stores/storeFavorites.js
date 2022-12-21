import { defineStore } from "pinia";

export const useHeroeFavoriteStore = defineStore({
  id: "favHeroes",
  state: () => ({
    heroesFavorites: [],
  }),
  actions: {
      showHeroes(heroe) {
        if(this.heroesFavorites.indexOf(heroe) === -1){
            this.heroesFavorites.push(heroe)
        }

    },
  },
});