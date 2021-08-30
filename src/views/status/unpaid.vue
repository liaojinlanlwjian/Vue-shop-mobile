<template>
	<div style="background-color: #f5f5f6;height: auto;">
		<van-nav-bar
		  title="待付款"
		  left-arrow
		  @click-left="onClickLeft"
		/>
<van-empty
v-show="show"
style="height: 621px;"
  class="custom-image"
  image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
  description="还没有未付款的宝贝哦,我的宝"
/>
		<template v-for="item in received">
		<div style=" width: 94%; height: auto;margin: 10px auto 20px auto; border-radius: 18px;">
			<div style="width: 100%; height: auto; margin: 0px auto;  border-bottom: 1px solid #f5f5f6; ">
				<van-cell style=" border-radius: 18px 18px 0px 0px;" title="购买者" icon="bag-o" :value="item.name">
				</van-cell>
			</div>
			<div style="width: 100%;  margin: 0px auto; background-color: #FFFFFF;">
				<van-cell-group inset >
					<van-cell title="配送至"  :label="item.address"  />
					<van-cell title="状态" :value="item.status"/>
				</van-cell-group>
			</div>
			<template v-for="itemm in item.goods">
			<div style="width: 100%; height: auto; margin: 0px auto ; display: flex; background-color: #FFFFFF; ">
				<div style="width: 18%; height: auto; text-align: center; line-height: 50px; padding-left: 10px;">
					<van-image width="70" height="70" :src="itemm.image_src" />
					
				</div> 
				<div style="width: 80%; height: auto ;margin-left: 15px;">
					<div style=" line-height: 20px; font-size: 12px; margin-top: 10px;">
						<span style="padding-left: 1px;">{{itemm.name}}</span>
					</div>
					<div style="font-size: 12px;">
						<span style="padding-left: 3px; color: #aa96da;">{{ '账号用户：' + itemm.user}}</span>
						<span style="padding-left: 5px; color: #f08a5d;">{{ '数量：' + 'x' + itemm.step}}</span>
						<span style="padding-left: 8px; font-size: 16px; color: #b83b5e;">{{ '总价：' + '￥' + itemm.step*itemm.sale}}</span>
					</div>
				</div>
			</div>
			</template>
			<div style="width: 100%; height: 40px; margin: 0px auto;text-align: center; background-color: #FFFFFF; border-radius:0px 0px 18px 18px;">
					<van-row gutter="20" style="margin-bottom: 20px;">
						<van-col span="8">
							<van-button size="mini" color="#95e1d3" round @click="delPo(item)" >删除订单</van-button>
						</van-col>
						<van-col span="8">
							<van-button size="mini" round color="#11999e" @click="revPo(item)" >修改地址</van-button>
						</van-col>
						<van-col span="8">
							<van-button size="mini" round color="#aa96da" @click="goJiesuan(item)" >去支付</van-button>
						</van-col>
					</van-row>
			</div>
		</div>
		</template>
	</div>
</template>

<script>
	import {
		getpay,
		delpay
	} from '../../comoon/api/buy.js'
	import {
		getAddress_one
	} from '../../comoon/api/address.js'
	export default {
		data() {
			return{
				status:'未支付',
				username:'',
				received:[],
				token:1,
				token1:0,
				id:'',
				show:false,
				key:1,
				idid:'',
				address: [],
			};
		},
		mounted() {
			this.idid = this.$route.query.idid;
			this.getdata();
			this.getAddress();
		},
	  methods: {
		  delPo(o){
			  this.$dialog.confirm({
			    title: '删除订单',
			    message: '确定要删除这个订单么？',
			  })
			    .then(() => {
					delpay(o.id).then(res=>{
				  this.$toast.success('删除成功');
				  this.getdata();
			  },res=>{
				  this.$toast.success('删除失败');
			  })
			  
			    })
			    .catch(() => {
					console.log("error");
			    });
			 
		  },
		  revPo(o){
			  this.$router.push({path: "/address", query: {key: this.key}});
			
		  },
		  goJiesuan(item) {
		  	localStorage.setItem('item',JSON.stringify(item));//使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。 
			this.$router.push({path: "/jiesuan", query: {token: this.token,id:item.id}});
		  },
		  getAddress() {
			  if(this.idid == undefined){
			 return
			  }
			  else{
				  getAddress_one(this.idid).then(res => {
		  			this.address = res[0];
					this.received[0].address = this.address.address;
					this.received[0].name = this.address.name;
		  		}, res => {
		  			console.log("error");
		  		})
			  }
		  		
		  },
		 getdata(){
			 this.username = this.$cookies.get('name');
			 getpay(this.username,this.status).then(res=>{
				 this.received = res;
				 if(this.received.length == 0){
					 this.show = true;
				 }
				 else{
					 this.show = false;
				 }
			 },res=>{
				 console.log("error");
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
	    width: 90px;
	    height: 90px;
	  }
</style>
