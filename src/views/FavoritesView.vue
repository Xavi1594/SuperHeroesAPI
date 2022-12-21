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
  <div v-if="favoriteStore.heroesFavorites.length > 0">
    </div>
    <div v-else>
      <p class="card__p">No has añadido ningún heroe a favoritos</p>
    </div>
  <ListheroesVue />
</main>

  <FooterPage />
</template>

<style>
@media (min-width: 1024px) {
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
.card__p {
 position: absolute;
 left: 30%;
  width: 40%;
  padding: 20px;
  text-align: center;
  border: 2px solid black;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
}
.card__p:hover {
  transform: rotate(360deg);
  font-size: larger;
  background-color: yellow;
  color: aqua;
  box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
}


</style>
