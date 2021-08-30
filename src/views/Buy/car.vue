<template>
	<div>
		<template v-for="(item,index) in carList">
					<van-card
		  num="2"
		  price="2.00"
		  desc="描述信息"
		  :title="item.name"
		  :thumb="item.image_src"
		/>
		</template>

	</div>
</template>

<script>
	import {
		getCar
	} from '../../comoon/api/car.js'
	export default {
		data() {
			return {
				carList:[]
			};
		},
		mounted() {
			this.getdata();
		},
		methods: {
		
			getdata() {
				getCar().then(response => {
					this.carList = response;
				}, response => {
					console.log("error");
				})
			},
		
		}
	};
</script>

<style>
</style>
