<template>
	<div class="demo3-3">
		<nav class="choose">
			你选择的是:
			<mark v-for="item,key in choose">
				{{item}}
				<a href="javascript:0" @click="removeHandle(key)">X</a>
			</mark>
		</nav>
		<ul class="type">
			<li v-for="i,line in ldata">{{i.title}}
				<a href="javascript:0" v-for="item,index in i.list"
									   @click="addChooseHandle(line,index,item)"
									   :class="{active:i.index===index}">
									   {{item}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	let ldata = [
		{title:"品牌:",
		list :["苹果","小米","华为","三星","oppo","vivo","魅族","锤子","中兴"]},
		{title:"尺寸:",
		list :["3.0英寸以下","3.0-4.0英寸","4.0-5.0英寸","5.0-6.0英寸","6.0-7.0英寸","7.0-8.0英寸"]},
		{title:"系统:",
		list :["ios","Android","WindowsPhone","其他"]},
		{title:"网络:",
		list :["全网通","移动4G","联通4G","电信4G"]}
	]
	ldata.forEach(item => item.index = -1);
	export default {
		data(){
			return {
				listIndex : 0,
				ldata ,
				choose:{}
			}
		},
		methods : {
			addChooseHandle(line,index,item){
				this.$set(this.choose,line,item);
				// 在数据中增加了个index记录选中样式
				this.ldata[line].index = index;
			},
			removeHandle(key){
				this.$delete(this.choose,key); // 删除对应key
				this.ldata[key].index=-1;      // 将标记class样式数据调回初始
			}
		}
	}
</script>


<style>
	.demo3-3{
		width: 710px;
		height: 294px;
		margin: 50px auto;
		background: #EBCCCC;
	}
	.choose{
		height: 50px;
		background: rgba(224,241,239,1);
		border: 1px solid #e4e5e6;
		font-size: 18px;
		padding: 0 10px;
		line-height: 50px;
	}
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		background: #ebf7f6;
	}
	.type {
		height: 210px;
		padding: 17px 0 16px 28px;
	}
	.type li {
		height: 44px;
		color: #8a8a8a;
		line-height: 44px;
	}
	.type a {
		margin: 0 10px 0 8px;
		color: #000;
		text-decoration: none !important;
	}
	.active {
		background: rgb(40, 165, 196);
	}


</style>
