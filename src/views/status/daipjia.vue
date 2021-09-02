<template>
	<div>
		<van-nav-bar title="待评价" left-arrow @click-left="onClickLeft" />
		
		<van-empty v-show="show" style="height: 621px;" class="custom-image"
			image="https://tse1-mm.cn.bing.net/th/id/R-C.43431104bd55623b929ddc40aa678c81?rik=jH2Aq4B7%2fy6WHg&riu=http%3a%2f%2fbgoo.amos.vip%2fimage%2fbj_baobei.png&ehk=hjsTX1%2f5cOOrD8GgSHMqD1urK1HSLH%2fjVCteppVGBMk%3d&risl=&pid=ImgRaw&r=0"
			 description="还没有待评价的宝贝哦,我的宝" />
		<template v-for="item in pinjia">
			<div style=" width: 94%; height: auto;margin: 10px auto 20px auto; border-bottom: 1px solid #f5f5f6 ;">
				<template>
					<div style="width: 100%; height: 110px; margin: 0px auto 20px auto;display: flex; background-color: #FFFFFF;  border-radius: 0px 0px 18px 18px;">
						<div style="width: 18%; height: auto; text-align: center; line-height: 50px; padding-left: 10px;">
							<van-image width="70" height="70" :src="item.image_src" />
		
						</div>
						<div style="width: 80%; height: auto ;margin-left: 15px;">
							<div style=" line-height: 20px; font-size: 12px; margin-top: 10px;">
								<span style="padding-left: 1px;">{{item.name}}</span>
							</div>
							<div style="font-size: 12px;">
								<span style="padding-left: 2px; color: #aa96da;">{{ '账号用户：' + item.user}}</span>
								<span style="padding-left: 5px; color: #f08a5d;">{{ '数量：' + 'x' + item.step}}</span>
								<span
									style="padding-left: 8px; font-size: 15px; color: #b83b5e;">{{ '总价：' + '￥' + item.step*item.sale}}</span>
							</div>
							<div style=" line-height: 20px;  margin-top: 10px; margin-left: 220px;">
								<van-button  type="primary" color="#46cdcf" size="mini" @click="gopinjia(item)">去评价</van-button>
							</div>
						</div>
					</div>
				</template>
			</div>
		
		
		</template>
	</div>
</template>

<script>
	import {
	getpinjia
	} from '../../comoon/api/buy.js'
	export default{
		data() {
			return{
				show: false,
				pinjia:[],
				name:'',
				status:'未评价'
			};
		},
		mounted() {
			this.name = this.$cookies.get('name');
			this.getdata();
		},
		methods:{
			gopinjia(item){
				this.$router.push({path: "/pinjia", query: {id: item.id , name:item.name , src:item.image_src , sale:item.sale, step:item.step}})
			},
			getdata(){
				getpinjia(this.name,this.status).then(res=>{
					this.pinjia = res;
					if(this.pinjia.length != 0){
						this.show = false
					}
					else{
						this.show = true
					}
				},res=>{
					console.log("error");
				})
			},
			onClickLeft() {
				this.$router.push('/user');
			},
		}
	}
</script>

<style>
</style>
