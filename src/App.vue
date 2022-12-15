<template>
  <HeaderOne/>
  <FootPage/>
  <RouterView name="aside"/>
  <RouterView/>
</template>
<script>
import FootPage from './components/home/FootPage.vue';
import HeaderOne from './components/home/HeaderOne.vue';
import { RouterView } from 'vue-router'
export default {
name:"App",
components:{
    HeaderOne,
    FootPage
}    
}
</script>
<style lang="">
    @import './assets/main.css';
</style>