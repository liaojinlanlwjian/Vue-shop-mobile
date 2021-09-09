<template>
	<div style="background-color: #f5f5f6;height: 666px;">
		<van-nav-bar title="开通会员" left-arrow @click-left="onClickLeft" />

		<div style="width: 94%; height: 150px; margin: 10px auto; border-radius: 17px; ">
			<van-swipe class="my-swipe" :autoplay="3000" :height="150" indicator-color="white"
				style="width: 100%; border-radius: 17px;">
				<van-swipe-item v-for="(image, index) in imgList" :key="index"><img style="width: 100%; height: 180px;"
						:src="image.url" /></van-swipe-item>
			</van-swipe>
		</div>

		<div style="width: 94%; height: 380px; background-color: #FFFFFF;margin: 0px auto;border-radius: 10px;">
			<template v-for="(o,index) in memberMsg">
				<div id="member_list" @click="gocheckout_member(o,index)" ref="ddd">
					<div style="width: 100%; height: 80px; line-height: 120px;">
						<van-icon name="award" size="48px" color="#fcd04d" />
					</div>
					<div style="margin-top: 18px;">
						<span style="font-size: 15px;">{{o.type}}</span>
					</div>
					<div>
						<span style="color: #ffe42f; font-size: 14px;">{{o.price}}</span>
					</div>
					<div>
						<span
							style="font-size: 12px; color: #B8B8B8;text-decoration:line-through;">{{o.oldprice}}</span>
					</div>
				</div>
			</template>
		</div>
		<div style="width: 94%; height: auto;margin: 10px auto 0px auto;border-radius: 10px;">
			<van-button type="primary" color="#b83b5e" round block @click="gocheckout">确 定</van-button>
		</div>
	</div>
</template>

<script>
	import {
		getmemberMsg
	} from '../../comoon/api/member.js'
	export default {
		data() {
			return {
				memberMsg: [],
				sgen: 0,
				arr: [0, 1, 2, 3],
				cov: [],
				kiss: {},
				imgList: [{
						url: 'https://img1.baidu.com/it/u=2082392155,2008558989&fm=26&fmt=auto&gp=0.jpg'
					},
					{
						url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F141029%2F1-141029233613.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633662672&t=d21c12d74ba0f314ca1642c359474f3b'
					},
					{
						url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F140624%2F1-1406241Z241.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633662692&t=1c227409e488132c721a732077abe23d'
					},
					{
						url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01bbf3555075e4000000875c2bf9df.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633662740&t=1aa948acccae5a4c55bbb1cf680a1e86'
					}
				],
			}
		},
		mounted() {
			this.getdata();
		},
		methods: {

			gocheckout_member(o, index) {
				this.arr.splice(index, 1);
				for (let i = 0; i < this.arr.length; i++) {
					this.cov[i] = this.arr[i];
					this.$refs.ddd[this.cov[i]].style.background = '#f6f6f6';
					this.$refs.ddd[this.cov[i]].style.color = '#000000';
				}
				this.$refs.ddd[index].style.background = '#282c35';
				this.$refs.ddd[index].style.color = '#ffffff';
				this.arr.splice(index, 0, index);
				this.kiss = o
			},
			gocheckout() {
				this.$router.push({
					path: "/checkout_member",
					query: {
						oldprice: this.kiss.oldprice,
						price: this.kiss.price,
						typee: this.kiss.type
					}
				});
			},
			getdata() {
				getmemberMsg().then(res => {
					this.memberMsg = res;
				}, res => {
					console.log("error");
				})
			},
			onClickLeft() {
				this.$router.go(-1);
			},

		},
	};
</script>

<style scoped="scoped">
	#member_list {
		width: 33%;
		height: 160px;
		display: inline-block;
		margin-left: 36px;
		text-align: center;
		margin-top: 12px;
		border-radius: 10px;
		background-color: #f6f6f6;
		box-shadow: 5px 5px 10px #b8b8b8,
			-5px -5px 10px #ffffff;
	}

	#member_list:hover {
		background-color: #39A9ED;
	}
</style>
