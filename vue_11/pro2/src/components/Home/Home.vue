<template>
   <div>
      <app-swiper></app-swiper>
      <app-infobtn></app-infobtn>
      <!-- <button @click="post">获取后台提供的数据</button> -->
   </div>
</template>

<script>
   import Swiper from '../common/Swiper.vue'
   import Infobtn from '../common/Infobtn.vue'
   export default {
      // data : {
      //    post : function(){
      //       this.$axios({
      //          method : "post",
      //          url : "http://234j08j718.iok.la/proxy_manage/app/getStudentById3",
      //          data : this.$qs.stringify(data)
      //       }).then(response => {
      //          console.log(response);
      //       },error => {
      //          console.log("错误信息"+error.message);
      //       })
      //    }
      // },
      components: {
         appSwiper: Swiper,
         appInfobtn: Infobtn
      }
   }
</script>

<style lang="css" scoped>
   div button{
      display: block;
      width: 100px;
      height: 50px;
      font-size: 20px;
   }
</style>
