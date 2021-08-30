<template>
	<div>
		<van-nav-bar title="收银台" left-arrow @click-left="onClickLeft" />
		<van-cell-group>
			<van-cell title="付款金额" :value="'¥' + '   ' + goodsMsg.step*goodsMsg.sale1 + '.00'" :label="address.name + '   ' + address.detail" />
		</van-cell-group>
		<div style="width: 100%; height: 30px; background-color: #efeff1;"> <span
				style="font-size: 12px; color: #444f5a; padding-left: 10px; line-height: 30px;">请选择支付方式</span> </div>
				
		<template v-for="(item,index) in zhifu"  >
			<div @click="fukuan(item)" style="width: 100%; height: 65px;background-color: #FFFFFF;display: flex; border-bottom: 1px solid #f5f5f6;">
				<div style="width: 15%; text-align: center;">
				<van-image style="padding-top: 8px;" width="45" height="45" :src="item.img" />
			</div>
			<div style="width: 80%;">
				<div style="height: 40px;"><span style="font-size: 14px; padding-left: 8px; line-height: 30px;">{{item.name}}</span></div>
				<div style="height: 10px;"><span style="font-size: 10px; padding-left: 8px; color: crimson;">{{item.dec}}</span></div>
			</div>
			<div style="width: 3%; line-height: 65px;">
				<van-icon name="arrow" size="15" />
			</div>
			</div>
			
		</template>

		
		
		<van-dialog v-model="show2" title="请支付" show-cancel-button @cancel="cancel" @confirm="confirm"
			:cancelButtonText="hhh" :confirmButtonText="www">
			<van-image width="100" height="100" :src="src"
				style="margin-left: 110px;" />
		</van-dialog>
	</div>
</template>

<script>
	import {
		addBuy,
		patchstatus
	} from '../../comoon/api/buy.js'
	import {
		delCar
	} from '../../comoon/api/car.js'
	export default {
		data() {
			return {
				address:[],
				src:'',
				show2: false,
				www: '已支付',
				hhh: '未支付',
				status:'未发货',
				goodsMsg:[],
				status_id:'',
				zhifu:[
					{
						img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.pc6.com%2Fup%2F2015-10%2F14444674655340116.png&refer=http%3A%2F%2Fpic.pc6.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647600&t=cc244fce45f4face603223be574735e7',
						name:'支付宝',
						dec:'首单随机立减，最高可减88元'
					},
					{
						img:'https://pic3.zhimg.com/v2-20074d0ad10c8b5b10b0f3428b7e2f72_xl.jpg',
						name:'微信支付',
						dec:'使用猪猪信用卡立减100元'
					},
					{
						img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgm.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20180419%2F2837899467706025762.jpg&refer=http%3A%2F%2Fimgm.gmw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647660&t=d4510d0c12ec2cd362401226ec681662',
						name:'银联分期',
						dec:'3期0费率'
					},
					{
						img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fadaf2edda3cc7cd9b05e30013201213fb90e91f2.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647721&t=76e4c1759dbf44b6c5870748381bfbe4',
						name:'花呗分期',
						dec:'3期0费率'
					},
					{
						img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fis3.mzstatic.com%2Fimage%2Fthumb%2FPurple69%2Fv4%2F8f%2F73%2Fba%2F8f73ba6d-b2ba-5bf5-bed2-f7db9280f3ad%2Fmzl.oubyllkd.png%2F0x0ss-30.jpg&refer=http%3A%2F%2Fis3.mzstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647766&t=2128fd6a6f7496e0519b419be9240e59',
						name:'掌上生活',
						dec:'请先安装移动端APP'
					}
			]
			};
		},
		mounted() {
			this.goodsMsg = JSON.parse(localStorage.getItem('item'));//JSON.parse() 方法将数据转换为 JavaScript 对象。
			this.address  = this.$route.query.address;
			this.token = this.$route.query.token;
			this.status_id = this.$route.query.status_id;
		},
		methods: {
			fukuan(o){
				this.show2 = true;
				if(o.name=='支付宝'){
					this.src= 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.pc6.com%2Fup%2F2015-10%2F14444674655340116.png&refer=http%3A%2F%2Fpic.pc6.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647600&t=cc244fce45f4face603223be574735e7';
				}
				else if(o.name=='微信支付'){
					this.src='https://pic3.zhimg.com/v2-20074d0ad10c8b5b10b0f3428b7e2f72_xl.jpg';
				}
				else if(o.name=='银联分期'){
					this.src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgm.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20180419%2F2837899467706025762.jpg&refer=http%3A%2F%2Fimgm.gmw.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647660&t=d4510d0c12ec2cd362401226ec681662';
				}
				else if(o.name=='花呗分期'){
					this.src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fadaf2edda3cc7cd9b05e30013201213fb90e91f2.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647721&t=76e4c1759dbf44b6c5870748381bfbe4';
				}
				else{
					this.src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fis3.mzstatic.com%2Fimage%2Fthumb%2FPurple69%2Fv4%2F8f%2F73%2Fba%2F8f73ba6d-b2ba-5bf5-bed2-f7db9280f3ad%2Fmzl.oubyllkd.png%2F0x0ss-30.jpg&refer=http%3A%2F%2Fis3.mzstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632647766&t=2128fd6a6f7496e0519b419be9240e59';
				}
			},	
			onClickLeft() {
				this.$router.go(-1);
			},
			confirm() {
				let that = this;
				if(this.token==undefined){
					let params = {	
					id:Math.round(Math.random() * 10000),
					address_id:that.address.id,
					status:that.www,
					goods_status:that.status,
					name:that.address.name,
					username:that.address.username,
					tel:that.address.tel,
					address:that.address.address,
					goods:[{
						id:that.goodsMsg.id,
						image_src:that.goodsMsg.image_src,
						name:that.goodsMsg.name,
						user:that.goodsMsg.user,
						sale:that.goodsMsg.sale1,
						step:that.goodsMsg.step,
					}]
				};
				addBuy(params).then(res=>{
					that.$toast.success('成功');
					delCar(that.goodsMsg.id);
					setTimeout(function(){
						that.$router.push('/pay');
					},1200 )
				},res=>{
					that.$toast.success('失败');
				})
				}
				else if(this.token == 1){
					let params = {
						status: this.www,
					};
					patchstatus(this.status_id, params).then(response => {
						that.$toast.success('成功');
						setTimeout(function(){
							that.$router.push('/unpaid');
						},1200 )
					}, response => {
						that.$toast.success('失败');
					})
				}
				
			},
			cancel() {
				let that = this;
				let params = {	
					id:Math.round(Math.random() * 10000),
					address_id:that.address.id,
					status:that.hhh,
					goods_status:that.status,
					name:that.address.name,
					username:that.address.username,
					tel:that.address.tel,
					address:that.address.address,
					goods:[{
						id:that.goodsMsg.id,
						image_src:that.goodsMsg.image_src,
						name:that.goodsMsg.name,
						user:that.goodsMsg.user,
						sale:that.goodsMsg.sale1,
						step:that.goodsMsg.step,
					}]
				};
				addBuy(params).then(res=>{
					this.$toast.success('请尽快支付哦');
					delCar(that.goodsMsg.id);
					setTimeout(function(){
						that.$router.push('/nopay');
					},1200 )
				},res=>{
					that.$toast.fail('失败');
				})
			},
		}
	};
</script>

<style>
</style>
