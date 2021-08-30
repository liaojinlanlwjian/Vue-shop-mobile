<template>
	<div style="background-color: #f5f5f6;">
		<van-nav-bar title="结算" left-arrow @click-left="onClickLeft" />
		<!-- border: 1px solid red; -->
		<div v-show="show2">
				<div style="width: 94%; height: auto; margin: 10px auto 0px auto; border-radius: 18px; ">
			<van-cell style="border-radius: 18px;" title="收货地址" value="点我选择" size="large" @click="chooseAddress" is-link />
		</div>
		<div style=" width: 94%; height: 50px;margin: 10px auto 0px auto; background-color: #FFFFFF; border-radius: 18px;">
			
			<div style="width: 100%; height: 25px;   border-bottom: 1px solid #f5f5f6; line-height: 25px;">
				<span style="padding-left: 12px; font-size: 13px">{{'姓名:'+address.name}}</span>
				<span style="padding-left: 12px; font-size: 13px">{{'电话:'+address.tel}}</span>
			</div>
			<div style="width: 100%; height: auto;  ">
				<span style="padding-left: 12px; font-size: 13px;">{{'地址：' + address.fieldValue + address.detail}}</span>
			</div>
		</div>	
		</div>

		<div style=" width: 94%; height: auto;margin: 10px auto 0px auto; border-radius: 18px;">
			<div style="width: 100%; height: auto; margin: 0px auto;  border-bottom: 1px solid #f5f5f6; ">
				<van-cell style=" border-radius: 18px 18px 0px 0px;" title="兰亭终端" icon="shop-o">
				</van-cell>
			</div>
			<div style="width: 100%; height: auto; margin: 0px auto ; display: flex; background-color: #FFFFFF; ">
				<div style="width: 18%; height: auto; text-align: center; line-height: 50px; padding-left: 10px;">
					<van-image width="70" height="70" :src="src" />

				</div>
				<div style="width: 80%; height: auto ;margin-left: 15px;">
					<div style=" line-height: 20px; font-size: 12px; margin-top: 10px;">
						<span style="padding-left: 1px;">{{name}}</span>
					</div>
					<div style="font-size: 12px;">
						<span style="padding-left: 5px;">x {{step}}</span>
						<span style="padding-left: 145px; font-size: 16px;">￥ {{step*sale}}</span>
					</div>
				</div>
			</div>
			<div style="width: 100%;  margin: 0px auto; background-color: #FFFFFF;border-radius:0px 0px 18px 18px;">
				<van-cell-group inset>
					<van-cell title="配送" value="标准配送" />
					<van-cell title="发票" value="电子发票-个人" label="可选择性打印电子发票" />
				</van-cell-group>
			</div>
		</div>



		<div style="width: 100%; height: auto; margin-top: 10px; ">
			<van-cell-group inset>
				<van-cell title="积分" value="0积分" icon="info-o" />
				<van-cell title="商品总价" :value="'￥' + sale*step" />
				<van-cell title="配送费" value="+￥0" ref="peis" />
				<van-cell title="商品优惠" value="暂无优惠券" ref="yhui" />
			</van-cell-group>
		</div>


		<div style="width: 100%; height: 50px; margin-top: 25px; border-top: 1px solid #dbdbdb;  ">
			<span style="padding-left: 20px;"> ￥ {{sale*step}}</span>
			<span style="padding-left: 180px; padding-top: 10px;">
				<van-button type="primary" round color="#b83b5e" @click="submit">提交订单</van-button>
			</span>
		</div>


		
	</div>
</template>

