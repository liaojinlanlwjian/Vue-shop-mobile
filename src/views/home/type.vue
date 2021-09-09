<template>
	<div style="height: auto; background-color: #f7f8fa;">
		<div>
			<Search></Search>
		</div>
		<div style="height: 651px;">
			<van-tree-select height="651" :items="items" :main-active-index.sync="active">
			<template #content>
				<van-row gutter="20">
					<van-col style="width:100px; height: 100px; margin-left: 20px; margin-top: 20px;"
						v-if="active === 0" v-for="(item ,index) in goodsList_moblie" :key="index" span="8" @click="focu(item)">
						<van-image width="6rem" height="6rem" fit="fill" :src="item.image_src" />
					</van-col>
					<van-col v-if="active === 1"  v-for="(item ,index) in goodsList_nvzhuan" :key="index" span="8" @click="focu(item)">
						<van-image width="4rem" height="6rem" fit="fill" :src="item.image_src" />
					</van-col>
					<van-col v-if="active === 2" v-for="(item ,index) in goodsList_meizhuan" :key="index" span="8" @click="focu(item)">
						<van-image width="6rem" height="6rem" fit="fill" :src="item.image_src" />
					</van-col>
					<van-col v-if="active === 3" v-for="(item ,index) in goodsList_diannao" :key="index" span="8" @click="focu(item)">
						<van-image width="6rem" height="6rem" fit="fill" :src="item.image_src" />
					</van-col>
					<van-col v-if="active === 4" v-for="(item ,index) in goodsList_zhuzhu" :key="index" span="8" @click="focu(item)">
						<van-image width="6rem" height="6rem" fit="fill" :src="item.image_src" />
					</van-col>
				</van-row>

			</template>
		</van-tree-select>
		</div>
		
	</div>
</template>

<script>
	import Search from '../../components/search.vue'
	import {
		getGoods_type
	} from '../../comoon/api/index.js'
	export default {
		data() {
			return {
				show: false,
				active: 0,
				items: [{
						text: '手机'
					},
					{
						text: '女装'
					},
					{
						text: '美妆'
					},
					{
						text: '电脑'
					}, {
						text: '男装'
					}
				],
				goodsList_moblie: [],
				goodsList_nvzhuan: [],
				goodsList_meizhuan: [],
				goodsList_diannao: [],
				goodsList_zhuzhu: [],
				moblie:'手机',
				nvzhuan:'女装',
				meizhuan:'美妆',
				diannao:'电脑',
				zhuzhu:'猪猪'
			};
		},
		mounted() {
			this.getgoods_moblie();
			this.getgoods_diannao();
			this.getgoods_nvzhuang();
			this.getgoods_meizhuan();
		},
		methods: {
			focu(o){
				localStorage.setItem('item',JSON.stringify(o));
				this.$router.push({path: "/detail", query: {id: o.id , name:o.name , src:o.image_src , srcc:o.src ,sale:o.sale,detail_src:o.detail_src}})
			},
			getgoods_moblie() {
				getGoods_type(this.moblie).then(response => {
					this.goodsList_moblie = response;
				}, response => {
					console.log("error");
				})
			},
			getgoods_nvzhuang() {
				getGoods_type(this.nvzhuan).then(response => {
					this.goodsList_nvzhuan = response;
				}, response => {
					console.log("error");
				})
			},
			getgoods_meizhuan() {
				getGoods_type(this.meizhuan).then(response => {
					this.goodsList_meizhuan = response;
				}, response => {
					console.log("error");
				})
			},
			getgoods_diannao() {
				getGoods_type(this.diannao).then(response => {
					this.goodsList_diannao = response;
				}, response => {
					console.log("error");
				})
			},
		},
		components: {
			Search
		},
	};
</script>

<style>
	.content {
		padding: 16px 16px 160px;
	}
</style>
