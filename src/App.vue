<script setup>
import HeaderOne from "./components/home/HeaderOne.vue";
import { onBeforeMount, reactive } from "vue";
import Card from "./components/home/Card.vue";
import FootPage from "./components/home/FootPage.vue";

let heroes = reactive([]);

const getAllSuperHeroes = async () => {
  try {
    const response = await fetch(
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
    );
    const data = await response.json();
    heroes = data.slice(0, 20);
  } catch (error) {
    throw new Error(error.message);
  }
};

onBeforeMount(() => {
  getAllSuperHeroes();
});
</script>

<template>
  <HeaderOne />
  <main>
    <Card
      v-for="heroe in heroes"
      :key="heroe.id"
      :id="heroe.id"
      :img="heroe.images.md"
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
