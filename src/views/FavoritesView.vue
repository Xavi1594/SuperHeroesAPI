  <script setup> 
  import HeaderPage from "../components/HeaderPage.vue"
  import FooterPage from "../components/FooterPage.vue"
import ListHeroes   from "../components/favorites/ListHeroes.vue";
</script>
<template>
  <HeaderPage />
  <ListHeroes />
  <FooterPage />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>