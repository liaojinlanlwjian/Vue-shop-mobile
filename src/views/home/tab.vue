<template>
	<div>
		<template>
			<router-view />
		</template>
		<template>
			<van-tabbar v-model="active" @change="Jump">
				<van-tabbar-item name="index" icon="home-o">首页</van-tabbar-item>
				<van-tabbar-item name="type" icon="qr">分类</van-tabbar-item>
				<van-tabbar-item name="cart" icon="cart-o">购物车</van-tabbar-item>
				<van-tabbar-item name="user" icon="manager-o">我的</van-tabbar-item>
			</van-tabbar>
		</template>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 'index',
			};
		},

		methods: {
			Jump() {
				this.$router.push('/' + this.active);
			}
		},
		mounted() {
			this.active = this.$route.name;
		}
	};
</script>

<style>
</style>
