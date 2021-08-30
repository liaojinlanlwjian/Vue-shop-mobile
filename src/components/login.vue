<template>
	<div>
		<div style="width: 80%; height: 140px; margin: 0px auto; ">
			<van-form @submit="onSubmit">
				<div style="margin-top: 20px;">
					<van-cell-group>
						<van-field v-model="username" border clearable size="100" left-icon="manager-o"
							placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
					</van-cell-group>
				</div>

				<div style="margin-top: 15px;">
					<van-cell-group>
						<van-field v-model="psd" clearable size="100" left-icon="info-o" placeholder="密码"
							type="password" @blur="change" :rules="[{ required: true, message: '请填写密码' }]" />
					</van-cell-group>
				</div>
			</van-form>
		</div>
		<div style="width: 78%; height: 130px; margin: 20px auto;">
			<div>
				<van-button color="#27ad6e" :disabled="disabled" @click="sing" round block>Sing In</van-button>
			</div>

			<div style="margin-top: 20px;">
				<van-button color="#dbe2ef" round plain block>Return</van-button>
			</div>
		</div>
		<div style="width: 32%; height: 21px; margin: 0px auto; text-align: center;">
			<van-checkbox icon-size="15px" v-model="checked"><span
					style="color: #a880ab; font-size: 12px;">我同意用户手册</span></van-checkbox>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				username: '',
				psd: '',
				value: '',
				disabled: true,
				checked: false
			};
		},
		methods: {
			onSubmit(values) {
				console.log('submit', values);
			},
			change() {
				if (this.username != '' || this.psd != '') {
					this.disabled = false;
				}
				else{
					this.disabled = true;
				}
			},
			sing() {
				let that = this;//另外的方法 要定义成that
				if(that.checked==false){
					that.$toast.fail('请先勾选用户手册');
				}
				else{
					axios.get('http://localhost:3000/user/?name='+ that.username).then(response => {
						if (that.psd == response.data[0].psd) {
							//return;x	
							that.$cookies.set('name',response.data[0].name,1000000);
							that.$cookies.set('src',response.data[0].src,1000000);
							//有数据代理登录成功
							that.$toast.success('登陆成功哦哦哦');
							//延迟1000毫秒
							setTimeout(function() {
								that.$router.push({
									'path': '/index'
								}); //路由跳转用户中心
							}, 1500);
						
						} else {
							that.$toast.fail('密码错误');
						}
					}, response => {
						console.log("error");
					});
				}
				
			}
		}
	 }
</script>

<style>
</style>
