<template>
  <HeaderOne/> 
  <main>
    <div v-for="heroe in heroes">
      <Card 
      :name="heroe[id].name"
      :race="heroe[id].race"
      :power="heroe[id].power"
      :alignment="heroe[id].alignment"
      /> 
    </div>
  <!-- <Card/><Card/> <Card/> <Card/> <Card/> <Card/> <Card/>  -->
</main>
</template>
<script setup>
import { onBeforeMount } from 'vue';
import Card from './components/home/Card.vue';
import HeaderOne from './components/home/HeaderOne.vue';

let heroes = [];


onBeforeMount(()=>{
  getAllSuperHeroes();
})

const getAllSuperHeroes = () => {
  fetch("https://akabab.github.io/superhero-api/api/all.json")
  .then(res => res.json())
  .then(data => heroes = data)


}
getAllSuperHeroes()
</script>
<style lang="scss">
  body {
background-color:#d9d9d9 ;
  }
   
main {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  width: 90%;
 text-align: center;
 justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
}

</style>