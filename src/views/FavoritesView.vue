<script setup>
import HeaderPage from "../components/HeaderPage.vue";
import FooterPage from "../components/FooterPage.vue";
import CardItem from "../components/CardItem.vue";
import ListheroesVue from "../components/favorites/Listheroes.vue";
import { useHeroeFavoriteStore } from "@/stores/storeFavorites";
import StarsRating from "../components/favorites/StarsRating.vue";

const favoriteStore = useHeroeFavoriteStore();
</script>
<template>
  <HeaderPage />

  <main>
    <div v-for="heroe in favoriteStore.heroesFavorites" :key="heroe.id">
      <StarsRating />
      <CardItem :heroe="heroe" />
    </div>
    <div v-if="favoriteStore.heroesFavorites.length > 0"></div>
    <div v-else>
      <p class="card__p">No has añadido ningún heroe a favoritos</p>
    </div>
    <ListheroesVue />
  </main>
  <div class="containerFooter">
    <FooterPage />
  </div>
</template>

<style lang="scss" scoped>
// main{
//   grid-template-columns:  repetat;
// }
@media (max-width: 1450px) {
  main {
    grid-template-columns: repeat(3, 1fr);
  }

  .containerFooter {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}

@media (max-width: 780px) {
  main {
    grid-template-columns: 1fr;
    justify-items: center;
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

.footer {
  position: fixed;
  bottom: 0;
}
</style>
