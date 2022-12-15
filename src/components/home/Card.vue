<template>
    <div class="card__container">
        <figure class="card__img">

            <!-- <img :src="getImage" :alt="card"> -->
            <i class="fa-regular fa-heart icon-heart"></i>

        </figure>
        <div class="card__properties">
            <p class="properties__name"> name Nombre</p>
            <div class="properties__container">
                <p>race</p>
                <p>power</p>
                <p>alinement</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.card__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12em;
    height: 18em;
    
    justify-self:center ;

    .card__img {
        width: 100%;
        height: 13em;
         background-color: red;
    }

    .card__properties {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
         height: 5em;
         .properties__name {
            font-weight: bold;
            
    }}

    .properties__container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;
    }
}
.icon-heart {
    font-size: 2rem;
    color: black;
    position: relative;
    left: 36%;
    top: 5%;
    cursor: pointer;
    &:hover {
        color: white;
    }
}
</style>

  