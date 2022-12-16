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
          {{ power }}
        </p>
        <p class="properties__property properties__property-aligment">
          {{ alignment }}
        </p>
      </div>
    </div>
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
  alignment: {
    type: String,
    // required: true,
  },
});
</script>
<style lang="scss">
.card__container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16em;
  height: 22em;
  justify-self: center;

  .card__img {
    width: 70%;
    img {
      border-radius: 15px;
      height: 100%;
    }
  }

  .card__properties {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0.5em;
    margin-top: 1rem;
    .properties__name {
      font-weight: bold;
    }
  }

  .properties__container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 1rem;

    .properties__property {
      padding: 0.2em 0.5em;
      border-radius: 5px;
    }
    .properties__property-power {
      background: orange;
    }
    .properties__property-aligment {
      background: grey;
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
