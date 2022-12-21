<template>

  <div class="starsAll">
    <p class="starsContainer">
      <input id="radio1" type="radio" name="stars" value="5"><!--
      --><label for="radio1">★</label><!--
      --><input id="radio2" type="radio" name="stars" value="4"><!--
      --><label for="radio2">★</label><!--
      --><input id="radio3" type="radio" name="stars" value="3"><!--
      --><label for="radio3">★</label><!--
      --><input id="radio4" type="radio" name="stars" value="2"><!--
      --><label for="radio4">★</label><!--
      --><input id="radio5" type="radio" name="stars" value="1"><!--
      --><label for="radio5">★</label>
    </p>
  </div>
  
  </template>
  
  <style lang="scss">
  
  .starsContainer  {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(0deg) rotate(180deg);
  font-size: 2rem;
  }
  
  label {
    color: grey;
  }
  
  label:hover,
  label:hover ~ label {
    color: orange;  
  }
  
  input[type="radio"]:checked ~ label {
    color: orange; 
  }
  
  </style>
  