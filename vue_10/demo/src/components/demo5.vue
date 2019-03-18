<template>
	<div class="demo5-5">
		<ul>
			<li v-for="item,index in list" @click="removeHandel(index)">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				list : ["1","2","3","4"]
			}
		},
		methods : {
			removeHandel(index){
				this.list.splice(index,1)
			}
		}
	}
</script>

<style>
	.demo5-5{
		width: 710px;
	}
	li{
		text-align: center;
		list-style: none;
		background: white;
	}
</style>
