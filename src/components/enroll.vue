<template>
	<div>
		<div style="width: 80%; height: auto; margin: 0px auto; ">
			<div style="margin-top: 10px;">
				<van-cell-group>
					<van-field v-model="username1" border clearable size="100" left-icon="manager-o" placeholder="用户名" 
					:rules="[{ required: true, message: '请填写用户名' }]"
					/>
				</van-cell-group>
			</div>
	
			<div style="margin-top: 20px;">
				<van-cell-group>
					<van-field v-model="psd1" clearable type="password" size="100" left-icon="info-o" placeholder="密码" 
					:rules="[{ required: true, message: '请填写密码' }]"
					/>
				</van-cell-group>
			</div>
			
			<div style="margin-top: 20px;">
				<van-cell-group>
					<van-field v-model="email" clearable size="100" left-icon="envelop-o" placeholder="邮箱"
					 :rules="[{ required: true, message: '请填写邮箱' }]"
					 />
				</van-cell-group>
			</div>
			
			<div style="margin-top: 20px;">
				<van-cell-group>
					<van-field v-model="tel" clearable size="100" @blur="change" left-icon="phone-o" placeholder="电话号码"
					 :rules="[{ required: true, message: '请填写电话号码' }]"
					 />
				</van-cell-group>
			</div>
			
		</div>
		<div style="width: 78%; height: 50px; margin: 20px auto 0px;">
			<div>
				<van-button color="#9864e0" round  :disabled="disabled"  block @click="Enroll">Sing Up</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getEnroll
	} from '../comoon/api/login.js'
	export default {
		data() {
			return {
				disabled: true,
				username1: '',
				psd1: '',
				email:'',
				tel:'',
			};
		},
		methods: {
			change() {
				if (this.username1 != '' || this.psd1 != '' || this.email!= '' || this.tel != '') {
					this.disabled = false;
				}
				else{
					this.disabled = true;
				}
			},
			getTime(){
				var date = new Date();
				    var month = date.getMonth() + 1;
				    var strDate = date.getDate();
				    if (month >= 1 && month <= 9) {
				        month = "0" + month;
				    }
				    if (strDate >= 0 && strDate <= 9) {
				        strDate = "0" + strDate;
				    }
				    this.currentDate = date.getFullYear() + "-" + month + "-" + strDate
				            + " " + date.getHours() + ":" + date.getMinutes();
				console.log(this.currentDate);
			},
			Enroll(){
				this.getTime();
					let params ={
						id: Math.round(Math.random() * 10000),
						name: this.username1,
						psd: this.psd1,
						email:this.email,
						tel:this.tel,
						time:this.currentDate,
					};
					getEnroll(params).then(response => {
						this.$toast.success('注册成功');
						setTimeout(function(){
							window.location.reload();
						},1500)
						
					}, response => {
						this.$toast.fail('注册失败');
					})
				},
			onSearch() {
				console.log("search");
			}
		}
	};
</script>

<style>
</style>
