<script setup>
import HeaderOne from "./components/home/HeaderOne.vue";
import { onBeforeMount, reactive } from "vue";
import Card from "./components/home/Card.vue";

let heroes = reactive([]);

const getAllSuperHeroes = async () => {
  try {
    const response = await fetch(
      "https://akabab.github.io/superhero-api/api/all.json"
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
      :img="heroe.images.sm"
      :name="heroe.name"
      :alignment="heroe.biography.alignment"
      :power="heroe.powerstats.power"
    />
  </main>
</template>
<style lang="scss" scoped>
body {
  background-color: #d3c7c7;
  display: flex;
  justify-content: center;
  align-items: center;
}

main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 2em auto;
}
</style>
