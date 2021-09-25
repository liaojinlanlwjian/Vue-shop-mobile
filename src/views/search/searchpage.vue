<template>
	<div>
		<van-nav-bar
		  :title="keywords"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<div style="margin: 15px auto; height: auto;">
			<van-row>
				<van-col v-for="(item,index) in goodsList" :key="index" span="12" @click="buyGoods(item)"
					style="width: 45%; height: auto; border-radius: 17px; background-color: #FFFFFF; margin-top: 20px;margin-left: 10px; ">
					<div style="width: 80%; height: 170px; margin: 0px auto;">
						<van-image width="100%" height="10rem" :src="item.image_src" />
					</div>
					<div style="overflow: hidden; width: 94%; height: 15px; font-size: 12px;  padding-left: 5px; margin-top: 10px;">
						<span>{{item.name}}</span>
					</div>
					<div style="color: crimson;font-size: 12px; padding-left: 5px; margin-top: 10px; margin-bottom: 10px;">
						<span>{{item.sale}}</span>
					</div>
				</van-col>
			</van-row>
		
		</div>
	</div>
</template>

<script>
	import {
		getGoods_type
	} from '../../comoon/api/index.js'
	export default {
	  data() {
	    return {
	      keywords:'',
		  goodsList:[],
	    };
	  },
	  mounted() {
	  	this.keywords = this.$route.query.keywords;
		this.getdata();
	  },
	  methods: {
		  buyGoods(o){
		  	localStorage.setItem('item',JSON.stringify(o));
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
		  		delivery:o.delivery
		  	}
		  })
		  },
		  getdata(){
			  getGoods_type(this.keywords).then(res=>{
				  this.goodsList = res;
			  },res=>{
				  console.log("error");
			  })
		  },
	     onClickLeft() {
	          this.$router.go(-1);
	        },
	  },
	};
</script>

<style>
	
</style>
