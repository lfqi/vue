<template>
	<div class="demo2-2">
		<input type="button" v-for="item,i in tabData" :value="item.title" :class="{red:i===index}" @click="tabhandle(i)">
		<ul v-for="item,j in tabData" v-show="index===j">
			<li v-for="option in item.list">{{option.subtitle}}</li>
		</ul>
	</div>
</template>

<script>
	let tabData = [{
		title : "新闻",
		list : [{subtitle : "今天星期五"},{subtitle : "今天星期五"},{subtitle : "今天星期五"}]},{
		title : "天气",
		list : [{subtitle : "晴转阴，有点微风"},{subtitle : "晴转阴，有点微风"},{subtitle : "晴转阴，有点微风"}]},{
		title : "汽车",
		list : [{subtitle : "广州车展，敬请期待！"},{subtitle : "广州车展，敬请期待！"},{subtitle : "广州车展，敬请期待！"}]},
		]
	export default {
		data(){
			return {
				tabData,
				index:0
			}
		},
		methods : {
			tabhandle : function(i) {
				this.index = i;
			}
		}
	}
</script>

<style>
	.demo2-2{
		margin-top: 20px
	}
	ul{
		list-style: none;
	}
	.red {
		background: red;
	}
</style>
