<template>
   <div id="app">
      <app-header :flag="flag" :title="title"></app-header>
      
      <router-view></router-view>
      
      <app-tabbar :title="title" @changeTitle="title=$event"></app-tabbar>
   </div>
</template>

<script>
   import Tabbar from './components/common/Tabbar.vue'
   import Header from './components/common/Header.vue'

   export default {
      name: 'App',
      components: {
         appTabbar: Tabbar,
         appHeader: Header
      },
      data: function() {
         return {
            title: "首页"
         }
      },
      computed: {
         flag: function() {
            return this.$store.getters.changeFlag;
         }
      }
   }
</script>

<style>
   * {
      margin: 0;
      padding: 0;
   }
   body{
      padding: 40px 0;
   }
</style>
