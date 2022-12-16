<template>
  <div class="card__container">
    <figure class="card__img">
      <img :src="img" alt="heroe" />
      <i class="fa-regular fa-heart icon-heart"></i>
    </figure>
    <div class="card__properties">
      <p class="properties__name">{{ name }}</p>
      <div class="properties__container">
        <p class="properties__property properties__property-power">
          <i class="fa-solid fa-hand-back-fist"></i> {{ power }}
        </p>
        <p class="properties__property properties__property-speed">
          <i class="fa-solid fa-person-running"></i> {{ speed }}
        </p>
        <p class="properties__property properties__property-strength">
          <i class="fa-solid fa-shield"></i>
          {{ strength }}
        </p>
      </div>
    </div>
    <!-- -->
  </div>
</template>
<script setup>
const props = defineProps({
  id: {
    type: Number,
    // required: true,
  },
  img: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  race: {
    type: String,
    // required: true,
  },
  power: {
    type: Number,
    // required: true,
  },
  speed: {
    type: Number,
    // required: true,
  },
  strength: {
    type: Number,
    // required: true,
  },
});
</script>
<style lang="scss">
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
    }
  }

  .properties__container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 1rem;
    font-weight: bold;

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
</style>
