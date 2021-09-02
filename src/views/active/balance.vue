<template>
	<div style="background-color: #f5f5f6;">
		<van-nav-bar title="我的余额" left-arrow @click-left="onClickLeft" />
		<template>
			<div style="width: 100%;height: 200px; background-color: #88304e; text-align: center;">
				<div style="height: 100px;line-height: 160px;font-size: 12px; color: #FFFFFF;"><van-icon name="gold-coin-o" />我的资产</div>
				<div style="height: 100px; font-size: 24px;color: #FFFFFF;">1200.00<small>元</small></div>
			</div>
		</template>
		<template v-for="(item,index) in received">
			<template v-for="itemm in item.goods">
				<van-cell :title="item.time" :value="'-'+' '+itemm.sale" :label="itemm.name" />
			</template>
		</template>
	</div>
</template>

<script>
	import {
		getpay
	} from '../../comoon/api/buy.js'
	export default {
		data() {
			return {
				status: '交易成功',
				received: [],
			};
		},
		mounted() {
			this.getdata();
		},
		methods: {
			getdata() {
				this.username = this.$cookies.get('name');
				getpay(this.username, this.status).then(res => {
					this.received = res;
				}, res => {
					console.log("error");
				})
			},
			onClickLeft() {
				this.$router.go(-1);
			},

		}
	};
</script>

<style>
</style>
