<template>
	<div id="app">
		<p>
			<input v-model="user.username" type="text" name="name" value="">
		</p>
		<p>
			<input v-model="user.userpass" type="text" name="name" value="">
		</p>
		<p>
			<button @click="submit">提交</button>
		</p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				user : {
               username : "",
               userpass : ""
            }
			}
		},
      methods:{
         submit : function () {
            this.$http.post("https://fir-9f54b.firebaseio.com/user.json",this.user).then(function(response){
               console.log(response)
            },function(error){
               console.log(error);
            })
         }
      }
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
