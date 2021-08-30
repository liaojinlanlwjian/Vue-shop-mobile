<template>
  <div class="hello">
	  
	  <template>
		<van-search
		  v-model="value"
		  show-action
		  label="地址"
		  placeholder="请输入搜索关键词"
		  @search="onSearch"
		>
		  <template #action>
		    <div @click="onSearch">搜索</div>
		  </template>
		</van-search>
	</template>
	  
	  
	 
	
 
 
 <router-view />
 
 <van-tabbar route>
   <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>
   <van-tabbar-item replace to="/1" icon="home-o">标签</van-tabbar-item>
   <van-tabbar-item replace to="/1" icon="home-o">标签</van-tabbar-item>
   <van-tabbar-item replace to="/1" icon="search">标签</van-tabbar-item>
 </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     imgList: [
            {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
