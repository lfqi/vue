<template>
  <div id="app">
    <button v-bg:click="fn1">fn1</button>
    <button v-bg:click="fn2">fn2</button>
  </div>
</template>

<script>
export default {
   components : {
      data : function(){
         fn1 : function(){
            alert("123")
         },
         fn2 : function(){
            alert("456")
         }
      }
   }
}
</script>

<style>

</style>
