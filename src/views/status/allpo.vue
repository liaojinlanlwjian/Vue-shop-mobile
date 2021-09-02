<template>
	<div>
		<van-nav-bar title="全部" left-arrow @click-left="onClickLeft" />
		<van-tabs v-model="activeName">
			<van-tab title="全部订单" name="a">
				<template v-for="item in allpo" >
					<div style=" width: 94%; height: auto;margin: 10px auto 20px auto; border-bottom: 1px solid #c9d6df;">
						<div style="width: 100%; height: auto; margin: 0px auto;  border-bottom: 1px solid #f5f5f6; ">
							<van-cell style=" border-radius: 18px 18px 0px 0px;" title="购买者" icon="bag-o" :value="item.name">
							</van-cell>
						</div>
						<div style="width: 100%;  margin: 0px auto; background-color: #FFFFFF;">
							<van-cell-group inset>
								<van-cell title="配送至" :label="item.address" />
								<van-cell title="状态" :value="item.status" />
								<van-cell title="交易状态" icon="passed">
									<template #right-icon>
										<van-button round size="mini" color="#f38181" :disabled="true" type="info">我已收货
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
			</van-tab>
			<van-tab title="全部评价" name="b">
				<template v-for="item in pinjia" style="border-bottom: 1px solid #f5f5f6;">
					<div style=" width: 100%; height: auto; border-bottom: 1px solid #f5f5f6 ;">
						<div style="width: 100%; height: 110px; display: flex; background-color: #FFFFFF;">
							<div
								style="width: 18%; height: auto; text-align: center; line-height: 50px; padding-left: 10px;">
								<van-image width="70" height="70" :src="item.image_src" />

							</div>
							<div style="width: 80%; height: auto ;margin-left: 15px;">
								<div style=" line-height: 20px; font-size: 12px; margin-top: 10px;">
									<span style="padding-left: 1px;">{{item.user}}</span>
								</div>
								<div style="font-size: 12px;">
									<span style="padding-left: 2px; color: #aa96da;">{{ '账号用户：' + item.name}}</span>
									<span style="padding-left: 5px; color: #f08a5d;">{{ '数量：' + 'x' + item.step}}</span>
									<span
										style="padding-left: 8px; font-size: 15px; color: #b83b5e;">{{ '总价：' + '￥' + item.step*item.sale}}</span>
								</div>
							</div>
						</div>

						<div style="width: 100%; height: 45px;  background-color: #FFFFFF; ">
							<van-cell title="你的评价" />
						</div>

						<div
							style="width: 100%; height: 105px;  background-color: #FFFFFF;  border-radius: 0px 0px 18px 18px;">
							<van-field v-model="item.message" rows="2" autosize label="留言" type="textarea"
								maxlength="50" placeholder="请输入留言" show-word-limit />
						</div>
					</div>
				</template>


			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {
		getpinjia
	} from '../../comoon/api/buy.js'
	import {
		getdonepay
	} from '../../comoon/api/buy.js'
	export default {
		data() {
			return {
				message: '',
				activeName: 'a',
				status: '已评价',
				statuss: '交易成功',
				name: '',
				pinjia: [],
				allpo:[]
			};
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.get_data_pinjia();
			this.get_data_po();
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			get_data_po() {
				getdonepay(this.name, this.statuss).then(res => {
					this.allpo = res;
				}, res => {
					console.log("error");
				});
			},
			get_data_pinjia() {
				getpinjia(this.name, this.status).then(res => {
					this.pinjia = res;
				}, res => {
					console.log("error");
				});
			}
		}
	};
</script>

<style>
</style>
