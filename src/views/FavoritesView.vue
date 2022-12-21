<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import CardItem from "../components/CardItem.vue";
import ListheroesVue from "../components/favorites/Listheroes.vue";
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
    <ListheroesVue />
  </main>

  <FooterPage />
</template>

<style></style>
