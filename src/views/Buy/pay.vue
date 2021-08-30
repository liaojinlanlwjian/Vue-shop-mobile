<template>
	<div>
		<van-nav-bar
		  title="付款成功"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<div  style="margin: 10px auto;">
			<div style="text-align: center;">
				<van-image width="220" height="220" src="https://img0.baidu.com/it/u=1733329799,3229859087&fm=26&fmt=auto&gp=0.jpg" />
			</div>
			<div style="text-align: center;"> 
				购买成功
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  methods: {
	    onClickLeft() {
			this.$router.push('/cart');
	    },
	  },
	};
</script>

<style>
</style>
