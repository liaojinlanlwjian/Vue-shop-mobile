<template>
	<div>
		<div style="height: 42px;">
			<van-nav-bar title="购物车" :fixed="true" left-arrow @click-left="onClickLeft" />
		</div>
		<div v-show="show" style="margin: 10px auto;">
			<div style="text-align: center;">
				<van-image width="160" height="120" :src="src" />
			</div>
			<div style="text-align: center;"> 
				{{www}}
			</div>
			<div style="text-align: center; font-size: 14px; color: aquamarine;">
				<span @click="shopping">{{index}}</span>
			</div>
		</div>
		<template v-for="(item,index) in carList">
			<van-swipe-cell>
				<van-card style="margin-top: 8px;" :num="item.step" :price="item.sale1 * item.step"
					:desc="(item.radio<2) ? '黑色' : '绿色'" :title="item.name" :thumb="item.image_src">
					<template #tags>
						<div style="width: 100%; display: flex;">
							<div style="width: 70%;">
								<van-tag plain type="danger">原价:</van-tag>
								{{item.sale}}
							</div>
							<div>
								<van-stepper v-model="item.step" theme="round" @plus="pulsNum(item.sale1)"
									@minus="minNum(item.sale1)" button-size="18" max="5" disable-input />
							</div>
						</div>
					</template>
					<template #footer>
						<van-button size="mini" plain color="#cca8e9" @click="goJiesuan(item)">
							<span style="padding-left: 5px; font-size: 12px;">我要买它</span>
						</van-button>
					</template>
				</van-card>
				<template #right>
					<van-button square text="删除" type="danger" @click="delcar(item)" class="delete-button" />
				</template>
			</van-swipe-cell>
		</template>
		<div style="width: 100%; height: 200px;background-color: #FFFFFF;"></div>
		<div
			style="width: 100%; height: 70px; position: fixed; top: 82.2%; display: flex; background-color: #FFFFFF; border-top: 1px solid #eeeeee;">
			<div style="width: 76%; height: 50px; ">
				<div style="line-height: 70px; ">
					<van-icon name="balance-o" color="#b83b5e" size="18px" /><span
						style="padding-left: 5px; font-size: 18px;">总价:</span> <span
						style="padding-left: 5px; color: #b83b5e; font-size: 20px;">￥ {{total}}</span>
				</div>
			</div>
			<div style="width: 24%;">
				<van-button color="#71c9ce" size="large">全部购买</van-button>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		getCar,
		delCar
	} from '../../comoon/api/car.js'
	export default {
		data() {
			return {
				index:'点我去购物吧',
				www: '你的购物车空空如也',
				src: 'https://gh.esgcc.com.cn/images/shoppingcart/cart-empty.png',
				show: false,
				checked: false,
				result: [],
				carList: [],
				user: '',
				id: '',
				totalPrice: [],
				total: 0,
				token:0
			}
		},
		mounted() {
			this.getdata();
		},
		methods: {
			shopping(){
				this.$router.replace('/index');
			},
			goJiesuan(item) {
				localStorage.setItem('item',JSON.stringify(item));//使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。 
				this.$router.push({path: "/jiesuan", query: {token: this.token,id:item.id}});
			},
			pulsNum(e) {
				let a = parseFloat(e);
				console.log(a);
				this.total = a + this.total;
			},
			minNum(e) {
				let a1 = parseFloat(e);
				console.log(a1);
				this.total = this.total - a1;
			},
			likecar(key) {
				console.log(this.result[0]);
			},
			delcar(o) {
				delCar(o.id).then(res => {
					this.$toast.success('删除成功');
					this.getdata();
					this.total = 0;
				}, res => {
					this.$toast.fail('删除失败');
				})
			},
			getdata() {
				this.user = this.$cookies.get('name');
				getCar(this.user).then(res => {
					this.carList = res;
					if (this.carList.length == 0) {
						this.show = true;
					} else {
						this.show = false;
					}
					for (let i = 0; i < this.carList.length; i++) {
						this.totalPrice[i] = this.carList[i].step * this.carList[i].sale1;

						this.total = this.totalPrice[i] + this.total;
					}
				}, res => {
					console.log("error")
				})
			},
			onClickLeft() {
				this.$router.go(-1);

			},
			checkAll() {
				this.$refs.checkboxGroup.toggleAll(true);
			},
			toggleAll() {
				this.$refs.checkboxGroup.toggleAll();
			},
		}
	}
</script>

<style scoped="scoped">
	.goods-card {
		margin: 0;
		background-color: @white;
	}

	.delete-button {
		height: 100%;
	}
</style>
