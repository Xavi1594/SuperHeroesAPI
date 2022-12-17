<script setup>
import { onBeforeMount, reactive } from "vue";
import { useHeroeStore } from "./stores/store";

import HeaderOne from "./components/home/HeaderOne.vue";
import CardItem from "./components/home/CardItem.vue";
import FootPage from "./components/home/FootPage.vue";

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
  <HeaderOne />

  <main>
    <CardItem
      v-for="heroe in heroesStore.heroes.slice(148, 168)"
      :key="heroe.id"
      :id="heroe.id"
      :img="heroe.images.lg"
      :name="heroe.name"
      :speed="heroe.powerstats.speed"
      :power="heroe.powerstats.power"
      :strength="heroe.powerstats.strength"
    />
  </main>
  <FootPage />
</template>

<style lang="scss">
body {
  background-image: url(./assets/FondoHome3.png);
}

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
</style>
