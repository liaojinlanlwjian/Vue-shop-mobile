<template>
	<div style="height: auto; background-color: #f8f8f8;">
		<div style="width: 100%; height: 200px; background-color: #b83b5e; border-radius: 0px 0px 80px 80px;">
			<div style="width: 100%; height: 30px;display: flex;">
				<div style="width: 80%;"></div>
				<div style="width: 20%; line-height: 38px; display: flex; font-size: 21px; color: #FFFFFF;">
					<div style="width: 48%;" @click="out">
						<van-icon name="setting-o" />
					</div>
					<div style="width: auto; height: auto;  position: absolute; top: 2.8%; right: 49px;"
						v-show="show">
						<van-button plain size="mini" color="#a8d8ea"  type="primary" @click="backLogin">退出</van-button>
						</div>
					<div>
						<van-icon name="point-gift-o" badge="9" />
					</div>
				</div>

			</div>
			<div style="width: 100%; height: 110px; display: flex;">
				<div style="width: 40%; height: 110px; text-align: center;">
					<van-image round width="5rem" height="5rem" :src="src" @click="xiugaiTx" />
				</div>
				<van-popup v-model="show_img" style="width: 280px; height: 240px;">
					<van-form @submit="onSubmit">
					  <van-field
					    v-model="new_src"
					    name="头像"
					    label="头像"
					    placeholder="头像"
					    :rules="[{ required: true, message: '请填写链接' }]"
					  />
					  <div style="width: 100%; height: auto; margin: 0px auto;text-align: center;">
						  <van-image round width="5rem" height="5rem" :src="new_src" />
					  </div>
					  <div style="margin: 16px;">
					    <van-button round block type="info" native-type="submit">提交</van-button>
					  </div>
					</van-form>
					
				</van-popup>
				<div style="width: 58%; height: 110px;">
					<div style="height: 50px; line-height: 50px; color: #FFFFFF;">{{name}}</div>
					<div style="height: 50px; line-height: 20px; font-size: 12px;">
						<van-icon color="#ffde7d" name="fire-o" />
						<van-tag color="#d4a5a5" @click="goMember">{{member}}</van-tag>
					</div>
				</div>
			</div>
		</div>
		<div
			style="width: 94%; height: 70px; background-color: #FFFFFF; margin: -58px auto 0px auto; border-radius: 18px;">
			<van-row style="margin: 0px auto;">
				<van-col @click="gopoints" style="width: 25%; height: 70px; text-align: center;font-size: 13px; line-height: 35px;" span="6">
					<div>0.00</div>
					<div>积分</div>
				</van-col>
				<van-col @click="goyouhui" style="width: 25%; height: 70px; text-align: center;font-size: 13px; line-height: 35px;" span="6">
					<div>0.00</div>
					<div>优惠券</div>
				</van-col>
				<van-col @click="goticket" style="width: 25%; height: 70px; text-align: center;font-size: 13px; line-height: 35px;" span="6">
					<div>未开通</div>
					<div>小金库</div>
				</van-col>
				<van-col @click="gobalance" style="width: 25%; height: 70px; text-align: center;font-size: 13px; line-height: 35px;" span="6">
					<div>0.00</div>
					<div >我的余额</div>
				</van-col>
			</van-row>
		</div>
		<div
			style="width: 94%; height: auto; background-color: #FFFFFF; margin: 10px auto 0px auto; border-radius: 18px;">
			<div>
				<van-cell style=" border-radius: 18px; font-size: 14px; font-weight: 700;" title="我的订单" />
			</div>
			<div style="font-size: 8px;">
				<van-grid :column-num="5" :border="false">
					<van-grid-item icon="send-gift-o" text="待付款" @click="gounpaid" />
					<van-grid-item icon="shop-o" text="待收货" @click="goreceived" />
					<van-grid-item icon="description" text="待评价"  @click="gopinjia"  />
					<van-grid-item icon="logistics" text="全部订单" @click="goallpo"  />
					<van-grid-item icon="location-o" @click="goAddress" text="我的地址" />
				</van-grid>
			</div>
			<div style="width: 94%; height: 100px; margin: 0px auto;  border-radius: 17px; ">
				<van-image width="100%" height="90" radius="17px"
					src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aef75ec2952ba8012148142a61d2.png%402o.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632554971&t=3c75177f96dd359b72736807d59e299d" />
			</div>
		</div>

		<div
			style="width: 94%; height: auto; background-color: #FFFFFF; margin: 10px auto 60px auto; border-radius: 18px;">
			<div>
				<van-cell style=" border-radius: 18px; font-size: 14px; font-weight: 700;" title="我的商城" />
			</div>
			<div style="width: 94%; height: 100px; margin: 0px auto;  border-radius: 17px; ">
				<van-image width="100%" height="90" radius="17px"
					src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e8215aab281ca80121246d943b15.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632555513&t=19430cf1a2db5d48be09584d25773a22" />
			</div>
			<div>
				<van-grid square :border="false">
					<van-grid-item v-for="(item,value) in shch" :key="value" :icon="item.icon" :text="item.text"
						:icon-color="item.color"  @click="showNotify" />
				</van-grid>
			</div>
		</div>
		<div style="width: 100%; height: 30px; background-color: #FFFFFF;">

		</div>


	</div>
