<template>
  <HeaderOne/> 
  <main>
  <Card/> 
  <Card/><Card/> <Card/> <Card/> <Card/> <Card/> <Card/> 
</main>
</template>
<script>
import Card from './components/home/Card.vue';
import HeaderOne from './components/home/HeaderOne.vue';
export default {
name:"App",
components:{
    HeaderOne,
    Card
}    
}
</script>
<style lang="scss">
main {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  // width: 90%;
 text-align: center;
 justify-content: center;
  align-items: center;
  gap: 1rem;
}

</style>