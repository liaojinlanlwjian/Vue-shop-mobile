<template>
	<div style="background-color: #f5f5f6;">
		<van-nav-bar title="待收货" left-arrow @click-left="onClickLeft" />

		<van-empty v-show="show" style="height: 621px;" class="custom-image"
			image="https://image.evget.com/Content/images/201910/25/b3f0a1c60d3c62eac0b32f1251a5b0fb.png"
			 description="还没有待收货的宝贝哦,我的宝" />

		<template v-for="item in received">
			<div style=" width: 94%; height: auto;margin: 10px auto 20px auto; border-radius: 18px;">
				<div style="width: 100%; height: auto; margin: 0px auto;  border-bottom: 1px solid #f5f5f6; ">
					<van-cell style=" border-radius: 18px 18px 0px 0px;" title="购买者" icon="bag-o" :value="item.name">
					</van-cell>
				</div>

				<div style="width: 100%;  margin: 0px auto; background-color: #FFFFFF;">
					<van-row gutter="20">
						<van-steps :active="(item.goods_status=='已发货')?2:1"
							active-color="#00e0ff">
							<van-step>支付成功</van-step>
							<van-step>等待发货</van-step>
							<van-step>商家发货</van-step>
							<van-step>交易完成</van-step>
						</van-steps>
					</van-row>
				</div>



				<div style="width: 100%;  margin: 0px auto; background-color: #FFFFFF;">
					<van-cell-group inset>
						<van-cell title="配送至" :label="item.address" />
						<van-cell title="状态" :value="item.goods_status" />
						<van-cell title="交易状态" icon="passed">
							<template #right-icon>
								<van-button round size="mini" color="#f38181" :disabled="but" type="info" @click="jiaoyidone(item)">我已收货
								</van-button>
							</template>
						</van-cell>
					</van-cell-group>
				</div>
				<template v-for="itemm in item.goods">
					<div
						style="width: 100%; height: 110px; margin: 0px auto 20px auto; display: flex; background-color: #FFFFFF;  border-radius: 0px 0px 18px 18px;">
						<div
							style="width: 18%; height: auto; text-align: center; line-height: 50px; padding-left: 10px;">
							<van-image width="70" height="70" :src="itemm.image_src" />

						</div>
						<div style="width: 80%; height: auto ;margin-left: 15px;">
							<div style=" line-height: 20px; font-size: 12px; margin-top: 10px;">
								<span style="padding-left: 1px;">{{itemm.name}}</span>
							</div>
							<div style="font-size: 12px;">
								<span style="padding-left: 2px; color: #aa96da;">{{ '账号用户：' + itemm.user}}</span>
								<span style="padding-left: 5px; color: #f08a5d;">{{ '数量：' + 'x' + itemm.step}}</span>
								<span
									style="padding-left: 8px; font-size: 15px; color: #b83b5e;">{{ '总价：' + '￥' + itemm.step*itemm.sale}}</span>
							</div>
						</div>
					</div>
				</template>
			</div>


		</template>
	</div>
</template>

<script>
	import {
		getpay,
		patchPo,
		delpay,
		addPinjia,
		patchstatus
	} from '../../comoon/api/buy.js'
	export default {
		data() {
			return {
				jiaoyistatus: '交易成功',
				show: false,
				active: 1,
				status: '已支付',
				username: '',
				received: [],
				but:false,
				status_pinjia:'未评价'
			};
		},
		mounted() {
			this.getdata();
			
		},
		methods: {
			jiaoyidone(item) {
				let that = this;
				let params = {
					status: that.jiaoyistatus,
				};
				patchPo(item.id, params).then(response => {
					that.getdata();
					let paramss = {
						id: Math.round(Math.random() * 10000),
						image_src: item.goods[0].image_src,
						name: item.goods[0].name,
						sale: item.goods[0].sale,
						step: item.goods[0].step,
						user:this.$cookies.get('name'),
						status:this.status_pinjia
					};
					that.$toast.loading({
						  message: '交易成功，追您阖家幸福',
						  forbidClick: true,
						});
					addPinjia(paramss);
					// setTimeout(function() {
					// 	delpay(item.id);
					// }, 1600)
					that.getdata();
					setTimeout(function() {
						that.$router.push('/cart');
					}, 2800)
				}, response => {
					console.log("error");
				})
			},
			goJiesuan(item) {
				localStorage.setItem('item', JSON.stringify(item)); //使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。 
				this.$router.push('/jiesuan')
			},
			getdata() {
				this.username = this.$cookies.get('name');
				getpay(this.username, this.status).then(res => {
					this.received = res;
					if (this.received.length == 0) {
						this.show = true;
					} else {
						this.show = false;
					}
					// if(this.received[0].goods_status=='未发货'){
					// 	this.but = true;
					// }
					// else{
					// 	this.but = false;
					// }
				}, res => {
					console.log("error");
				})
			},
			onClickLeft() {
				this.$router.push('/user');
			},
		},
	};
</script>

<style>
	.custom-image .van-empty__image {
		width: 90px;
		height: 90px;
	}
</style>
