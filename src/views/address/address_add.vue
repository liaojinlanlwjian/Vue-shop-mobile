<template>
	<div>
		<van-nav-bar
		  title="新增地址"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<div style="width: 80%; height: auto; margin: 0px auto; ">
			<van-form>
				<div style="margin-top: 20px;">
					<van-cell-group>
						<van-field v-model="name" border clearable size="100" left-icon="manager-o" placeholder="姓名"
							:rules="[{ required: true, message: '请填写姓名' }]" />
					</van-cell-group>
				</div>

				<div style="margin-top: 15px;">
					<van-cell-group>
						<van-field v-model="tel" clearable size="100" left-icon="info-o" placeholder="联系方式"
							:rules="[{ required: true, message: '请填写正确的电话号码' }]" />
					</van-cell-group>
				</div>

				<div style="margin-top: 20px;">
					<van-cell-group>
						<van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区"
							@click="show = true" />
						<van-popup v-model="show" round position="bottom">
							<van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options"
								@close="show = false" @finish="onFinish" />
						</van-popup>
					</van-cell-group>
				</div>

				<div style="margin-top: 20px;">
					<van-cell-group>
						<van-field v-model="detail" border clearable size="100" left-icon="manager-o" placeholder="详细地址"
							:rules="[{ required: true, message: '请填写详细地址' }]" />
					</van-cell-group>
				</div>


				<div style="margin-top: 20px;">
					<van-cell-group>
						<van-field v-model="code" border clearable size="100" left-icon="manager-o" placeholder="邮政编码"
							:rules="[{ required: true, message: '请填写邮政编码' }]" />
					</van-cell-group>
				</div>


				<div style="margin-top: 20px;">
					<van-checkbox v-model="checked" checked-color="#ee0a24">是否设为默认地址</van-checkbox>
				</div>
			</van-form>
		</div>
		<div style="width: 78%; height: 130px; margin: 20px auto;">
			<div>
				<van-button color="#27ad6e" @click="onSave" round block>确定</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		addAddress
	} from '../../comoon/api/address.js'

	export default {
		data() {
			return {
				checked: false,
				username:'',
				name: '',
				tel: '',
				detail: '',
				code: '',
				show: false,
				fieldValue: '',
				cascaderValue: '',
				// 选项列表，children 代表子选项，支持多级嵌套
				options: [{
						text: '浙江省',
						value: '330000',
						children: [{
							text: '杭州市',
							value: '浙江省杭州市'
						}],
					},
					{
						text: '江苏省',
						value: '320000',
						children: [{
							text: '南京市',
							value: '江苏省南京市'
						}],
					},
				],
			};
		},
		methods: {
			onSave() {
				this.username = this.$cookies.get('name');
				let params = {
					id : Math.round(Math.random() * 10000),
					username : this.username,
					name:this.name,
					tel : this.tel,
					code : this.code,
					address : this.fieldValue + this.detail,
					fieldValue:this.fieldValue,
					detail:this.detail,
					isDefault : this.checked
				};
				addAddress(params).then(res=>{
				 this.$toast('save');
				},res=>{
				 this.$toast.fail('error');
				}
				)
				console.log(this.cascaderValue);
				this.$toast('save');
				this.$router.push('/address');
			},
			onFinish({
				selectedOptions
			}) {
				this.show = false;
				this.fieldValue = selectedOptions.map((option) => option.text).join('/');
			},
			  onClickLeft() {
			      this.$router.push('/address');
			    },
		},
	};
</script>

<style>
</style>
