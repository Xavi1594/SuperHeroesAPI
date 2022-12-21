<template>
  <div class="card__container">
    <figure class="card__img">
      <img :src="heroe.images.lg" alt="heroe" />
      <i
        class="fa-regular fa-heart icon-heart"
        v-on:click="sendHeroeFavorite()"
      ></i>
    </figure>
    <div class="card__properties">
      <p class="properties__name">{{ heroe.name }}</p>
      <div class="properties__container">
        <p class="properties__property properties__property-power">
          <i class="fa-solid fa-hand-back-fist"></i>
          {{ heroe.powerstats.power }}
        </p>
        <p class="properties__property properties__property-speed">
          <i class="fa-solid fa-person-running"></i>
          {{ heroe.powerstats.speed }}
        </p>
        <p class="properties__property properties__property-strength">
          <i class="fa-solid fa-shield"></i>
          {{ heroe.powerstats.strength }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHeroeFavoriteStore } from "@/stores/storeFavorites";
import { ref } from "vue";

const favoriteStore = useHeroeFavoriteStore();

const props = defineProps({
  heroe: {
    type: Object,
  },
});

const heroe1 = ref({});

const sendHeroeFavorite = () => {
  favoriteStore.showHeroes(props.heroe);
  alert("Se ha añadido un nuevo heroe a tu lista de favoritos");
};
</script>

<style lang="scss" scoped>
.card__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20em;

  .card__img {
    width: 75%;
    height: 70%;

    img {
      border-radius: 10px;
      height: 100%;
    }
  }

  .card__properties {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 1rem;
    font-size: 1em;
    .properties__name {
      font-weight: bold;
      color: black;
    }
  }

  .properties__container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 1rem;
    font-weight: bold;
    color: black;

    .properties__property {
      padding: 0.2em 0.5em;
      border-radius: 5px;
    }
    .properties__property-power {
      background: orange;
    }
    .properties__property-speed {
      background: grey;
    }

    .properties__property-strength {
      background: rgba(255, 0, 0, 0.719);
    }
  }
}
.icon-heart {
  font-size: 2rem;
  color: white;
  position: relative;
  left: 36%;
  bottom: 95%;
  cursor: pointer;
  &:hover {
    color: red;
  }
}

@media (max-width: 1500px) {
  .card__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20em;
    // .card__img {
    //   width: 15%;
    //   height: 60%;

    //   img {
    //     border-radius: 10px;
    //     height: 100%;
    //   }
    // }
  }
}
</style>
