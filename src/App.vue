<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
body {
  background-image: url(./assets/FondoHome3.png);
}

@media (min-width: 1024px) {
  body {
    background-image: url(./assets/FondoHome3.png);
    background-size: 140%;
    background-position: 48% 10%;
  }
}
</style>
