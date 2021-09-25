<template>
	<div style="background-color: #f0f0f0; height: 666px;">
		<van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft" />
		<van-tabs v-model="activeName">
			<van-tab title="未使用" name="a">
				<template v-for="(item,index) in received" >
					<div style="width: 96%; height: 100px;border-radius: 8px;background-color: #FFFFFF;margin: 10px auto; border: 1px solid #FFFFFF;">
					<van-row gutter="20" style="height: 60px; margin: 18px auto;">
						<van-col span="5" style="height: 60px;text-align: center;">
							<div style="height: 30px;color: #f9bd04;line-height: 28px;"><span>¥<strong>{{item.value}}</strong></span>
							</div>
							<div style="height: 30px; color: #f9bd04;">数量：<span>{{item.num}}</span></div>
						</van-col>
						<van-col span="13" style="height: 60px;text-align: center;">
							<div style="height: 30px; color: #282c35;">使用类型：<span>{{item.type}}</span></div>
							<div style="height: 30px; color: #8785a2;font-size: 12px; margin-top: 8px;"><span>截止至：{{item.time}}</span></div>
						</van-col>
						<van-col span="6" style="line-height: 50px;">
							<van-button type="primary" color="#f9bd04" size="small" @click="goindex(item)">立即使用</van-button>
						</van-col>
					</van-row>
				</div>
				</template>
				

			</van-tab>
			<van-tab title="已使用" name="b">
				<template v-for="(item,index) in receiveds" >
					<div style="width: 96%; height: 100px;border-radius: 8px;background-color: #cecece;margin: 10px auto; border: 1px solid #FFFFFF;">
					<van-row gutter="20" style="height: 60px; margin: 18px auto;">
						<van-col span="10" style="height: 60px;text-align: center;">
							<div style="height: 30px;color: #f9bd04;line-height: 28px;"><span>¥<strong>{{item.value}}</strong></span>
							</div>
							<div style="height: 30px; color: #f9bd04;">数量：<span>{{item.num}}</span></div>
						</van-col>
						<van-col span="14" style="height: 60px;text-align: center;">
							<div style="height: 30px; color: #282c35;">已使用类型：<span>{{item.type}}</span></div>
							<div style="height: 30px; color: #8785a2;font-size: 12px; margin-top: 8px;"><span>截止至：{{item.time}}</span></div>
						</van-col>
					</van-row>
				</div>
				</template>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {
		getCoupons_name
	} from '../../comoon/api/youhui.js'
	export default {
		data() {
			return {
				activeName:'a',
				received: [],
				receiveds: [],
				name: '',
				status:'未使用',
				statuss:'已使用',
				titok:''
			};
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.titok = this.$route.query.titok;
			this.getgoods();
			this.getgoodss();
		},
		methods: {
			goindex(o){
				if(this.titok == 1){
					this.$router.replace({
						path: "/jiesuan",
						query: {
							id_youhui: o.id,
						}
					})
				}
				else if (this.titok == undefined){
					this.$router.push('/index');
				}
			},
			getgoods() {
				getCoupons_name(this.name,this.status).then(response => {
					this.received = response;
				}, response => {
					console.log("error");
				})
			},
			getgoodss() {
				getCoupons_name(this.name,this.statuss).then(response => {
					this.receiveds = response;
				}, response => {
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
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
</style>
