  <script setup> 
  import HeaderPage from "../components/HeaderPage.vue"
  import FooterPage from "../components/FooterPage.vue"
</script>
<template>
  <HeaderPage />
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