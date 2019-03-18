<template>
	<div>
		<input type="text" v-model="search">
		<ul>
			<li v-for="i in computedSearch">{{i}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				search : "",
				list : ["aa","bb","cc"],
			}
		},
		computed:{
			computedSearch(){
				return this.list.filter(item=>{
					return item.indexOf(this.search) !=-1
				})
			}
		}
	}
</script>

<style>
</style>
