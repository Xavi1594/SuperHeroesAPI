<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView class="router-link-active" />
</template>

<style lang="scss">
body {
  background-image: url(./assets/FondoHome3.png);
  background-size: 120%;
  background-position: 48% 10%;
}

@media (max-width: 500px) {
  main {
    width: 90%;
  }

  body {
    background-size: 140%;
    background-position: 48% 10%;
  }
}
@media (max-width: 1500px) {
  main {
    width: 50%;
  }
}
</style>


