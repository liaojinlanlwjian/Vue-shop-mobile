<template>
	<div>
		<van-nav-bar title="我的地址" left-arrow @click-left="onClickLeft" />
		<van-empty
		v-show="showw"
		style="height: 521px;"
		  class="custom-image"
		  :image="src"
		  description="咱们的宝贝应该寄往何方,我的宝"
		/>
		
		<van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
		<div v-show="show"  style="width: 92%; height: 50px; margin: 240px auto 0px auto;">
			<div>
				<van-button color="#6a2c70" round    block @click="huhu">确 定</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getAddress
	} from '../../comoon/api/address.js'
	export default {
		data() {
			return {
				www: '你的地址空空如也，快去添加吧',
				src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F006oOWahgy1ft00m3u8hxj30zk0qon6p.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632722250&t=568d51654289b27abdc96234fc900ce0',
				showw: false,
				show:true,
				chosenAddressId: '1',
				list: [],
				username: '',
				key:''
			};
		},
		mounted() {
			this.key = this.$route.query.key;
			let adc = localStorage.getItem('item');
			if(adc == null){
				this.show = false;
			}
			else if(adc != null){
				this.show = true;
			}
			this.getdata();
		},
		methods: {
			getdata() {
				this.username = this.$cookies.get('name');
				getAddress(this.username).then(res => {
					this.list = res;
					if (this.list.length == 0) {
						this.showw = true;
					} else {
						this.showw = false;
					}
				}, res => {
					console.log("error");
				})
			},
			huhu() {
				if(this.key == 1){
					this.$router.replace({
						path: "/unpaid",
						query: {
							idid: this.chosenAddressId,
						}
					})
				}
				else{
					this.$router.replace({
					path: "/jiesuan",
					query: {
						idid: this.chosenAddressId,
					}
				})
				}
				
			},
			backUser() {
				this.$router.push('/user');
			},
			onAdd() {
				this.$toast('新增地址');
				this.$router.push('/address_add');
			},
			onEdit(item, index) {
				this.$toast('编辑地址');
				this.$router.push({
					path: "/address_edit",
					query: {
						id: item.id,
						name: item.name,
						tel: item.tel,
						fieldValue: item.fieldValue,
						detail: item.detail,
						isDefault: item.isDefault,
						code: item.code
					}
				})
			},
			onClickLeft() {
				this.$router.push('/user');
			},
		},
	};
</script>

<style>
	.custom-image .van-empty__image {
	  width: 220px;
	  height: 140px;
	}
</style>
