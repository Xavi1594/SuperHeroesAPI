<template>
  <div class="favorites__list-container">
    <h2 class="list__title">Add your favorite Super Hero</h2>
    <div class="list__container">
      <ul>
        <li>Paco Perez</li>
        <li>Mariano Rajoy</li>
        <li>Super Lopez</li>
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
      
     li {
         width: 100%;
         padding-top: 0.5em;
         display: flex;
         flex-direction: column;
         font-family: Arial, Helvetica, sans-serif;
     }
    }

</style>
  
  
  



