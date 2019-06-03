<template>
  <div>
    <pc-nav/>
    <div class="header">
      <div class="w">
        <img src="https://lshaomall.oss-cn-shenzhen.aliyuncs.com/images/Logo4.png" alt style="top: 27px;position: relative;"  @click.prevent="goHome" class="link">
        <div class="search-con">
          <input class="search-input" v-model="searchInfo" @keyup.enter="goGoodsListPage(searchInfo)" id="search-input" placeholder="请输入课程名称">
          <button
            class="search-btn"
            @click="goGoodsListPage(searchInfo)"
            id="search-btn"
            @keyup.13="goGoodsListPage(searchInfo)"
          >
            <span class="glyphicon glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
          <ul class="search-list">
            <li class="search-item" v-for="seach in hotSearchData" :key="seach">
              <a href="javascript:void(0)" class="link hightlight"  @click="goGoodsListPage(seach,'')">{{seach}}</a>
            </li>
          </ul>
        </div>
        <div class="shop" style="display: none;">
          <img src="http://oss.lshao.cn/images/Cart.png" alt="" class="img">
          <span class="font link" @click.prevent="loadPage('user-cart')">&nbsp;购物车</span><span class="hightlight">({{this.$store.getters.getCartInfo.totalNum}})</span>
        </div>
        <div class="download">
          <span class="button link" @click.prevent="loadPage('download')" >客户端下载</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import pcNav from "components/layout/nav";
export default {
  mounted() {
      this.ajax({
        type: "GET",
        // url: `/uac/auth/category/getProductCategoryDtoByPid/0`,
        // url: `/uac/auth/category/getCategoryAndProductDtoByPid/0`,
        url: `/uac/auth/hotSearch`,
        success: (res) => {
          if (res.code === 200) {
            this.hotSearchData = res.result;
          } else {
            
          }
        }
      });
  },
  data() {
    // const keyword = this.getUrlParam('keyword');
    return {
      searchInfo: '',
      hotSearchData: ['初三数学','初一英语','初二英语','热门课程']
    };
  },
  computed: {
    // searchInfo() {
    //   return '';
    // },
  },
  components: {
    pcNav
  },
  methods: {
    goGoodsListPage(keyword) {
      let param = {};
      param.keyword = keyword;
      console.info(this.$route);
      if (this.$route.name === "goods-list") {
        console.info("emit searchProduct");
        this.loadPage("goods-list", param);
        this.$pcBus.$emit("searchProduct");
      } else {
        this.loadPage("goods-list", param);
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.w .title {
  text-align: center;
  color: #409eff;
}
.header {
  height: 100px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px 0px rgba(34, 23, 20, 0.1);
  margin-bottom: 36px;
}

.search-con {
  width: 360px;
  height: 36px;
  border-radius: 18px;
  border: solid 1px #d0d0d0;
  position: relative;
  top: -23px;
  left: 360px;
  display: block;
}

.header .search-con .search-input {
  border: none;
  width: 300px;
  height: 20px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: black;
  position: relative;
  top: 8px;
  left: 12px;
  outline: none;
}

.header .search-con .search-input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #d0d0d0;
}

.header .search-con .search-input:focus {
  border: none;
}

.header .search-con .search-btn {
  position: relative;
  border: none;
  top: 8px;
  left: 30px;
}

.header .search-con .search-btn:focus {
  outline: none;
}
.search-list{
  position: relative;
  top: 25px;

}
.search-list .search-item{
  float: left;
  margin-left: 20px;
}

.search-list .search-item .link{
	width: 48px;
	height: 12px;
	
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #666666;
}
.search-list .search-item .hightlight{
	color: #4d7fff;
}
.shop{
    // background-color: red;
    position: absolute;
    top: 36px;
    display: inline;
    left: 780px;

}

.shop .img{
  display: inline;
    position: relative;
    top: -3px;
}

.shop .font{
	
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #333333;
}

.shop .hightlight{
	
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #4d7fff;
}
.header .download {
	width: 136px;
	height: 50px;
	border-radius: 25px;
	border: solid 1px #4d7fff;
      position: absolute;
    top: 22px;
    left: 943px;
}

.header .download .button{
	width: 80px;
	height: 16px;
	
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #4d7fff;
  position: relative;
    top: 12px;
    left: 26px;
  
}

</style>
