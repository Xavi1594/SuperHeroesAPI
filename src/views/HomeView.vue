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

@media (max-width: 1370px) {
  main {
    width: 80%;
  }
}
</style>
