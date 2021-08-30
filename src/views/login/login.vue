<template>
	<div>
		<div>
			<van-nav-bar
			  title="登录"
			  left-arrow
			/>
		</div>
		<div>
			<van-image width="100%" height="220" src="https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
		</div>
		<div style="margin-top: -7px;" >
			<van-tabs v-model="active" animated background="#ededf9" color="#9664df" title-active-color="#795ae4"
				title-inactive-color="#585858">
				<van-tab v-for="index in 2" :title="(index>1) ? 'Sing Up' : 'Sing In'" :key="index">
					<template v-if="index==1">
						<Login></Login>
					</template>
					<template v-if="index==2">
						<Enroll></Enroll>
					</template>
				</van-tab>
			</van-tabs>
		</div>

	</div>
</template>

<script>
	import Login from '../../components/login.vue'
	import Enroll from '../../components/enroll.vue'
	export default {
		data() {
			return {
				active:'',
				value: '',
			};
		},
		components: {
			Login,
			Enroll
		},
		methods: {
			onSearch() {
				console.log("search");
			},
			 onClickLeft() {
			      Toast('返回');
			    },
			    onClickRight() {
			      Toast('按钮');
			    },
		}
	};
</script>

<style>
</style>
