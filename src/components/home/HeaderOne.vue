<template>
  <header class="header">
    <div class="header__container-title">
      <h1 class="header__title">SUPER HEROES UNIVERSE</h1>
    </div>
    <nav class="header__nav">
      <a class="nav__link home" href="">Home</a>
      <a class="nav__link" href="">Favorites</a>
    </nav>
  </header>
</template>

<style lang="scss">
@font-face {
  font-family: "marvel";
  src: url("../../assets/fonts/Marvel-Regular.ttf");
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;

  .header__container-title {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(182, 8, 8, 1) 99%
    );
    background-color: rgb(0, 0, 0);
    font-family: "marvel";
    font-size: 5rem;
    color: white;
    letter-spacing: 2px;
    width: 100%;
    .header__title {
      margin-top: 1rem;
    }
  }

  .header__nav {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: start;
    width: 12rem;
    padding: 1rem 0;

    .nav__link {
      color: gray;
    }
    .home {
      font-weight: bold;
      color: black;
    }
  }
}
</style>
