<template lang="html">
   <div>
      <mt-header title="首页"></mt-header>

      <router-view />
      
      <mt-tabbar v-model="selected">
         <mt-tab-item id="home">
            <img slot="icon" src="./assets/home page.png">
            首页
         </mt-tab-item>
         <mt-tab-item id="Member">
            <img slot="icon" src="./assets/Member.png">
            会员
         </mt-tab-item>
         <mt-tab-item id="shopcart">
            <img slot="icon" src="./assets/Shopping Cart.png">
            购物车
         </mt-tab-item>
         <mt-tab-item id="search">
            <img slot="icon" src="./assets/lookup.png">
            查询
         </mt-tab-item>
      </mt-tabbar>
   </div>
</template>

<script>
   export default {
      data: function() {
         return {
            selected: ''
         }
      },
      watch: {
         selected(newV, oleV) {
            this.$router.push({
               name: newV
            })
         }
      }
   }
</script>

<style lang="css" scoped>

</style>
