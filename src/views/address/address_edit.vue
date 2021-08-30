<template>
	<div>
		<van-nav-bar
		  title="编辑地址"
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
		<div style="width: 78%; height: 30px; margin: 40px auto;">
			<div>
				<van-button color="#27ad6e" @click="onSave" round block>确定</van-button>
			</div>
		</div>
		<div style="width: 78%; height: 30px; margin: 20px auto;">
			<div>
				<van-button color="#b83b5e" @click="onDel" round block>删除</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		changeAddress,
		delAddress
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
		mounted() {
			this.id = this.$route.query.id;
			this.name = this.$route.query.name;
			this.tel = this.$route.query.tel;
			this.code = this.$route.query.code;
			this.detail = this.$route.query.detail;
			this.detail = this.$route.query.detail;
			this.isDefault = this.$route.query.isDefault;
			
		},
		methods: {
			onDel(){
				delAddress(this.id).then(res=>{
					this.$toast('删除成功');
					setTimeout(function(){
						history.go(-1);
					},1500);
				},res=>{
					this.$toast('删除失败');
				})
			},
			onSave() {
				this.username = this.$cookies.get('name');
				let params = {
					name:this.name,
					tel : this.tel,
					code : this.code,
					address : this.fieldValue + this.detail,
					fieldValue:this.fieldValue,
					detail:this.detail,
					isDefault : this.checked
				};
				changeAddress(this.id,params).then(res=>{
				 this.$toast('修改成功');
				},res=>{
				 this.$toast.fail('error');
				}
				)
				this.$toast('save');
				setTimeout(function(){
					history.go(-1);
				},1500);
				
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
