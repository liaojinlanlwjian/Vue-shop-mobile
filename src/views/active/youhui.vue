<template>
	<div style="background-color: #f0f0f0;">
		<van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft" />
		<van-tabs>
			<van-tab title="未使用" name="a">
				<template v-for="(item,index) in received" >
					<div style="width: 96%; height: 100px;border-radius: 8px;background-color: #FFFFFF;margin: 10px auto; border: 1px solid #FFFFFF;">
					<van-row gutter="20" style="height: 60px; margin: 18px auto;">
						<van-col span="5" style="height: 60px;text-align: center;">
							<div style="height: 30px;color: #f9bd04;line-height: 20px;"><span>¥<strong>2</strong></span>
							</div>
							<div style="height: 30px; color: #f9bd04;"><span>无门槛</span></div>
						</van-col>
						<van-col span="13" style="height: 60px;text-align: center;">
							<div style="height: 30px;line-height: 30px;overflow: hidden;font-size: 14px;">
								<van-row>
									<van-col span="8">
										<van-image width="30" height="30"
											:src="item.image_src" />
									</van-col>
									<van-col span="16">{{item.name}}</van-col>
								</van-row>
							</div>
							<div style="height: 30px; color: #8785a2;font-size: 12px; margin-top: 8px;"><span>2021.7.6-20201.9.30</span></div>
						</van-col>
						<van-col span="6" style="line-height: 50px;">
							<van-button type="primary" color="#f9bd04" size="small" @click="goindex">立即使用</van-button>
						</van-col>
					</van-row>
				</div>
				</template>
				

			</van-tab>
			<van-tab title="已使用" name="b">
				<div style="width: 100%; height: 540px; background-color: #FFFFFF; text-align: center; line-height: 540px;">
					你还未使用优惠券哦
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {
		getIcon,
		getGoods
	} from '../../comoon/api/index.js'
	export default {
		data() {
			return {
				status: '交易成功',
				received: [],
				src: '',
				name: '',
			};
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.src = this.$cookies.get('src');
			this.getgoods();
		},
		methods: {
			goindex(){
				this.$router.push('/index');
			},
			getgoods() {
				getGoods().then(response => {
					this.received = response;
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
