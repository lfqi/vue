<template>
	<div class="Demo">
		<button @click=" del='appdemo1'">demo1</button>
		<button @click=" del2='appdemo2' ">demo2</button>
		<button @click=" del3='appdemo3' ">demo3</button>
		<button @click=" del3='appdemo4' ">demo4</button>
		<button @click=" del3='appdemo5' ">demo5</button>
		<button @click=" del3='appdemo6' ">demo6</button>
		<button @click=" del3='appdemo7' ">demo7</button>
		<keep-alive>
			<component :is="del3"></component>
		</keep-alive>
	</div>
</template>

<script>

import demo1 from './components/demo1.vue'
import demo2 from './components/demo2.vue'
import demo3 from './components/demo3.vue'
import demo4 from './components/demo4.vue'
import demo5 from './components/demo5.vue'
import demo6 from './components/demo6.vue'
import demo7 from './components/demo7.vue'

export default {
	components : {
		appdemo1 : demo1,
		appdemo2 : demo2,
		appdemo3 : demo3,
		appdemo4 : demo4,
		appdemo5 : demo5,
		appdemo6 : demo6,
		appdemo7 : demo7
	},
	data : function() {
		return {
			del3 : "appdemo3"
		}
	},
	methods : {

	}
}
</script>

<style scoped>
	.Demo{
		width: 960px;
		height: 60px;
		border: 2px solid purple;
		margin: auto;
	}
	button{
		margin: 20px;
		height: 30px;
	}
</style>
