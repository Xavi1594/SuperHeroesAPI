<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import CardItem from "../components/CardItem.vue";
import { useHeroeFavoriteStore } from "@/stores/storeFavorites";

const favoriteStore = useHeroeFavoriteStore();


</script>
<template>
  <HeaderPage />

<main>
  <CardItem
    v-for="heroe in favoriteStore.heroesFavorites"
    :key="heroe.id"
    :heroe="heroe"
  />
</main>

  <FooterPage />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  main {
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  width: 60%;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1em;
}
}
</style>
