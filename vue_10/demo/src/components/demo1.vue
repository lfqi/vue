<template>
	<div class="demo1-1">
		<button @click="start()">启动跑马灯效果</button>
		<button @click="stop()">停止跑马灯效果</button>
		<p>{{msg}}</p>
	</div>
</template>

<script>
export default {
	data : function(){
		return {
			time : null,
			msg : "跑马灯效果！！！"
		}
	},
	methods : {
		start : function(){
			if(this.time==null){
				this.time = setInterval(()=>{
					let start = this.msg.slice(0,1);
					let stop = this.msg.slice(1,this.msg.length+1);
					this.msg = stop + start;
				},100);
			}
		},
		stop : function(){
			if(this.time){
				clearInterval(this.time);
				this.time = null;
			}
		}
	}
};

</script>

<style>
	.demo1-1{
		margin: 0 auto;
		width: 960px;
	}
	p{
		margin-left:20px;
	}
</style>
