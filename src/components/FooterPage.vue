<template>
  <footer class="footer">
    <div class="footer__container-title">
      <h2 class="footer__title">SUPER HEROES UNIVERSE</h2>
    </div>
    <div class="footer__container-social-media">
      <i class="fa-brands fa-instagram icon-media"></i>
      <i class="fa-brands fa-twitter icon-media"></i>
      <i class="fa-brands fa-facebook icon-media"></i>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(182, 8, 8, 1) 99% 
  );
  background-color: rgb(0, 0, 0);
  padding: 1rem;
  width: 100%;

    /*position: relative;
    bottom: 0;
    left: 0;*/

  .footer__title {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 2rem;
  }

  .footer__container-social-media {
    .icon-media {
      font-size: 1.7rem;
      color: white;
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}

@media (max-width: 400px) {
  .footer {
    flex-direction: column;

    .footer__title {
      font-size: 1em;
      margin-bottom: 0.4em;
    }
  }
}
</style>
