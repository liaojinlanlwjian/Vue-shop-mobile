<template>
	<div>
		<van-nav-bar title="我的小金库" left-arrow @click-left="onClickLeft" />
		<div style="width: 94%; height: 200px; margin: 0px auto;  border-radius: 17px; ">
			<van-image width="100%" height="190" radius="17px"
				src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0148f45d1c4e1aa8012137631f17a0.png%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633146328&t=d5161d288ba85029cd8f1a9995b984f8" />
			<div style="position: absolute;left: 78%; top: 205px;"><van-button type="primary" round color="#f24d4f" size="small">立即开通</van-button></div>
		</div>
		<div style="width: 94%; height: 120px; margin: 10px auto;  border-radius: 10px; position: relative;">
			<van-image width="100%" height="110" radius="10px"
				src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0116605851154fa8012060c8587ca1.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633155552&t=03494ede3fba32437148aef07ac46b7d" />
			<div style="position: absolute;left: 2%; top: 5px;"><van-button type="primary" round color="#a8d8ea" size="mini">随借随还</van-button></div>
			<div style="position: absolute;left: 2%; top: 35px;"><van-button type="primary" round color="#a8d8ea" size="mini">先息后本</van-button></div>
		</div>
		
		<van-cell value="产品精选" />
		<div style="width: 94%; height: 220px; margin: 10px auto;border-radius: 10px;">
			<div style="width: 46%; height: 100px;display: inline-block;margin-left: 15px;border-radius: 8px;">
				<van-image width="100%" height="100" radius="8px"
					src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F08%2F68%2F85%2F55bc53008f0de.jpg&refer=http%3A%2F%2Fpic.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633158849&t=eef5a1938f0538bd19ce52a748033be7"/>
			</div>
			<div style="width: 46%; height: 100px;display: inline-block;border-radius: 8px;">
				<van-image width="100%" height="100" radius="8px"
					src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5fff947b902d8521e16bea2aa4b304b3cc54e936db53-DaIgub_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633160397&t=3eed52d7ac85a905b4347a2c703920f7"/>
			</div>
			<div style="width: 46%; height: 100px;display: inline-block;margin-left: 15px;border-radius: 8px;">
				<van-image width="100%" height="100" radius="8px"
					src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012ba659b0c65ea8012028a9e9eba7.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633159034&t=affcf35784bc252184c91463aa56b39a"/>
			</div>
			<div style="width: 46%; height: 100px;display: inline-block;border-radius: 8px;">
				<van-image width="100%" height="100" radius="8px"
					src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c0bd5a78125aa8012134668bb0f6.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633159048&t=d446ec7a7b2dcb96204a96b5027c52b5"/>
			</div>
		</div>
		<van-cell value="大家都喜欢" />
		<div style="width: 94%; height: 160px; margin: 0px auto;  border-radius: 17px; ">
			<van-image width="100%" height="150" radius="17px"
				src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014fc15568a07e0000012716077548.jpg%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633159483&t=0a2cb1bc2f4746596d1c4d512eb44d64" />
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
			};
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.src = this.$cookies.get('src');
			// this.getgoods();
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
