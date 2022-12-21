<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import CardItem from "../components/CardItem.vue";

import { onBeforeMount } from "vue";
import { useHeroeStore } from "../stores/store.js";

const heroesStore = useHeroeStore();

onBeforeMount(() => {
  getHeroes();
});

// METHODS
const getHeroes = async () => {
  await heroesStore.fetchHeroes();
};
</script>

<template>
  <HeaderPage />
  <main>
    <CardItem
      v-for="heroe in heroesStore.heroes.slice(148, 168)"
      :key="heroe.id"
      :heroe="heroe"
    />
  </main>

  <FooterPage />
</template>

<style lang="scss">
<<<<<<< HEAD
=======


// body  {
//   display: flex;
// }

>>>>>>> 1b37528ddf1f0fd76d305c9f8f66c2770900e234
main {
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 60%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1em;
}

@media (max-width: 1500px) {
  body {
    background-image: url(@/assets/FondoHome3.png);
    background-size: 140%;
    background-position: 48% 10%;
  }
}

@media (max-width: 1200px) {
  main {
    width: 80%;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 400px) {
  main {
    width: 80%;
    grid-template-columns: 1fr;
  }
}
</style>
