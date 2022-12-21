<script setup>
import { useHeroeStore } from "@/stores/store.js";

const heroesStore = useHeroeStore();

</script>
<template>
  <div class="favorites__list-container">
    <h2 class="list__title">Add your favorite Super Hero</h2>
    <div class="list__container">
     
      <ul>
        <li v-for="heroe in heroesStore.heroes.slice(148, 168)"  :key="heroe.id" :heroe="heroe">
        {{ heroe.name }}
        <i class="fa-regular fa-heart icon-heart " ></i>
        </li>
        
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
 .favorites__list-container {
  position: absolute;
  right: 1em;
  top: 8.8em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 15%;
    height: 35%;
     padding: 0.5em;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(182, 8, 8, 1) 99%
    );
    background-color: rgb(0, 0, 0);
    flex-direction: column;
    border-radius: 10px;
  }
    .list__title {
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 0.5em ;
      color: white;
      text-align: center;
    
    }
    .list__container {
      height: 50%;
      width: 90%;
      
      
      
    }
    
    ul {
      display: flex;
      flex-direction: column;
      background-color:gainsboro ;
      height: 100%;
      border-radius: 10px;
      overflow-y:scroll ;
      
     li {
         width: 100%;
         padding-top: 0.5em;
         display: flex;
         font-family: Arial, Helvetica, sans-serif;
         border: 1px solid grey; 
         padding: .4em;
         justify-content: space-between;
         &:hover{
          background-color: grey;
         
         }

    }

    .icon-heart{
      margin-right: .2em;
      cursor: pointer;
      &:hover{
       color:  red;

      }
    }

  }
  ul::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ul::-webkit-scrollbar:vertical {
    width: 10px;
  }

  ul::-webkit-scrollbar-button:increment,
 .contenedor{ 
    display: none;
  }

 ul::-webkit-scrollbar:horizontal {
    height: 10px;
  }
  ul::-webkit-scrollbar-thumb {
    background-color: rgba(132, 21, 53, 1);
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  ul::-webkit-scrollbar-track {
    border-radius: 10px;
    }



</style>
  
  
  



