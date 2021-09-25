<template>
	<div>
		<van-nav-bar title="付款成功" left-text="返回" left-arrow @click-left="onClickLeft" />
		<div style="margin: 10px auto;">
			<div style="text-align: center;">
				<van-image width="220" height="220"
					src="https://img0.baidu.com/it/u=1733329799,3229859087&fm=26&fmt=auto&gp=0.jpg" />
			</div>
			<div style="text-align: center;">
				购买成功
			</div>
		</div>
	</div>
</template>

<script>
	import {
		addSpend_goods
	} from '../../comoon/api/spend.js'
	import {
		getCar,
		delCar
	} from '../../comoon/api/car.js'
	export default {
		data() {
			return {
				name:'',
				id:5
			}
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.id = this.$route.query.id;
			this.getcar();
		},
		methods: {
			getcar() {
				getCar(this.name).then(res=>{
					for(let i =0;i<res.length;i++){
						if(this.id == res[i].id){
							delCar(this.id)
						}
						else{
							console.log("购物车没有我，哈哈哈");
						}
					}
				},res=>{
					console.log("error");
				})
			},
			onClickLeft() {
				this.$router.push('/index');
			},
		},
	};
</script>

<style>
</style>
