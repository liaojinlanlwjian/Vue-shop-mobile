<template>
	<div>
		<div>
			<Search></Search>
		</div>
		<div style="height: 651px;">
			<van-tree-select height="auto" :items="items" :main-active-index.sync="active">
			<template #content>
				<van-row gutter="20">
					<van-col style="width:100px; height: 100px; margin-left: 20px; margin-top: 20px;"
						v-if="active === 0" v-for="(item ,index) in goodsList" :key="index" span="8" @click="focu(item)">
						<van-image width="6rem" height="6rem" fit="fill" :src="item.image_src" />
					</van-col>
					<van-col v-if="active === 1" v-for="(item ,index) in goodsList" :key="index" span="8">{{item.name}}
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
		getIcon,
		getGoods
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
						text: '服装'
					},
					{
						text: '运动'
					},
					{
						text: '女装'
					}, {
						text: '男装'
					}
				],
				goodsList: []
			};
		},
		mounted() {
			this.getgoods();
		},
		methods: {
			focu(o){
				console.log(o);
			},
			getgoods() {
				getGoods().then(response => {
					console.log(response);
					this.goodsList = response;
				}, response => {
					console.log("error");
				})
			}
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
