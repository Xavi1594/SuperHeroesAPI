import { defineStore } from "pinia";

export default heroeStore = defineStore({
  id: "heroes",
  state: () => ({
    heroes: [],
  }),
  actions: {
    async fetchHeroes() {
      await fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then((response) => response.json())
        .then((data) => {
          this.heroes = data;
        })
        .catch((err) => console.log(err));
    },
  },
});
