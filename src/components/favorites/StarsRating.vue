<template>
<h1>Estrellas</h1>
<div class="rating">
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
         <i class="rating__star far fa-star"></i>
</div>

</template>

<script setup>

const ratingStars = [(/.rating__star/)];

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;

stars.map((star) => {
      star.onclick = () => {
         i = stars.indexOf(star);

         if (star.className===starClassInactive) {        
            for (i; i >= 0; --i) stars[i].className = starClassActive;
         } else {
            for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
         }
      };
   });
   
}

executeRating(ratingStars);




</script>

<style>

.rating {
   width: 180px;
}

.rating__star {
   cursor: pointer;
   color: #dabd18b2;
}
</style>
