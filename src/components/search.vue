<template>
	<div>
		<div style="display: flex; height: 60px; margin: 0px auto; width: 90%; ">
			<div style="width: 10%; height: 60px;line-height: 75px; text-align: center;  ">
					<van-image
					  round
					  width="2rem"
					  height="2rem"
					  :src="src"
					/>
			</div>
			<div style="width: 70%;">
				<van-search shape="round" background="#f7f8fa" @click="goSearch"  clearable v-model="value"  placeholder="请输入搜索关键词"
					@search="onSearch">
				</van-search>
			</div>
			<div style="width: 10%; height: 60px; line-height: 60px; text-align: center;">
				<van-icon name="point-gift-o" size="24px" color="#9e0030" />
			</div>
			<div style="width: 10%; height: 60px; line-height: 60px; text-align: center;">
					<van-icon name="chat-o"  size="24px" badge="6"  />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				src:'',
				value: '',
			};
		},
		mounted() {
			this.src = this.$cookies.get('src');
			//权限判定是否已登录，没有登录跳转到登录页面；
			if (this.src == null) {
				this.$router.push({
					'path': '/login'
				}); //跳转到登录页面
			}
		},
		methods: {
			goSearch(){
				this.$router.push('/search');
			},
			onSearch() {
				console.log("search");
			}
		}
	};
</script>

<style>
</style>
