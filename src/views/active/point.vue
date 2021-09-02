<template>
	<div>
		<van-nav-bar title="积分" left-arrow @click-left="onClickLeft" />
		<div style="width: 100%; height: 160px; background-color: #3d414a; display: inline-block;">
			<!-- display: inline-block;变成行内块元素 -->
			<div style="width: 94%; height: 140px;background-color: #4c4e5b;border-radius: 16px;margin: 10px auto;">
				<div style="height: 50px; width: 94%;line-height: 30px;   margin: 0px auto;">
					<van-row>
						<van-col span="2">
							<van-image round width="1.5rem" height="1.5rem" :src="src" />
						</van-col>
						<van-col span="13" style="color: #9598a2;">{{name}}</van-col>
					</van-row>
				</div>
				<div
					style="height: 70px; width: 100%;line-height: 50px;text-align: center; border-bottom: 1px solid #9598a2;">
					<span style="color: #bbb098; font-size: 22px;">10积分</span>
				</div>
				<div style="width: 94%; height: auto; color: #9598a2; font-size: 12px;"><span
						style="padding-left: 8px;">你的积分将在2022-12-31过期，去花掉别浪费 ></span></div>
			</div>
		</div>

		<div style="width: 94%; height: 120px; margin: 10px auto; border-radius: 17px; ">
			<van-swipe class="my-swipe" :autoplay="3000" :height="120" indicator-color="white"
				style="width: 100%; border-radius: 17px;">
				<van-swipe-item v-for="(image, index) in imgList" :key="index"><img style="width: 100%; height: 180px;"
						:src="image.url" /></van-swipe-item>
			</van-swipe>
		</div>
		<van-cell value="赚取积分" />
		<van-grid :border="false">
			<van-grid-item icon="bill" text="每日签到" />
			<van-grid-item icon="friends" text="邀请好友" />
			<van-grid-item icon="map-marked" text="首次填写地址" />
			<van-grid-item icon="invition" text="购物返积分" />
		</van-grid>

		<van-cell value="积分兑换" />
		<div style="margin: 15px auto; height: auto;">
			<van-row>
				<van-col v-for="(item,index) in received" :key="index" span="12"
					style="width: 45%; height: auto; border-radius: 17px; background-color: #FFFFFF; margin-top: 20px;margin-left: 10px; ">
					<div style="width: 80%; height: 170px; margin: 0px auto;">
						<van-image width="100%" height="10rem" :src="item.image_src" />
					</div>
					<div
						style="overflow: hidden; width: 94%; height: 15px; font-size: 12px;  padding-left: 5px; margin-top: 10px;">
						<span>{{item.name}}</span>
					</div>
					<div
						style="color: crimson;font-size: 12px; padding-left: 5px; margin-top: 10px; margin-bottom: 10px;">
						<van-button type="primary" color="#b83b5e" size="mini">兑</van-button>
						<van-button type="primary" color="#b83b5e"  size="mini">券</van-button>
					</div>
					<div
						style="color: crimson;font-size: 12px; padding-left: 5px; margin-top: 10px; display: inline-block; margin-bottom: 10px; border: 1px solid #3d414a;">
						<span>{{item.sale}}</span>
					</div>
					
				</van-col>
			</van-row>

		</div>
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
				imgList: [{
						url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c1dc58a11e04a8012060c87f25de.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633138559&t=cc80f89100ea2e7dc1b836d149c1e86a'
					},
					{
						url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b5555a0d934ca80121985ce63b3b.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633138572&t=89ca0772b04071853359fbcb348858d2'
					},
					{
						url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a260572c31aa32f875a399b773f0.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633138597&t=878c51d0b71b122ac0987df843a5696c'
					},
					{
						url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010d4f582ec1bca84a0d304f14e1b9.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633138731&t=f8c949c58814458849e26cecf0836502'
					},

				],
			};
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.src = this.$cookies.get('src');
			this.getgoods();
		},
		methods: {
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
