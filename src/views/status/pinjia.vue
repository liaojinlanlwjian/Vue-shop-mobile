<template>
	<div style="background-color: #f5f5f6; height: 666px;">
		<van-nav-bar title="评价" right-text="提交" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<template>
			<div style=" width: 100%; height: auto; border-bottom: 1px solid #f5f5f6 ;">
				<div style="width: 100%; height: 110px; display: flex; background-color: #FFFFFF;">
					<div style="width: 18%; height: auto; text-align: center; line-height: 50px; padding-left: 10px;">
						<van-image width="70" height="70" :src="image_src" />

					</div>
					<div style="width: 80%; height: auto ;margin-left: 15px;">
						<div style=" line-height: 20px; font-size: 12px; margin-top: 10px;">
							<span style="padding-left: 1px;">{{user}}</span>
						</div>
						<div style="font-size: 12px;">
							<span style="padding-left: 2px; color: #aa96da;">{{ '账号用户：' + name}}</span>
							<span style="padding-left: 5px; color: #f08a5d;">{{ '数量：' + 'x' + step}}</span>
							<span
								style="padding-left: 8px; font-size: 15px; color: #b83b5e;">{{ '总价：' + '￥' + step*sale}}</span>
						</div>
					</div>
				</div>
				<div style="width: 100%; height: 45px;  background-color: #FFFFFF; ">
					<van-cell title="商品评价" value="满意请给5星哦" />
				</div>
				<div style="width: 100%; height: 35px;  background-color: #FFFFFF; ">
					<span style="padding-left: 20px;">商品评价&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<van-rate v-model="value" />
				</div>
				<div style="width: 100%; height: 45px;  background-color: #FFFFFF; ">
					<van-cell title="物流服务评价" value="满意请给5星哦" />
				</div>
				<div style="width: 100%; height: 35px;  background-color: #FFFFFF; ">
					<span style="padding-left: 20px;">快递包装&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<van-rate v-model="value1" />
				</div>
				<div style="width: 100%; height: 35px;  background-color: #FFFFFF;">
					<span style="padding-left: 20px;">送货速度&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<van-rate v-model="value2" />
				</div>
				<div style="width: 100%; height: 35px;  background-color: #FFFFFF;">
					<span style="padding-left: 20px;">配送员配送</span>
					<van-rate v-model="value3" />
				</div>

				<div style="width: 100%; height: 45px;  background-color: #FFFFFF; ">
					<van-cell title="留下你的评价吧" />
				</div>

				<div style="width: 100%; height: 155px;  background-color: #FFFFFF;  border-radius: 0px 0px 18px 18px;">
					<van-field v-model="message" rows="2" autosize label="留言" type="textarea" maxlength="50"
						placeholder="请输入留言" show-word-limit />
				</div>
			</div>
		</template>


	</div>
</template>

<script>
	import {
		getpinjia,
		patchpinjia,
		delpinjia
	} from '../../comoon/api/buy.js'
	export default {
		data() {
			return {
				value: 4,
				value1: 0,
				value2: 0,
				value3: 0,
				name: '',
				id: '',
				sale: '',
				image_src: '',
				step: '',
				user: '',
				message: '',
				status:'已评价',
				gomaizhe:''
			};
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.gomaizhe = this.$cookies.get('gomaizhe');
			this.id = this.$route.query.id;
			this.user = this.$route.query.name;
			this.image_src = this.$route.query.src;
			this.sale = this.$route.query.sale;
			this.step = this.$route.query.step;
		},
		methods: {
			onClickRight() {
				let that = this;
				let params = {
					value:that.value,
					value1:that.value1,
					value2:that.value2,
					value3:that.value3,
					message:that.message,
					status:that.status,
					gomaizhe:that.gomaizhe,
				};
				that.$toast('评价成功');
				patchpinjia(that.id,params);
				setTimeout(function(){
					that.$router.push('/daipinjia');
				},1500);
			},
			onClickLeft() {
				this.$router.go(-1);
			},
		}
	}
</script>

<style>
</style>
