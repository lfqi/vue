<template>
	<div>
      <h1>这是我的学生信息页面</h1>
   </div>
</template>

<script>
   export default {
      name : "Mystudent",
      created(){
         this.$store.commit('cFlag')
      }
   }
</script>

<style>
</style>
