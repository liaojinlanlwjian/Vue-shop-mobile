<template>
	<div style="height: auto; background-color: #f7f8fa;">
		<div>
			<Search></Search>
		</div>
		<div style="width: 94%; height: 180px; margin: 0px auto; border-radius: 17px; ">
			<van-swipe class="my-swipe" :autoplay="3000" :height="180" indicator-color="white"
				style="width: 100%; border-radius: 17px;">
				<van-swipe-item v-for="(image, index) in imgList" :key="index"><img style="width: 100%; height: 180px;"
						:src="image.url" /></van-swipe-item>
			</van-swipe>
		</div>
		<div style="margin: 5px auto; text-align: center;">
			<van-row gutter="20">
				<van-col span="8">
					<van-icon color="darkgray" size="10px" name="fire-o" /><span
						style="padding-left: 5px; font-size: 10px; color: darkgray;">正品保障</span>
				</van-col>
				<van-col span="8">
					<van-icon color="darkgray" size="10px" name="medal-o" /><span
						style="padding-left: 5px; font-size: 10px; color: darkgray;">官方商城</span>
				</van-col>
				<van-col span="8">
					<van-icon color="darkgray" size="10px" name="certificate" /><span
						style="padding-left: 5px; font-size: 10px; color: darkgray;">售后无忧</span>
				</van-col>
			</van-row>
		</div>
		<div style="width: 94%;margin: 20px auto; border-radius: 17px; background-color: #FFFFFF;">
			<van-grid :gutter="8" :border="false">
				<van-grid-item v-for="(value,index) in iconList" :key="index" :icon="value.icon" :text="value.text" />
			</van-grid>
		</div>

		<div style="width: 94%; height: 100px; margin: 15px auto; border-radius: 17px; ">
			<van-image width="100%" height="100" radius="17px"
				src="https://tse1-mm.cn.bing.net/th/id/R-C.cb6c4928558252af12759186d0752338?rik=%2f24VLVjePGjikQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40005%2f2373.jpg_wh860.jpg&ehk=Bwy376Q5%2fmcYSigfpjVxFeSrRUKzT0CMCeDGMjdM1y8%3d&risl=&pid=ImgRaw&r=0" />
		</div>

		<div style="margin: 15px auto; height: auto;">
			<van-row>
				<van-col v-for="(item,index) in goodsList" :key="index" span="12" @click="buyGoods(item)"
					style="width: 45%; height: auto; border-radius: 17px; background-color: #FFFFFF; margin-top: 20px;margin-left: 10px; ">
					<div style="width: 80%; height: 170px; margin: 0px auto;">
						<van-image width="100%" height="10rem" :src="item.image_src" />
					</div>
					<div
						style="overflow: hidden; width: 94%; height: 15px; font-size: 12px;  padding-left: 5px; margin-top: 10px;">
						<span>{{item.name}}</span>
					</div>
					<div
						style="color: crimson;font-size: 12px; padding-left: 5px; margin-top: 10px; margin-bottom: 10px;">
						<span>{{item.sale}}</span>
					</div>
				</van-col>
			</van-row>

		</div>
	</div>
</template>

<script>
	import Search from '../../components/search.vue'
	import {
		getIcon,
		getGoods
	} from '../../comoon/api/index.js'

	export default {
		data() {
			return {
				iconList: [],
				goodsList: [],
				status: true,
				imgList: [{
						url: 'https://img.zcool.cn/community/0114605a556e2ca80120121fa27fba.jpg@2o.jpg'
					},
					{
						url: 'https://img.zcool.cn/community/01f6f35a1d272ea801217132d74515.jpg@1280w_1l_2o_100sh.jpg'
					},
					{
						url: 'https://img.zcool.cn/community/0134bb582ec1e5a84a0e282bf4c133.jpg@1280w_1l_2o_100sh.jpg'
					},
					{
						url: 'https://www.2kss.com/wp-content/uploads/2018/12/2018122614571311.jpg'
					},

				],
			}
		},
		components: {
			Search
		},
		mounted() {
			this.geticon();
			this.getgoods();
		},
		methods: {
			buyGoods(o) {
				localStorage.setItem('item', JSON.stringify(o));
				this.$router.push({
					path: "/detail",
					query: {
						id: o.id,
						name: o.name,
						color: o.color,
						size: o.size,
						src: o.image_src,
						srcc: o.src,
						sale: o.sale,
						detail_src: o.detail_src,
						save: o.save,
						delivery:o.delivery,
						Nowsave:o.Nowsave
					}
				})
			},
			geticon() {
				getIcon().then(response => {
					this.iconList = response;
				}, response => {
					console.log("error");
				})
			},

			getgoods() {

				getGoods(this.status).then(response => {
					this.goodsList = response;
				}, response => {
					console.log("error");
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.notice-swipe {
		height: 25px;
		line-height: 25px;
		font-size: 14px
	}
</style>