<script>
	import {
		delCar,
		subPo
	} from '../../comoon/api/car.js'
	import {
		getAddress_one
	} from '../../comoon/api/address.js'
	export default {
		data() {
			return {
				address: [],
				idid: '870',
				msg: '',
				psd: '',
				username: '',
				status_id:'',
				step: 1,
				radio: 1,
				sale: '',
				name: '',
				src: '',
				id: '',
				user: '',
				carNum: '',
				show: false,
				show1: false,
				show2:true,
				token:'',
				show3: false,
				carList: [],
				goodsMsg:'',
				fieldValue: '',
				cascaderValue: '',
				options: [{
					text: '浙江省',
					value: '330000',
					children: [],
				}, ],
			};
		},
		mounted() {
			this.goodsMsg = JSON.parse(localStorage.getItem('item'));//JSON.parse() 方法将数据转换为 JavaScript 对象。
			if(this.goodsMsg.goods==undefined){
				this.id = this.goodsMsg.id;
				this.name = this.goodsMsg.name;
				this.src = this.goodsMsg.image_src;
				this.sale = this.goodsMsg.sale1;
				this.step = this.goodsMsg.step;
				this.idid = this.$route.query.idid;
				this.carList = this.$route.query.carList;
				this.user = this.$cookies.get('name');
				this.$refs.peis.lastElementChild.style.color = '#b83b5e';
				this.$refs.yhui.lastElementChild.style.color = '#b83b5e';
			}
			else if(this.goodsMsg.goods!=undefined){
			this.id = this.goodsMsg.goods[0].id;
			this.name = this.goodsMsg.goods[0].name;
			this.src = this.goodsMsg.goods[0].image_src;
			this.sale = this.goodsMsg.goods[0].sale;
			this.step = this.goodsMsg.goods[0].step;
			this.idid = this.$route.query.idid;
			this.carList = this.$route.query.carList;
			this.user = this.$cookies.get('name');
			this.$refs.peis.lastElementChild.style.color = '#b83b5e';
			this.$refs.yhui.lastElementChild.style.color = '#b83b5e';
			}
			this.status_id = this.$route.query.id;
			this.token = this.$route.query.token;
			if(this.token==1){
				this.show2 = false
			}
			
			this.getAddress();
		},
		methods: {
			getAddress() {
				if(this.idid == undefined){
					getAddress_one(870).then(res => {
					this.address = res[0];
					// console.log(this.address);
				}, res => {
					console.log("error");
				})
				}
				else{
					getAddress_one(this.idid).then(res => {
						this.address = res[0];
						//console.log(this.address);
					}, res => {
						console.log("error");
					})
				}
				
			},
			chooseAddress() {
				this.$router.push({
					'path': '/address'
				});
			},
			sure() {
				this.msg = this.username + '  ' + '/' + '  ' + this.psd;
			},
			confirm() {
				let that = this;
				if (this.carList.length == 0) {
					that.$toast.success('购买成功');
					setTimeout(function() {
						that.$router.push({
							'path': '/index'
						}); //路由跳转用户中心
					}, 1500);
				}

				for (let i = 0; i < that.carList.length; i++) {
					if (that.carList[i].id == that.id) {
						delCar(that.id).then(res => {
							that.$toast.success('购买成功');
							setTimeout(function() {
								that.$router.push({
									'path': '/cart'
								}); //路由跳转用户中心
							}, 1500);
						}, res => {
							that.$toast.fail('购买失败');
						})
					} else if (that.carList[i].id != that.id) {
						that.$toast.success('购买成功');
						setTimeout(function() {
							that.$router.push({
								'path': '/cart'
							}); //路由跳转用户中心
						}, 1500);
					} else {
						that.$toast.fail('购买失败');
					}
				}

			},
			cancel() {
				this.$toast.success('请尽快支付哦');
			},
			submit() {
				this.$router.push({path: "/checkout", query: {address: this.address,token:this.token,status_id:this.status_id}})
			},
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				Toast('按钮');
			},
			onChange({
				value
			}) {
				if (value === this.options[0].value) {
					setTimeout(() => {
						this.options[0].children = [{
								text: '杭州市',
								value: '330100'
							},
							{
								text: '宁波市',
								value: '330200'
							},
						];
					}, 500);
				}
			},
			onFinish({
				selectedOptions
			}) {
				this.show = false;
				this.fieldValue = selectedOptions.map((option) => option.text).join('/');
			},
		},
	};
</script>

<style>
</style>
