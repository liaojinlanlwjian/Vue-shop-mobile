<template>
	<div style="background-color: #f7f8fa;">
		<van-nav-bar title="购买" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<div style="width: 100%; height: 260px; margin: 0px auto 6px;  ">
			<van-image width="100%" height="260" :src="objitem.image_src" />
		</div>
		<div style="width: 100%; height: auto; background-color: #FFFFFF;">
			<div style="width: 95%; height: auto;  margin: 0px auto 0px; ">
				<div style="color: crimson;font-size: 16px;  padding-top: 10px; margin-bottom: 10px;">
					<span>{{objitem.sale}}</span>
				</div>
				<div style="font-size: 14px; height: 70px;  margin-top: 10px;">
					<span>{{objitem.name}}</span>
				</div>
			</div>
		</div>

		<div style="width: 100%; height: auto; margin-top: 4px;">
			<van-cell is-link>
				<template #title>
					<span style="font-size: 13px;">送礼</span>
					<van-tag color="#7232dd" plain style="font-size: 8px;">过年不收礼收礼就收老白金</van-tag>
				</template>
			</van-cell>
		</div>

		<div style="width: 100%; height: auto; margin-top: 4px;">

			<van-cell is-link @click="showPopup">已选：<span>{{(objitem.radio<2) ? '蓝色' : '绿色'}} x {{objitem.step}}</span></van-cell>
			<van-popup v-model="show" closeable>
				<div style="width: 280px; height: 290px;">
					<div style="margin-top: 20px; margin-left: 10px;">
						<div><span>价格：</span></div>
						<div style="margin-top: 8px; margin-bottom: 10px;">{{objitem.sale}}</div>

						<div><span>颜色：</span></div>
						<div style="margin-top: 8px;  margin-bottom: 10px;">
							<van-radio-group v-model="objitem.radio" direction="horizontal">
								<van-radio name="1">蓝色</van-radio>
								<van-radio name="2">绿色</van-radio>
							</van-radio-group>
						</div>
						<div><span>数量：</span></div>
						<div style="margin-top: 8px;  margin-bottom: 10px;">
							<van-stepper v-model="objitem.step" theme="round" button-size="20" min="1" max="5" disable-input />
						</div>
						<div><span>总价：</span></div>
						<div style="margin-top: 8px;  margin-bottom: 10px;">
							<van-icon name="balance-o" color="#b83b5e" size="13px" />&nbsp {{objitem.sale1 * objitem.step}}
						</div>
					</div>
					<div style="margin-left: 210px;">
						<van-button color="#7232dd" plain @click="confirm">确定</van-button>
					</div>
				</div>
			</van-popup>
		</div>
		<div style="width: 100%; height: 70px; margin-top: 3px; display: flex; background-color: #FFFFFF;">
			<div style="width: 18%; height: 50px; text-align: center; line-height: 50px;"><span>服务</span></div>
			<div style="width: 82%; height: 50px; ">
				<div style="line-height: 40px; font-size: 12px;">
					<van-icon color="#b83b5e" name="success" /><span style="padding-left: 5px;">已包邮</span>
				</div>
				<div style="font-size: 12px;">
					<van-icon color="#b83b5e" name="success" /><span style="padding-left: 5px;">由<span
							style="color: #b83b5e;">第三方商家</span>提供商品、发货及售后服务</span>
				</div>
			</div>
		</div>

		<div style="width: 100%; height: 70px; margin-top: 3px; display: flex; background-color: #FFFFFF;">

		</div>

		<div>
			<van-goods-action>
				<van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
				<van-goods-action-icon icon="cart-o" :badge="carNum" @click="gwche" text="购物车" />
				<van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
				<van-goods-action-button color="#c3bef0" @click="joincar" type="warning" text="加入购物车" />
				<van-goods-action-button color="#cca8e9" type="danger" @click="gojiesuan" text="立即购买" />
			</van-goods-action>
		</div>
	</div>
</template>

<script>
	import {
		joinCar,
		getCar
	} from '../../comoon/api/car.js'
	export default {
		data() {
			return {

				carNum: '',
				show: false,
				carList: [],
				objitem:{
					step: 1,
					radio: 1,
					sale: '',
					sale1: '',
					name: '',
					image_src: '',
					id: '',
					user: '',
					token:0
				}
			};
		},
		mounted() {
			this.objitem.id = this.$route.query.id;
			this.objitem.name = this.$route.query.name;
			this.objitem.image_src = this.$route.query.src;
			this.objitem.sale = this.$route.query.sale;
			this.objitem.user = this.$cookies.get('name');
			this.objitem.sale1 = this.objitem.sale.slice(1);
			this.getdata();
		},
		methods: {
			gojiesuan(item) {
				localStorage.setItem('item',JSON.stringify(this.objitem));
				this.$router.push({path: "/jiesuan", query: {token: this.token,id:item.id}});
				},
			gwche() {
				this.$router.replace('/cart');
			},
			confirm() {
				this.show = false;
			},
			getdata() {
				this.user = this.$cookies.get('name');
				getCar(this.user).then(res => {
					this.carList = res;
					this.carNum = this.carList.length;
				}, res => {
					console.log("error")
				})
			},
			joincar() {
				let params = {
					id: this.objitem.id,
					image_src: this.objitem.image_src,
					name: this.objitem.name,
					sale: this.objitem.sale,
					step: this.objitem.step,
					sale1: this.objitem.sale1,
					radio: this.objitem.radio,
					user: this.objitem.user
				};
				joinCar(params).then(response => {
					this.$toast.success('添加成功');
					this.carNum = this.carNum + 1;
					this.getdata();
				}, response => {
					this.$toast.success('购物车已经有我啦，不可以再添加了哟！');
				})
			},
			onClickIcon() {
				Toast('点击图标');
			},
			onClickButton() {
				Toast('点击按钮');
			},
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				Toast('按钮');
			},
			showPopup() {
				this.show = true;
			},
		}
	};
</script>

<style>
</style>
