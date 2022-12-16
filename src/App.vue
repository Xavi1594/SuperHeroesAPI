<script setup>
import HeaderOne from "./components/home/HeaderOne.vue";
import { onBeforeMount } from "vue";
import Card from "./components/home/Card.vue";

let heroes = [];

onBeforeMount(() => {
  getAllSuperHeroes();
});

const getAllSuperHeroes = async () => {
  await fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then((res) => res.json())
    .then((data) => (heroes = data.slice(0, 20)));
};
</script>

<template>
  <HeaderOne />
  <main>
    <div v-for="heroe in heroes" :key="heroe.id">
      <Card
        :id="heroe.id"
        :img="heroe.images.sm"
        :name="heroe.name"
        :alignment="heroe.biography.alignment"
        :power="heroe.powerstats.power"
      />
    </div>
  </main>
</template>
<style lang="scss" scoped>
body {
  background-color: #d3c7c7;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 100vw;
  // height: 100vh;
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