</template>

<script>
	import Notify from '../../components/notify.vue'
	import {
		changeUser
	} from '../../comoon/api/login.js'
	import {
		getmemberMsg_one
	} from '../../comoon/api/member.js'
	export default {
		data() {
			return {
				member:'',
				new_src:'',
				show: false,
				show_img:false,
				name: '',
				id:'',
				idd:'',
				src: '',
				shch: [{
						text: '会员频道',
						icon: 'gem-o',
						color: '#ffd460'
					},
					{
						text: '邀请有礼',
						icon: 'friends-o',
						color: '#6fe7dd'
					},
					{
						text: '教育商店',
						icon: 'shop-collect-o',
						color: '#cabbe9'
					},
					{
						text: '喵喵智慧屋',
						icon: 'smile-comment-o',
						color: '#9896f1'
					},
					{
						text: '生活权益',
						icon: 'hotel-o',
						color: '#e84a5f'
					},
					{
						text: '消暑碎冰沙',
						icon: 'bulb-o',
						color: '#00e0ff'
					},
					{
						text: '联系客服',
						icon: 'service-o',
						color: '#8c82fc'
					},
					{
						text: '福利中心',
						icon: 'point-gift-o',
						color: '#0dceda'
					}
				]
			};
		},
		components:{
			Notify
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.src = this.$cookies.get('src');
			this.id = this.$cookies.get('id');
			
			this.getdata();
			this.token = this.$cookies.get('token');
			
			//权限判定是否已登录，没有登录跳转到登录页面；
			if (this.name == null) {
				this.$router.push({
					'path': '/login'
				}); //跳转到登录页面
			}
			this.getdata();
		},
		methods: {
			goMember(){
				this.$router.push('/member');
			},
			xiugaiTx(){
				this.show_img = true;
			},
			onSubmit(values) {
				  let params = {
					  src:this.new_src
				  };
				  changeUser(this.id,params).then(res=>{
					  this.$cookies.remove('src');
					  this.$cookies.set('src',this.new_src);
					  this.show_img = false;
					  this.$router.go(0)
				  },res=>{
					  console.log("fuck");})
			    },
			gobalance(){
				this.$router.push('/balance');
			},
			goticket(){
				this.$router.push('/ticket');
			},
			goyouhui(){
				this.$router.push('/youhui');
			},
			gopoints(){
				this.$router.push('/point');
			},
			showNotify(){
				this.$notify({ type: 'danger', message: '该功能还未实现' });
			},
			gounpaid(){
				this.$router.push('/unpaid');
			},
			goallpo(){
				this.$router.push('/allpo');
			},
			gopinjia(){
				this.$router.push('/daipinjia');
			},
			goreceived(){
				this.$router.push('/received');
			},
			goAddress() {
				let adc = localStorage.removeItem('item');
				this.$router.push('/address');
			},
			backLogin() {
				console.log(this.$cookies.get('name'));
				this.$cookies.remove('name');
				if (this.$cookies.get('name') == null) {
					this.$router.push({
						'path': '/login'
					}); //跳转到登录页面
				}
			},
			out() {
				this.show = !this.show;
			},
			//获取用户的会员信息
			getdata() {
				this.idd = this.$cookies.get('id'),
				getmemberMsg_one(this.idd).then(res=>{
					this.member = res[0].member;
					if(this.member == '未开通'){
						this.member = '开通会员'
					}
					else if(this.member == '已开通'){
						this.member = 'v1'
					}
				},res=>{
					console.log("error");
				})
			}
		}
	};
</script>

<style>
</style>
