<template>
	<div style="background-color: #f7f8fa;">
		<van-nav-bar title="购买" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<div style="width: 100%; height: 260px; margin: 0px auto 6px;  ">
			<van-swipe class="my-swipe" :autoplay="3000" :height="270" indicator-color="white"
				style="width: 100%;">
				<van-swipe-item v-for="(image, index) in objitem.src" :key="index"><img style="width: 100%; height: 270px;"
						:src="image" /></van-swipe-item>
			</van-swipe>
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

			<van-cell is-link @click="showPopup">已选：<span>{{(objitem.radio<2) ? '蓝色' : '绿色'}} x {{objitem.step}}</span>
			</van-cell>
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
							<van-stepper v-model="objitem.step" theme="round" button-size="20" min="1" max="5"
								disable-input />
						</div>
						<div><span>总价：</span></div>
						<div style="margin-top: 8px;  margin-bottom: 10px;">
							<van-icon name="balance-o" color="#b83b5e" size="13px" />&nbsp
							{{objitem.sale1 * objitem.step}}
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
			<div style="width: 18%; height: 50px; text-align: center; line-height: 50px;"><span>保障</span></div>
			<div style="width: 82%; height: 50px; ">
				<div style="font-size: 12px;">
					<van-icon color="#b83b5e" name="success" /><span style="padding-left: 5px;"> 厂家服务</span>
				</div>
				<div style="font-size: 12px;">
					<van-icon color="#b83b5e" name="success" /><span style="padding-left: 5px;">正品行货 </span>
				</div>
				<div style="font-size: 12px;">
					<van-icon color="#b83b5e" name="success" /><span style="padding-left: 5px;">京东商城向您保证所售商品均为正品行货。</span>
				</div>
			</div>
		</div>
		<van-tabs v-model="activeName">
			<van-tab title="商品详情" name="a">
				<div style="width: 94%;height: auto;margin: 0px auto;margin-top: 20px;">
					<van-image width="100%" height="1770" :src="objitem.detail_src" />
				</div>

			</van-tab>
			<van-tab title="商品评价" name="b" :badge="pinjianum" :sticky="sticky">
				<template v-for="item in pinjia">
				<div style="width: 94%;height: auto;margin: 0px auto;margin-top: 20px;border-radius: 10px; background-color: #FFFFFF;">
					<div style="display: flex;width: 100%;height: 40px;">
							<div style="width: 10%; height: auto; line-height: 50px; text-align: center;  ">
									<van-image
									  round
									  width="1.5rem"
									  height="1.5rem"
									  src="https://img2.baidu.com/it/u=2435883410,1025234814&fm=26&fmt=auto&gp=0.jpg"
									/>
							</div>
							<div style="width: 80%; height: 60px;text-align: left;  margin-left: 5px;">
								<div><span style="font-size: 12px; ">{{item.gomaizhe}}</span></div>
								<div><van-rate v-model="item.value" size="12px" /></div>
							</div>
					</div>
					<div style="margin-left: 6px;">
						<span style="font-size: 13px;">{{item.message}}</span>
					</div>
					<div style="margin-top: 5px;margin-left: 6px;">
						<van-image
						  width="70"
						  height="70"
						  :src="item.image_src"
						/>
					</div>
					<div style="margin-bottom: 9px;height: 42px;margin-left: 6px;">
						<span style="font-size: 9px; color: #2c313c;">{{item.name}}</span>
					</div>
				</div>
				</template>
				<div v-show="show1" style="width: 100%; height: 120px; text-align: center; display: flex; background-color: #FFFFFF;">
					该商品还没有评价哦
				</div>
			</van-tab>
		</van-tabs>
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
	import {
		getallpinjia
	} from '../../comoon/api/buy.js'
	export default {
		data() {
			return {
				sticky:true,
				pinjianum:'',
				status: '已评价',
				activeName: 'a',
				carNum: '',
				show1:false,
				show: false,
				carList: [],
				pinjia: [],
				objitem: {
					step: 1,
					radio: 1,
					sale: '',
					sale1: '',
					name: '',
					image_src: '',
					src: [],
					id: '',
					user: '',
					token: 0,
					detail_src: ''
				}
			};
		},
		//接收index 点击来的数据
		mounted() {
			this.$router.afterEach((to, from, next) => {
				window.scrollTo(0, 0)
			})
			this.objitem.id = this.$route.query.id;
			this.objitem.name = this.$route.query.name;
			this.objitem.image_src = this.$route.query.src;
			this.objitem.src = this.$route.query.srcc;
			this.objitem.sale = this.$route.query.sale;
			this.objitem.detail_src = this.$route.query.detail_src;
			this.objitem.user = this.$cookies.get('name');
			this.objitem.sale1 = this.objitem.sale.slice(1);
			this.getdata();
			this.getpinjia();
		},
		methods: {
			//去到结算页面
			gojiesuan(item) {
				localStorage.setItem('item', JSON.stringify(this.objitem));
				this.$router.push({
					path: "/jiesuan",
					query: {
						token: this.token,
						id: item.id
					}
				});
			},
			gwche() {
				this.$router.replace('/cart');
			},
			confirm() {
				this.show = false;
			},
			//获取评价
			getpinjia() {
				getallpinjia(this.objitem.sale1, this.status).then(res => {
					this.pinjia = res;
					this.pinjianum = this.pinjia.length;
					for(let i = 0;i<this.pinjia.length;i++){
						this.pinjia[i].value = parseInt(res[i].value);
					}
					if(this.pinjia.length==0){
						this.show1 = true;
					}
				}, res => {
					console.log("error");
				})
			},
			//获取购物车的数量
			getdata() {
				this.user = this.$cookies.get('name');
				getCar(this.user).then(res => {
					this.carList = res;
					this.carNum = this.carList.length;
				}, res => {
					console.log("error")
				})
			},
			//加入购物车
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
				this.$router.back();
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
