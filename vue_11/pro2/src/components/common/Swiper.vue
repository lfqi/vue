<template>
	<div>
      <div class="swiper">
         <mt-swipe :show-indicators="false">
           <mt-swipe-item v-for="item in swipers" :key="item.id">
              <img :src="item.img" alt="">
           </mt-swipe-item>
         </mt-swipe>
      </div>
   </div>
</template>

<script>
   export default {
      data : function(){
         return {
            swipers : []
         }
      },
      created() {
         this.$axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(response => {
            console.log(response)
            this.swipers = response.data.message
         },error => {
            console.log("错误信息"+error.message)
         })
      }
   }
</script>

<style>
   .swiper{
      height: 200px;
   }
   .swiper img{
      width: 100%;
      height: 100%;
      display: block;
   }
</style>
