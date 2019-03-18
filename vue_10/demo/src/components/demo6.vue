<template>
	<div>
		<input type="text" v-model="sreachKey">
		<input type="button" value="搜索" @click="sreach">
		<ul>
			<li v-for="item,index in slist">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	let list = ["1","2","3","4"];
	let slist = ["1","2","3","4"];
	export default {
		data(){
			return {
				sreachKey : "",
				list,
				slist,
			}
		},
		methods: {
			sreach(){
				this.slist = this.list.filter(item=>{
					if(item.includes(this.sreachKey)){
						return item
					}
				})
			}
		}
	}
</script>

<style>
</style>
