<template>
	<div>
		<form action="/">
			<van-search v-model="value" show-action :autofocus="focus" placeholder="请输入搜索关键词" @search="onSearch"
				@cancel="onCancel" />
		</form>
		<div style="width: 94%; height: 80px;  margin: 0px auto;">
			<div><span style="color: gray;font-size: 12px;">搜索历史</span></div>
			<div style="margin-top: 18px; margin-left: 8px;">
				<van-tag round type="primary" color="#00b8a9" @click="mobliee">手机</van-tag>
				<van-tag round type="primary" color="#ffaaa6" @click="meizhuang">美妆</van-tag>
				<van-tag round type="primary" color="#d59bf6" @click="nvzhuang">女装</van-tag>
				<van-tag round type="primary" color="#99ddcc" @click="computerr">电脑</van-tag>
				<van-tag round type="primary" color="#00e0ff" @click="zhuzhu">猪头</van-tag>
			</div>
		</div>

		<template v-for="(item,index) in carList">
			<van-swipe-cell>
				<van-card style="margin-top: 8px;" :price="item.sale1 * item.step"
					 :title="item.name" :thumb="item.image_src">
				</van-card>
			</van-swipe-cell>
		</template>
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
				focus: true,
				value: '',
				carList: [],
				moblieee:'手机',
				nvzhuangg:'女装',
				meizhuangg:'美妆',
				zhuzhuu:'猪猪',
				computer:'电脑',
			};
		},
		mounted() {
			this.getdata();
		},
		methods: {
			mobliee(){
				this.$router.push({path: "/searchpage", query: {keywords: this.moblieee}})
			},
			meizhuang(){
				 this.$router.push({path: "/searchpage", query: {keywords: this.meizhuangg}})
			},
			nvzhuang(){
				 this.$router.push({path: "/searchpage", query: {keywords: this.nvzhuangg}})
			},
			zhuzhu(){
				 this.$router.push({path: "/searchpage", query: {keywords: this.zhuzhuu}})
			},
			computerr(){
				this.$router.push({path: "/searchpage", query: {keywords: this.computer}})
			},
			getdata() {
				this.user = this.$cookies.get('name');
				getCar(this.user).then(res => {
					this.carList = res;
				}, res => {
					console.log("error")
				})
			},
			onSearch(val) {
				this.$toast(val);
				this.$router.push({path: "/searchpage", query: {keywords: val}})
			},
			onCancel() {
				this.$router.go(-1);
			},
		},
	};
</script>

<style>
</style>
