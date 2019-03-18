<template>
	<div>
		<div>
			<ul>
				<li>
					<div>
						<input type="checkbox" v-model="isCheckedAll">
						<span>歌名</span>
						<span>歌手</span>
						<span>专辑</span>
					</div>
				</li>
			</ul>
			<ul>
				<li v-for="item in songList">
					<div>
						<input type="checkbox" v-model="item.checked">
						<span>{{item.song}}</span>
						<span>{{item.name}}</span>
						<span>{{item.album}}</span>
					</div>
				</li>
			</ul>
			<div>
				<span>
					<span>统计：</span>
				</span>
			</div>
		</div>
		{{isCheckedAll}}
	</div>
</template>
<script>
	let data = [
	   {
	      id:Date.now()+Math.random(),
	      name: '邓紫棋',
	      song: '泡沫',
	      checked: true,
	      album: 10
	   },
	   {
	      id:Date.now()+Math.random(),
	      name: '王杰',
	      song: '泡沫',
	      checked: true,
	      album: 10
	   },
	   {
	      id:Date.now()+Math.random(),
	      name: '邓紫棋',
	      song: '泡沫123',
	      checked: false,
	      album: 10
	   }
	]
	export default {
		data(){
			return {
				songList : data
			}
		},
		computed : {
			isCheckedAll:{
			   get(){
			      return this.songList.every(function(item){
			         return item.checked
			      });
			   },
			   set(newValue){
			      console.log(newValue);
			      this.songList.forEach(item => item.checked = newValue)
			   }
			}
		}
	}
</script>

<style>
</style>
