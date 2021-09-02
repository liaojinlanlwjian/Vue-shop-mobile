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
				<van-image width="220" height="420" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013ab35ab88d6aa8012182076a35e6.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632725787&t=d1a46f0a3c5b1981c00fcbb03ffa8e15" />
			</div>
			<div style="text-align: center;"> 
				支付失败啦，请尽快支付哦
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  methods: {
	    onClickLeft() {
			this.$router.push('/unpaid');
	    },
	  },
	};
</script>

<style>
</style>
