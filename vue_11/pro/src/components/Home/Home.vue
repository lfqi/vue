<template lang="html">
   <div>
      <!-- 我是首页 -->
      <mt-swipe :auto="4000">
         <mt-swipe-item v-for="item in 5">
            {{item}}
         </mt-swipe-item>
         <!-- <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item> -->
      </mt-swipe>
      
      <div class="grid">
         <ul>
            <li>
               <a href="" class="">
                  <span class="cms-news"></span>
                  <div>新闻资讯</div>
               </a>
            </li>
            <li>
               <a href="" class="">
                  <span class="cms-photo"></span>
                  <div>图文分享</div>
               </a>
            </li>
            <li>
               <a href="" class="">
                  <span class="cms-spzs"></span>
                  <div>商品展示</div>
               </a>
            </li>
            <li>
               <a href="" class="">
                  <span class="cms-lyfk"></span>
                  <div>留言反馈</div>
               </a>
            </li>
            <li>
               <a href="" class="">
                  <span class="cms-sszx"></span>
                  <div>搜索咨询</div>
               </a>
            </li>
            <li>
               <a href="" class="">
                  <span class="cms-lxwm"></span>
                  <div>联系我们</div>
               </a>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            msg: 'Welcome to Your Vue.js App'
         }
      }
   }
</script>
<style scoped>
   .mint-swipe {
      height: 200px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
   }

   img {
      width: 100%;
   }
   .grid li{
      list-style: none;
      width: 33.3%;
      float: left;
      text-align: center;
      height: 100px;
      padding-top: 10px;
      font-size: 20px;
      font-weight: bold;
   }
   .grid ul{
      margin: 0;
      padding: 0;
   }
   .grid ul li a{
      color: #000000;
      text-decoration: none;
   }
   .cms-news{
      background-image: url(../../assets/xwzx.png);
      background-repeat: round;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin: 10px;
   }
   .cms-photo{
      background-image: url(../../assets/twfx.png);
      background-repeat: round;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin: 10px;
   }
   .cms-spzs{
      background-image: url(../../assets/spzs.png);
      background-repeat: round;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin: 10px;
   }
   .cms-lyfk{
      background-image: url(../../assets/lyfk.png);
      background-repeat: round;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin: 10px;
   }
   .cms-sszx{
      background-image: url(../../assets/sszx.png);
      background-repeat: round;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin: 10px;
   }
   .cms-lxwm{
      background-image: url(../../assets/lxwm.png);
      background-repeat: round;
      width: 50px;
      height: 50px;
      display: inline-block;
      margin: 10px;
   }
</style>
